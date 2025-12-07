import { useState, useEffect } from 'react';
import ProductCard from '../shared/ProductCard.jsx';
import RedPaintButton from '../../assets/images/red-paint-button.webp';
import { Link } from 'react-router-dom';

export default function ProductosPopulares() {
    const [featuredProducts, setFeaturedProducts] = useState([])
    const [loading, setLoading] = useState(true)

    // Cargar productos destacados desde WordPress
    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                const response = await fetch('http://localhost/insuvald/wordpress/wp-json/wp/v2/productos?per_page=100')
                const data = await response.json()
                
                // Filtrar solo productos destacados
                const featured = data.filter(product => product.acf?.producto_destacado === true)
                setFeaturedProducts(featured)
                setLoading(false)
            } catch (error) {
                console.error('Error al cargar productos destacados:', error)
                setLoading(false)
            }
        }
        fetchFeaturedProducts()
    }, [])

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
                        {loading ? (
                            <p className="col-span-full text-center text-Crema">Cargando productos...</p>
                        ) : featuredProducts.length === 0 ? (
                            <p className="col-span-full text-center text-Crema">No hay productos destacados disponibles.</p>
                        ) : (
                            featuredProducts.map(product => {
                                const imageUrl = product.acf?.foto_de_producto || ''
                                const price = product.acf?.precio_de_producto || ''
                                const formattedPrice = price ? parseInt(price).toLocaleString('es-CL') : ''
                                
                                return (
                                    <ProductCard 
                                        key={product.id}
                                        image={imageUrl}
                                        title={product.title.rendered}
                                        price={`$${formattedPrice}`}
                                    />
                                )
                            })
                        )}
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