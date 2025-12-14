import { createContext, useContext, useState, useEffect } from 'react'

const QuoteContext = createContext()

export function QuoteProvider({ children }) {
    const [quoteMode, setQuoteMode] = useState(false)
    const [quoteItems, setQuoteItems] = useState([])
    const [isPanelOpen, setIsPanelOpen] = useState(false)

    // Cargar cotización guardada al iniciar
    useEffect(() => {
        const saved = localStorage.getItem('insuvald-quote')
        if (saved) {
            try {
                setQuoteItems(JSON.parse(saved))
            } catch (error) {
                console.error('Error al cargar cotización:', error)
            }
        }
    }, [])

    // Guardar cotización cuando cambia
    useEffect(() => {
        localStorage.setItem('insuvald-quote', JSON.stringify(quoteItems))
    }, [quoteItems])

    // Activar/Desactivar modo cotización
    const toggleQuoteMode = () => {
        setQuoteMode(!quoteMode)
        if (!quoteMode) {
            // Al activar, cerrar panel si estaba abierto
            setIsPanelOpen(false)
        }
    }

    // Añadir producto a la cotización
    const addItem = (product) => {
        const existingItem = quoteItems.find(item => item.id === product.id)
        
        if (existingItem) {
            // Si ya existe, sumar la cantidad
            setQuoteItems(quoteItems.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + product.quantity }
                    : item
            ))
        } else {
            // Si no existe, agregarlo
            setQuoteItems([...quoteItems, product])
        }
    }

    // Actualizar cantidad de un item
    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeItem(productId)
        } else if (newQuantity <= 999) {
            setQuoteItems(quoteItems.map(item =>
                item.id === productId
                    ? { ...item, quantity: Math.min(newQuantity, 999) }
                    : item
            ))
        }
    }

    // Eliminar item
    const removeItem = (productId) => {
        setQuoteItems(quoteItems.filter(item => item.id !== productId))
    }

    // Limpiar cotización
    const clearQuote = () => {
        setQuoteItems([])
        localStorage.removeItem('insuvald-quote')
    }

    // Calcular total
    const getTotal = () => {
        return quoteItems.reduce((total, item) => {
            return total + (item.price * item.quantity)
        }, 0)
    }

    return (
        <QuoteContext.Provider value={{
            quoteMode,
            toggleQuoteMode,
            quoteItems,
            addItem,
            updateQuantity,
            removeItem,
            clearQuote,
            getTotal,
            isPanelOpen,
            setIsPanelOpen
        }}>
            {children}
        </QuoteContext.Provider>
    )
}

// Hook personalizado para usar el contexto
export function useQuote() {
    const context = useContext(QuoteContext)
    if (!context) {
        throw new Error('useQuote debe usarse dentro de QuoteProvider')
    }
    return context
}
