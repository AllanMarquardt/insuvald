import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useQuote } from '../../context/QuoteContext'
import QuoteItem from './QuoteItem'
import EmailModal from './EmailModal'

export default function QuotePanel() {
    const { quoteMode, quoteItems, isPanelOpen, setIsPanelOpen, getTotal, clearQuote } = useQuote()
    const [showEmailModal, setShowEmailModal] = useState(false)

    // Solo mostrar si el modo cotización está activo
    if (!quoteMode) return null

    const total = getTotal()
    const isEmpty = quoteItems.length === 0

    // Mensaje de WhatsApp
    const handleWhatsApp = () => {
        const productList = quoteItems.map(item => 
            `• ${item.title} [x${item.quantity}] - $${(item.price * item.quantity).toLocaleString('es-CL')}`
        ).join('%0A')

        const message = 
            `Hola, me gustaría cotizar los siguientes productos: %0A%0A` +
            `${productList}%0A%0A` +
            `━━━━━━━━━━━━━━━%0A` +
            `TOTAL: $${total.toLocaleString('es-CL')}%0A` +
            `━━━━━━━━━━━━━━━%0A%0A` +
            `Gracias.`


        const phoneNumber = '56993517952'
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
    }

    return (
        <>
            <AnimatePresence>
                {isPanelOpen && (
                    <>
                        {/* Overlay oscuro */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsPanelOpen(false)}
                            className="fixed inset-0 bg-black/50 z-30"
                        />

                        {/* Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-600 flex flex-col"
                        >
                            {/* Header */}
                            <div className="bg-Rojo text-white px-6 py-2 flex items-center justify-between">
                                <h3 className="text-xl">Tu Cotización</h3>
                                <button
                                    onClick={() => setIsPanelOpen(false)}
                                    className="w-10 h-10 rounded-full hover:bg-white/20 transition flex items-center justify-center"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            
                            {/* Info */}
                            <div className='pt-3 px-3'>
                                <p className='text-sm text-Negro/60 leading-4 text-center'>Acá puedes enviarnos tu cotización. <br />El precio de los productos y las cantidades disponibles pueden variar. Te lo informaremos en la respuesta. </p>
                            </div>

                            {/* Lista de productos */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                                {isEmpty ? (
                                    <div className="flex flex-col items-center justify-center h-full text-Negro/40">
                                        <svg className="w-16 h-16 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <p className="text-center font-bold">No hay productos en tu cotización</p>
                                        <p className="text-sm text-center mt-1">Añade productos desde el catálogo</p>
                                    </div>
                                ) : (
                                    <>
                                        {quoteItems.map(item => (
                                            <QuoteItem key={item.id} item={item} />
                                        ))}
                                    </>
                                )}
                            </div>

                            {/* Footer */}
                            {!isEmpty && (
                                <div className="border-t border-Negro/20 p-4 space-y-2">
                                    {/* Total */}
                                    <div className="bg-Amarillo/20 border-2 border-Amarillo rounded-lg p-3">
                                        <p className="text-Negro text-center">
                                            <span className="font-bold">TOTAL</span><br />
                                            <span className="text-2xl font-bold">${total.toLocaleString('es-CL')}</span>
                                        </p>
                                    </div>

                                    {/* Botones de envío */}
                                    <button
                                        onClick={() => setShowEmailModal(true)}
                                        className="w-full bg-Rojo hover:bg-Amarillo text-white hover:text-Negro transition py-3 rounded-lg font-bold flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        Enviar por Email
                                    </button>

                                    <button
                                        onClick={handleWhatsApp}
                                        className="w-full bg-[#25D366] hover:bg-[#1b9a4c] text-white transition py-3 rounded-lg font-bold flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                        Enviar por WhatsApp
                                    </button>

                                    {/* Botón vaciar */}
                                    <button
                                        onClick={() => {
                                            if (confirm('¿Quieres vaciar tu cotización actual?')) {
                                                clearQuote()
                                            }
                                        }}
                                        className="w-full text-white bg-gray-500 hover:bg-gray-600 transition p-2 font-bold text-sm cursor-pointer mt-2"
                                    >
                                        🗑️ Vaciar cotización
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Modal de Email */}
            <EmailModal 
                isOpen={showEmailModal}
                onClose={() => setShowEmailModal(false)}
                quoteItems={quoteItems}
                total={total}
            />
        </>
    )
}
