import { useState, useEffect } from 'react'
import ProductCard from '../components/shared/ProductCard'
import CategoryButton from '../components/catalogo/CategoryButton'
import InfinityIcon from '../components/icons/InfinityIcon';
import ShrimpIcon from '../components/icons/ShrimpIcon';
import SnowflakeIcon from '../components/icons/SnowflakeIcon';
import SprayBottleIcon from '../components/icons/SprayBottleIcon';
import EggIcon from '../components/icons/EggIcon';
import BoxIcon from '../components/icons/BoxIcon';
import PaintKanji from '../assets/images/hero-images/paint-kanji.webp';
import { Link } from 'react-router-dom';

export default function Catalogo() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('todos')
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(true)

    // Cargar productos desde WordPress
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // const response = await fetch('http://localhost/insuvald/wordpress/wp-json/wp/v2/productos?per_page=100')
                const response = await fetch('https://almarquardt.laboratoriodiseno.cl/insuvald-s7/wordpress/wp-json/wp/v2/productos?per_page=100')
                const data = await response.json()
                setProducts(data)
                setLoading(false)
            } catch (error) {
                console.error('Error al cargar productos:', error)
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    // Cargar categorías desde WordPress
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                // const response = await fetch('http://localhost/insuvald/wordpress/wp-json/wp/v2/categoria-producto')
                const response = await fetch('https://almarquardt.laboratoriodiseno.cl/insuvald-s7/wordpress/wp-json/wp/v2/categoria-producto')
                const data = await response.json()
                setCategories(data)
            } catch (error) {
                console.error('Error al cargar categorías:', error)
            }
        }
        fetchCategories()
    }, [])

    // Mapeo de slugs a iconos
    const categoryIcons = {
        'todos': InfinityIcon,
        'insumos-para-sushi': ShrimpIcon,
        'congelados-y-refrigerados': SnowflakeIcon,
        'limpieza-y-packaging': SprayBottleIcon,
        'abarrotes': BoxIcon,
        'huevos': EggIcon
    }

    // Filtrar productos por categoría y búsqueda
    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'todos' || 
            product['categoria-producto']?.includes(parseInt(selectedCategory))
        
        const matchesSearch = product.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
        
        return matchesCategory && matchesSearch
    })

    return (
        <section className="bg-Crema min-h-screen py-24 px-4 relative">
            {/* Overlay de textura de papel */}
            <div className="paper-texture-overlay"></div>
            {/* Kanji decorativo */}
            <img src={PaintKanji} alt="Imagen de Kanji" className="absolute pointer-events-none w-24 right-5 -top-15 opacity-100 hidden lg:block"/>
            
            <article className="max-w-7xl flex flex-col mx-auto px-4 relative z-10">
                {/* Título */}
                <div className="text-center mb-12">
                    <h1 className="text-Negro font-IM-Fell-English text-[40px]">
                        Catálogo de Productos
                    </h1>
                    <p className="text-Negro leading-5">
                        Estos son los productos que actualmente tenemos disponibles en nuestro local.
                        <br />
                        Para consultar stock, puedes ponerte en <Link to="/#contacto" className="text-Rojo underline">contacto</Link> con nosotros.
                    </p>
                </div>

                {/* Filtros de categorías */}
                <div className="text-center mb-8 max-w-5xl mx-auto">
                    <h2 className="text-Negro text-2xl mb-4">Seleccione categorías:</h2>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
                        <CategoryButton 
                            icon={InfinityIcon}
                            label="Ver todo"
                            isActive={selectedCategory === 'todos'}
                            onClick={() => setSelectedCategory('todos')}
                        />
                        {categories.map(category => {
                            const IconComponent = categoryIcons[category.slug] || BoxIcon
                            return (
                                <CategoryButton 
                                    key={category.id}
                                    icon={IconComponent}
                                    label={category.name}
                                    isActive={selectedCategory === String(category.id)}
                                    onClick={() => setSelectedCategory(String(category.id))}
                                />
                            )
                        })}
                    </div>
                </div>

                {/* Buscador */}
                <div className="flex justify-center mb-12">
                    <input 
                        type="text"
                        placeholder="Buscar producto..."
                        className="px-6 py-2 border-2 border-Negro rounded-full w-full max-w-md focus:outline-none focus:border-Amarillo transition"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Grid de productos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-16 justify-items-center">
                    {loading ? (
                        <p className="col-span-full text-center text-Negro">Cargando productos...</p>
                    ) : filteredProducts.length === 0 ? (
                        <p className="col-span-full text-center text-Negro">No se encontraron productos.</p>
                    ) : (
                        filteredProducts.map(product => {
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
            </article>
        </section>
    )
}