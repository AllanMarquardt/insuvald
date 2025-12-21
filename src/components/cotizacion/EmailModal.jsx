import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function EmailModal({ isOpen, onClose, quoteItems, total }) {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        empresa: '',
        mensaje: ''
    })
    const [sending, setSending] = useState(false)
    const [status, setStatus] = useState({ type: '', message: '' })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)
        setStatus({ type: '', message: '' })

        // Validación básica
        if (!formData.nombre || !formData.correo || !formData.telefono) {
            setStatus({ 
                type: 'error', 
                message: 'Por favor completa todos los campos obligatorios' 
            })
            setSending(false)
            return
        }

        // Formatear lista de productos
        const productList = quoteItems.map(item => 
            `- ${item.title} [x${item.quantity}] = $${(item.price * item.quantity).toLocaleString('es-CL')}`
        ).join('\n')

        try {
            const result = await emailjs.send(
                'service_s185hlc',
                'template_btl174q',
                {
                    nombre: formData.nombre,
                    correo: formData.correo,
                    telefono: formData.telefono,
                    empresa: formData.empresa || '',
                    productos: productList,
                    total: total.toLocaleString('es-CL'),
                    mensaje: formData.mensaje || ''
                },
                'vuBgsNGHNJy1Twvyb'
            )

            if (result.text === 'OK') {
                setStatus({ 
                    type: 'success', 
                    message: '¡Cotización enviada! Te contactaremos pronto.' 
                })
                // Limpiar formulario y cerrar después de 6 segundos
                setTimeout(() => {
                    setFormData({ nombre: '', correo: '', telefono: '', empresa: '', mensaje: '' })
                    setStatus({ type: '', message: '' })
                    onClose()
                }, 6000)
            }
        } catch (error) {
            console.error('Error al enviar cotización:', error)
            setStatus({ 
                type: 'error', 
                message: 'Hubo un error al enviar la cotización. Intenta nuevamente.' 
            })
        } finally {
            setSending(false)
        }
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
                        className="fixed inset-0 bg-black/60 z-50"
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
                            {/* Mensaje de estado */}
                            {status.message && (
                                <div className={`p-4 rounded-lg text-center ${
                                    status.type === 'success' 
                                        ? 'bg-green-100 text-green-800 border border-green-300' 
                                        : 'bg-red-100 text-red-800 border border-red-300'
                                }`}>
                                    {status.message}
                                </div>
                            )}

                            {/* Nombre */}
                            <div>
                                <label className="block text-Negro font-bold mb-1 text-sm">
                                    Nombre y apellido *
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
                                    Correo electrónico *
                                </label>
                                <input
                                    type="email"
                                    name="correo"
                                    value={formData.correo}
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
