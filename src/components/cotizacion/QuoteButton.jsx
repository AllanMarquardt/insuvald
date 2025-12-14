import { motion } from 'framer-motion'
import { useQuote } from '../../context/QuoteContext'

export default function QuoteButton() {
    const { quoteMode, quoteItems, isPanelOpen, setIsPanelOpen } = useQuote()

    // Solo mostrar si el modo cotización está activo
    if (!quoteMode) return null

    const itemCount = quoteItems.length

    return (
        <motion.button
            onClick={() => setIsPanelOpen(!isPanelOpen)}
            className="fixed bottom-5 right-5 sm:bottom-12 sm:right-22 z-40 w-20 h-20 rounded-full bg-Rojo hover:bg-Amarillo text-white hover:text-Negro shadow-2xl flex items-center justify-center transition-colors duration-300 cursor-pointer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
        >
            {/* Ícono de carrito */}
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>

            {/* Badge con cantidad */}
            {itemCount > 0 && (
                <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-Amarillo text-Negro text-xl font-bold rounded-full w-9 h-9 flex items-center justify-center border-2 border-white"
                >
                    {itemCount}
                </motion.span>
            )}
        </motion.button>
    )
}
