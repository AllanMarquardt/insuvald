import RedCircle from '../../assets/images/hero-images/red-circle.webp';
import Sushi from '../../assets/images/hero-images/sushi-1.webp';
import Shrimp from '../../assets/images/hero-images/shrimp.webp';
import Eggs from '../../assets/images/hero-images/eggs.webp';
import Sakura from '../../assets/images/sakura.webp';
import Navbar from '../layout/Navbar.jsx';
import PaintKanji from '../../assets/images/hero-images/paint-kanji.webp';

export default function Hero() {
    return (
        <>
        <section className="relative z-10 flex flex-col bg-Crema min-h-[85vh] overflow-hidden">
            {/* Overlay de textura de papel */}
            <div className="paper-texture-overlay"></div>
            {/* Hero Content */}
            <div className="max-w-[1440px] mx-auto mt-16 md:mt-0 px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-18 items-center flex-1">
                {/* Título */}
                <div className="mx-auto">
                    <h1 className="text-[64px] font-IM-Fell-English">Insuvald</h1>
                </div>
                {/* Img Círculo rojo */}
                <div className="mx-auto relative pointer-events-none">
                    <img src={RedCircle} alt="Círculo Rojo" className="w-140 lg:w-104"/>
                    <img src={Sushi} alt="Imagen de Sushi" className="absolute -left-20 -top-10 w-56 animate-upanddown" style={{animationDelay: '0s'}}/>
                    <img src={Shrimp} alt="Imagen de Camarón" className="absolute -right-25 -top-10 w-62 animate-upanddown" style={{animationDelay: '1.5s'}}/>
                    <img src={Eggs} alt="Imagen de Huevos" className="absolute -bottom-15 -left-10 w-56 -rotate-12 animate-upanddown" style={{animationDelay: '0.8s'}}/>
                </div>
                {/* Texto introductorio */}
                <div className="text-xl font-regular flex flex-col gap-4 mx-auto text-center lg:text-left max-w-md leading-5">
                    <p>Somos una distribuidora Valdiviana, especializada en productos congelados, insumos para sushi, huevos y demás.</p>
                    <p>Entregas a <strong>Valdivia</strong> y comunas de <br /> la región de <strong>Los Ríos</strong>.</p>
                </div>
            </div>
            {/* Sakuras decorativos */}
            <img src={Sakura} alt="Imagen de Sakura" className="absolute pointer-events-none -bottom-10 -left-25 w-80 md:w-130 -rotate-20 opacity-15"/>
            <img src={Sakura} alt="Imagen de Sakura" className="absolute pointer-events-none -bottom-10 -right-25 w-80 md:w-130 rotate-20 opacity-15 -scale-x-[1]"/>
            {/* Kanji decorativo */}
            <img src={PaintKanji} alt="Imagen de Kanji" className="absolute pointer-events-none w-24 right-5 -top-15 opacity-100 hidden lg:block"/>
        </section>
    </>
  )
}
