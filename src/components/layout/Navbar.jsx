import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoNucleo from '../../assets/images/insuvald-nucleo.png';
import LogoNombre from '../../assets/images/insuvald-nombre.png';
import CatalogButton from '../shared/CatalogButton.jsx';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

        useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, [ ]);

    return(
        <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-500 max-w-[1600px] px-8 pt-2 sm:pt-8 md:py-2 w-full">
            <div className={`flex justify-between items-center px-8 py-2 rounded-3xl transition duration-500 ${scrolled ? 'bg-Crema/80 backdrop-blur-sm shadow-lg' : ''}`}>
                {/* Logo */}
                <Link to="/" className='flex items-center gap-1 cursor-pointer brightness-0 hover:brightness-100 transition duration-200'>
                    <img src={LogoNucleo} alt="Logo Insuvald Núcleo" className="w-10"/>
                    <img src={LogoNombre} alt="Logo Insuvald Nombre" className="w-24"/>
                </Link>

                {/* Menú de navegación (desktop) */}
                <ul className="hidden lg:flex items-center gap-10 text-xl absolute left-1/2 -translate-x-1/2">
                    <a href="/#ubicacion-horarios" className="cursor-pointer text-GrisForm hover:text-Negro transition whitespace-nowrap">Ubicación y horarios</a>
                    <a href="/#despachos" className="cursor-pointer text-GrisForm hover:text-Negro transition">Despachos</a>
                    <a href="/#contacto" className="cursor-pointer text-GrisForm hover:text-Negro transition">Contacto</a>
                </ul>

                {/* Botón Cotizar (desktop) */}
                <CatalogButton className="hidden lg:flex mr-5 shadow-xl" />

                {/* Menú hamburguesa (mobile) */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center"
                    aria-label="Menu"
                >
                    <span className={`block h-0.5 w-full bg-Negro transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block h-0.5 w-full bg-Negro transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-0.5 w-full bg-Negro transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Menú mobile (dropdown) */}
            <ul className={`lg:hidden absolute z-200 top-full left-0 right-0 bg-Crema/80 backdrop-blur-sm shadow-lg flex flex-col items-center gap-4 py-6 text-xl transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <a href='/#ubicacion-horarios' className="cursor-pointer text-GrisForm hover:text-Negro transition">Ubicación y horarios</a>
                <a href='/#despachos' className="cursor-pointer text-GrisForm hover:text-Negro transition">Despachos</a>
                <a href='/#contacto' className="cursor-pointer text-GrisForm hover:text-Negro transition">Contacto</a>
                <li>
                    <CatalogButton />
                </li>
            </ul>
        </nav>
    )
}