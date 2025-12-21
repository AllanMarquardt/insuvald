import { useState } from 'react'
import emailjs from '@emailjs/browser'
import WhatsappIcon from "../icons/WhatsappIcon"
import EmailIcon from "../icons/EmailIcon"
import EmailIcon2 from "../icons/EmailIcon2"
import UserIcon from "../icons/UserIcon"
import PhoneIcon from "../icons/PhoneIcon"
import ChatBubbleIcon from "../icons/ChatBubbleIcon"
import Sakura from '../../assets/images/sakura.webp';


export default function Contacto(){
    // Estado del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        mensaje: ''
    })
    const [status, setStatus] = useState({ type: '', message: '' })
    const [isLoading, setIsLoading] = useState(false)

    // Manejar cambios en los campos del formulario
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // Manejar envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setStatus({ type: '', message: '' })

        // Validación básica
        if (!formData.nombre || !formData.correo || !formData.mensaje) {
            setStatus({ 
                type: 'error', 
                message: 'Por favor completa todos los campos obligatorios' 
            })
            setIsLoading(false)
            return
        }

        // Enviar el formulario usando EmailJS
        try {
            const result = await emailjs.send(
                'service_s185hlc',
                'template_kk5isa8',
                {
                    nombre: formData.nombre,
                    correo: formData.correo,
                    telefono: formData.telefono || 'No proporcionado',
                    mensaje: formData.mensaje
                },
                'vuBgsNGHNJy1Twvyb'
            )

            if (result.text === 'OK') {
                setStatus({ 
                    type: 'success', 
                    message: '¡Mensaje enviado exitosamente! Te responderemos pronto.' 
                })
                // Limpiar formulario
                setFormData({
                    nombre: '',
                    correo: '',
                    telefono: '',
                    mensaje: ''
                })
            }
        } catch (error) {
            console.error('Error al enviar:', error)
            setStatus({ 
                type: 'error', 
                message: 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.' 
            })
        } finally {
            setIsLoading(false)
        }
    }

    return(
        <>
        <section id='contacto' className="bg-Crema py-16 px-4 relative">
            {/* Overlay de textura de papel */}
            <div className="paper-texture-overlay"></div>
            {/* Contenido */}
            <article data-aos="fade-in" className="max-w-7xl flex flex-col mx-auto px-4">
                {/* Título y descripción */}
                <div className="text-center mb-12">
                    <h1 className="text-Negro font-IM-Fell-English text-[40px]">Contacto</h1>
                </div>
                {/* Formulario */}
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 lg:grid-cols-10 outline-2 outline-Rojo -outline-offset-2 rounded-4xl">
                        {/* Columna de Información */}
                        <div className="col-span-4 bg-Rojo rounded-4xl justify-between px-6 py-12 text-white flex flex-col gap-8 lg:gap-16">
                            {/* Titulo y descripcion */}
                            <div className="flex flex-col">
                                <h3 className="text-3xl font-bold">Información de contacto</h3>
                                <p className="leading-4">Puedes contactarnos a través de los siguientes métodos:</p>
                            </div>
                            {/* Métodos de contacto */}
                            <div>
                                <div className="flex items-center gap-3">
                                    <WhatsappIcon className="w-9 h-9" />
                                    <div className="flex flex-col">
                                        <span className="text-lg">+569 82638704</span>
                                        <span className="text-sm leading-2">(Llamada o WhatsApp)</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 mt-4">
                                    <EmailIcon className="w-9 h-9" />
                                    <div className="flex flex-col leading-4">
                                        <span className="text-lg">insumosvaldiviaspa@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            {/* Texto adicional */}
                            <span className="leading-4">O puedes usar el formulario de contacto. <br /> Te responderemos a la brevedad.</span>
                        </div>


                        {/* Columna de Formulario */}
                        <div className="col-span-6 bg-Crema/30 rounded-4xl px-8 lg:px-16 py-8 flex flex-col gap-6 relative overflow-hidden">
                            {/* Sakura decorativo */}
                            <img src={Sakura} alt="Imagen de Sakura" className="absolute pointer-events-none -scale-x-[1] w-150 -right-20 -top-10 opacity-10 -z-5"/>

                            <div className="flex flex-col gap-4">
                                {/* Nombre */}
                                <div>
                                    <label htmlFor="nombre" className="flex items-center gap-2">
                                        <UserIcon className="w-6 h-6 text-Rojo" />
                                        <span className="text-GrisForm text-lg leading-0">Nombre y apellido *</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        id="nombre" 
                                        name="nombre" 
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-b-2 border-GrisForm py-1 pl-8 focus:outline-none focus:border-Rojo transition duration-400" 
                                    />
                                </div>
                                {/* Correo */}
                                <div>
                                    <label htmlFor="correo" className="flex items-center gap-2">
                                        <EmailIcon2 className="w-6 h-6 text-Rojo" />
                                        <span className="text-GrisForm text-lg leading-0">Correo electrónico *</span>
                                    </label>
                                    <input 
                                        type="email" 
                                        id="correo" 
                                        name="correo" 
                                        value={formData.correo}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-b-2 border-GrisForm py-1 pl-8 focus:outline-none focus:border-Rojo transition duration-400" 
                                    />
                                </div>
                                {/* Teléfono */}
                                <div>
                                    <label htmlFor="telefono" className="flex items-center gap-2">
                                        <PhoneIcon className="w-6 h-6 text-Rojo" />
                                        <span className="text-GrisForm text-lg leading-0">Número de teléfono</span>
                                    </label>
                                    <input 
                                        type="tel" 
                                        id="telefono" 
                                        name="telefono" 
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b-2 border-GrisForm py-1 pl-8 focus:outline-none focus:border-Rojo transition duration-400" 
                                    />
                                </div>
                                {/* Mensaje */}
                                <div>
                                    <label htmlFor="mensaje" className="flex items-center gap-2">
                                        <ChatBubbleIcon className="w-6 h-6 text-Rojo" />
                                        <span className="text-GrisForm text-lg leading-0">Escribe tu mensaje *</span>
                                    </label>
                                    <textarea 
                                        id="mensaje" 
                                        name="mensaje" 
                                        rows="3" 
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent resize-none border-b-2 border-GrisForm py-1 pl-8 focus:outline-none focus:border-Rojo transition duration-400" 
                                    />
                                </div>
                                {/* Botón Enviar */}
                                <div className="flex justify-end">
                                    <button 
                                        type="submit" 
                                        disabled={isLoading}
                                        className={`bg-Rojo text-white px-12 py-1 text-lg rounded-lg transition duration-300 ${
                                            isLoading 
                                                ? 'opacity-50 cursor-not-allowed' 
                                                : 'cursor-pointer hover:text-Negro hover:bg-Amarillo'
                                        }`}
                                    >
                                        {isLoading ? 'Enviando...' : 'Enviar'}
                                    </button>
                                </div>
                                                            
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
                            </div>
                        </div>
                    </div>
                </form>
            </article>
        </section>
        </>
    )
}