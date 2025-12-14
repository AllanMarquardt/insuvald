import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useQuote } from '../../context/QuoteContext'

export default function ProductCard({ image, title, price, productData }) {
    const { quoteMode, addItem } = useQuote()
    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        if (productData) {
            addItem({
                id: productData.id,
                title: title,
                price: productData.rawPrice,
                quantity: quantity,
                image: image
            })
            setQuantity(1) // Reset cantidad
        }
    }

    return (
        <div className={`bg-Blanco pt-4 h-78 w-55 relative overflow-hidden shadow-md transition-all duration-300 ${
            quoteMode ? 'ring-2 ring-Amarillo shadow-lg shadow-Amarillo/20' : ''
        }`}>
            {/* Círculo rojo */}
            <div className="bg-[#DD002B] absolute w-35 h-35 rounded-full -bottom-20 left-1/2 transform -translate-x-1/2"></div>
            {/* Pestañas arriba y abajo */}
            <div className="bg-Negro absolute w-10 h-1.5 top-0 left-1/2 transform -translate-x-1/2"></div>
            <div className="bg-Negro absolute w-10 h-1.5 bottom-0 left-1/2 transform -translate-x-1/2"></div>
            {/* Card content */}
            <div className="w-[80%] h-[60%] flex flex-col items-center mx-auto">
                <img src={image} alt={title} className="h-[85%] w-full object-contain drop-shadow-2xl mb-4" />
                <span className="uppercase text-center font-light tracking-wide text-lg text-Negro leading-4.5">{title}</span>
            </div>
            {/* Precio */}
            <span className="text-2xl text-Blanco absolute bottom-2 left-1/2 transform -translate-x-1/2">{price}</span>

            {/* Controles de cotización (condicional) */}
            <AnimatePresence>
                {quoteMode && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-1 left-1/2 transform -translate-x-1/2 w-[70%] bg-white/40 backdrop-blur-sm rounded-lg shadow-xl p-1 space-y-1 border-2 border-Amarillo z-10"
                    >
                        {/* Selector de cantidad */}
                        <div className="flex items-center justify-center gap-1">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-8 h-8 rounded-full bg-Crema hover:bg-Rojo hover:text-white transition flex items-center justify-center text-Negro font-bold border border-Negro/50 cursor-pointer"
                            >
                                -
                            </button>
                            <span className="text-Negro font-bold text-lg w-12 text-center">
                                {quantity}
                            </span>
                            <button
                                onClick={() => setQuantity(Math.min(999, quantity + 1))}
                                className="w-8 h-8 rounded-full bg-Crema hover:bg-green-500 hover:text-white transition flex items-center justify-center text-Negro font-bold border border-Negro/50 cursor-pointer"
                            >
                                +
                            </button>
                        </div>
                        
                        {/* Botón añadir */}
                        <button
                            onClick={handleAdd}
                            className="w-full bg-Rojo hover:bg-Amarillo text-white hover:text-Negro transition py-1 px-2 rounded-lg text-sm cursor-pointer"
                        >
                            Añadir a cotización
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
