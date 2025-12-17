import WhatsApp from '../../assets/images/whatsapp-logo.webp';
import Instagram from '../../assets/images/instagram-logo.webp';
import { useQuote } from '../../context/QuoteContext'

export default function SocialContact(){
    const { quoteMode } = useQuote()
    
    // Si el modo cotización está activo, no mostrar nada
    if (quoteMode) return null

    return (
        <div className='flex gap-3 fixed bottom-5 right-5 sm:bottom-12 sm:right-12 z-50'>
            <a href="https://wa.me/56982638704" target="_blank" rel="noopener noreferrer">
                <img src={WhatsApp} alt="WhatsApp Logo" className='h-12 w-12 sm:w-18 sm:h-18 hover:scale-110 transition duration-300 opacity-60 hover:opacity-100'/>
            </a>
            <a href="https://www.instagram.com/insumosvaldivia" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram Logo" className='h-12 w-12 sm:w-18 sm:h-18 hover:scale-110 transition duration-300 opacity-60 hover:opacity-100'/>
            </a>
        </div>
    )
}