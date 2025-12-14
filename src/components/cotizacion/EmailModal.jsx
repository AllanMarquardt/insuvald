import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EmailModal({ isOpen, onClose, quoteItems, total }) {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        mensaje: ''
    })
    const [sending, setSending] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)

        const productList = quoteItems.map(item => 
            `- ${item.title} x${item.quantity} = $${(item.price * item.quantity).toLocaleString('es-CL')}`
        ).join('\n')

        const emailBody = `
NUEVA COTIZACIÓN - INSUVALD

Datos del cliente:
- Nombre: ${formData.nombre}
- Email: ${formData.email}
- Teléfono: ${formData.telefono}
${formData.empresa ? `- Empresa: ${formData.empresa}` : ''}

Productos solicitados:
${productList}

TOTAL: $${total.toLocaleString('es-CL')}

${formData.mensaje ? `Mensaje adicional:\n${formData.mensaje}` : ''}
        `

        // Integración con servicio de email (simulado aquí)
        console.log('Enviando email:', emailBody)

        // Simulación de envío
        setTimeout(() => {
            setSending(false)
            alert('¡Cotización enviada! Te contactaremos pronto.')
            onClose()
            setFormData({ nombre: '', email: '', telefono: '', empresa: '', mensaje: '' })
        }, 1500)
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay oscuro */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/30 z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.2, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1, y: 0 }}
                        className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-md bg-Crema rounded-2xl shadow-2xl z-700 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-Rojo text-white p-4 flex items-center justify-between">
                            <h3 className="text-xl font-bold">Enviar Cotización</h3>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 rounded-full hover:bg-white/20 transition flex items-center justify-center"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                            {/* Nombre */}
                            <div>
                                <label className="block text-Negro font-bold mb-1 text-sm">
                                    Nombre completo *
                                </label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border-2 border-Negro/20 rounded-lg focus:outline-none focus:border-Amarillo transition"
                                    placeholder="Juan Pérez"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-Negro font-bold mb-1 text-sm">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border-2 border-Negro/20 rounded-lg focus:outline-none focus:border-Amarillo transition"
                                    placeholder="correo@ejemplo.com"
                                />
                            </div>

                            {/* Teléfono */}
                            <div>
                                <label className="block text-Negro font-bold mb-1 text-sm">
                                    Teléfono *
                                </label>
                                <input
                                    type="tel"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border-2 border-Negro/20 rounded-lg focus:outline-none focus:border-Amarillo transition"
                                    placeholder="+56 9 12345678"
                                />
                            </div>

                            {/* Empresa (opcional) */}
                            <div>
                                <label className="block text-Negro font-bold mb-1 text-sm">
                                    Empresa (opcional)
                                </label>
                                <input
                                    type="text"
                                    name="empresa"
                                    value={formData.empresa}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border-2 border-Negro/20 rounded-lg focus:outline-none focus:border-Amarillo transition"
                                    placeholder="Mi Empresa S.A."
                                />
                            </div>

                            {/* Mensaje adicional */}
                            <div>
                                <label className="block text-Negro font-bold mb-1 text-sm">
                                    Mensaje adicional (opcional)
                                </label>
                                <textarea
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-4 py-2 border-2 border-Negro/20 rounded-lg focus:outline-none focus:border-Amarillo transition resize-none"
                                    placeholder="¿Algún comentario o pregunta?"
                                />
                            </div>

                            {/* Total */}
                            <div className="bg-Amarillo/20 border-2 border-Amarillo rounded-lg p-3">
                                <p className="text-Negro text-center">
                                    <span className="font-bold">Total de la cotización:</span><br />
                                    <span className="text-2xl font-bold">${total.toLocaleString('es-CL')}</span>
                                </p>
                            </div>

                            {/* Botón */}
                            <button
                                type="submit"
                                disabled={sending}
                                className="w-full bg-Rojo hover:bg-Amarillo text-white hover:text-Negro transition py-3 rounded-lg font-bold disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                            >
                                {sending ? 'Enviando...' : '📧 Enviar Cotización'}
                            </button>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
