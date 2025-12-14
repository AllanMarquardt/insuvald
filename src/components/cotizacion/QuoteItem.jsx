import { useQuote } from '../../context/QuoteContext'

export default function QuoteItem({ item }) {
    const { updateQuantity, removeItem } = useQuote()

    const handleDecrease = () => {
        updateQuantity(item.id, item.quantity - 1)
    }

    const handleIncrease = () => {
        updateQuantity(item.id, item.quantity + 1)
    }

    const itemTotal = item.price * item.quantity

    return (
        <div className="flex gap-3 p-3 bg-Crema rounded-lg border border-Negro/10">
            {/* Imagen */}
            <div className="w-20 h-20 shrink-0 rounded-md overflow-hidden ">
                <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
                {/* Título */}
                <h4 className="text-Negro font-bold text-sm leading-tight mb-1 line-clamp-2">
                    {item.title}
                </h4>

                {/* Precio unitario */}
                <p className="text-Negro/60 text-sm mb-2">
                    ${item.price.toLocaleString('es-CL')} c/u
                </p>

                {/* Controles */}
                <div className="flex items-center justify-between">
                    {/* Cantidad */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleDecrease}
                            className="w-6 h-6 rounded-full bg-white hover:bg-Rojo hover:text-white transition flex items-center justify-center text-Negro font-bold text-sm border border-Negro/20 cursor-pointer"
                        >
                            -
                        </button>
                        <span className="text-Negro font-bold text-sm min-w-[2ch] text-center">
                            {item.quantity}
                        </span>
                        <button
                            onClick={handleIncrease}
                            disabled={item.quantity >= 999}
                            className="w-6 h-6 rounded-full bg-white hover:bg-green-500 hover:text-white transition flex items-center justify-center text-Negro font-bold text-sm border border-Negro/20 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                        >
                            +
                        </button>
                    </div>

                    {/* Total */}
                    <p className="text-Negro font-bold text-sm">
                        ${itemTotal.toLocaleString('es-CL')}
                    </p>
                </div>
            </div>

            {/* Botón eliminar */}
            <button
                onClick={() => removeItem(item.id)}
                className="shrink-0 w-8 h-8 rounded-full hover:bg-Rojo/30 transition duration-300 flex items-center justify-center text-Rojo cursor-pointer"
                title="Eliminar"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>
    )
}
