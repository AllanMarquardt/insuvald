import ProductCard from '../shared/ProductCard.jsx';
import RedPaintButton from '../../assets/images/red-paint-button.webp';
import AceiteMaxiFrits from '../../assets/images/product-images/maxi-frits-10-litros.png';
import PapasMinutoVerde from '../../assets/images/product-images/papas-prefritas-min-verde-11mm.png';
import AlgaNoriKadoshi from '../../assets/images/product-images/alga-nori-kadoshi-10ud.png';
import SoyaKadoshi from '../../assets/images/product-images/soya-kadoshi-12.5.png';
import { Link } from 'react-router-dom';

export default function ProductosPopulares() {
    return (
        <>
            <section id='productos-populares' className="bg-Negro2 py-16 px-4 relative">
                {/* Overlay de textura de papel */}
                <div className="paper-texture-overlay"></div>
                {/* Contenido */}
                <article className="max-w-7xl flex flex-col mx-auto">
                    {/* Título y descripción */}
                    <div className="text-center mb-12">
                        <h1 className="text-Amarillo font-IM-Fell-English text-[40px]">Productos más populares</h1>
                        <p className="text-Crema leading-5">Estos son algunos de nuestros productos más vendidos. <br />Para ver el catálogo completo, haz click en <strong>“Ver Catálogo”</strong></p>
                    </div>
                    {/* Grid de cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 justify-items-center overflow-hidden">
                        <ProductCard 
                            image={AceiteMaxiFrits}
                            title="Aceite Maxi Frits 10 Litros"
                            price="$26.900"
                        />
                        <ProductCard 
                            image={PapasMinutoVerde}
                            title="Papas Pre Fritas Minuto Verde 1MM"
                            price="$5.900"
                        />
                        <ProductCard 
                            image={AlgaNoriKadoshi}
                            title="Alga Nori Kadoshi 10 UND"
                            price="$3.900"
                        />
                        <ProductCard 
                            image={SoyaKadoshi}
                            title="Soya Kadoshi 12.5 LT"
                            price="$37.990"
                        />
                        <ProductCard 
                            image={AceiteMaxiFrits}
                            title="Aceite Maxi Frits 10 Litros"
                            price="$26.900"
                        />
                        <ProductCard 
                            image={PapasMinutoVerde}
                            title="Papas Pre Fritas Minuto Verde 1MM"
                            price="$5.900"
                        />
                        <ProductCard 
                            image={AlgaNoriKadoshi}
                            title="Alga Nori Kadoshi 10 UND"
                            price="$3.900"
                        />
                        <ProductCard 
                            image={SoyaKadoshi}
                            title="Soya Kadoshi 12.5 LT"
                            price="$37.990"
                        />
                    </div>
                    {/* Botón Ver Catálogo */}
                    <div className="flex justify-center mt-12">
                        <Link to='/catalogo' className="relative cursor-pointer group">
                            <img src={RedPaintButton} alt="" className="w-70 h-16 transition duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(221,31,38,0.3)]" />
                            <span className="absolute inset-0 flex items-center justify-center text-Crema font-IM-Fell-English text-2xl pointer-events-none">
                                Ver Catálogo
                            </span>
                        </Link>
                    </div>
                </article>
            </section>
        </>
    )
}