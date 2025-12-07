export default function ProductCard({ image, title, price }) {
    return (
        <div className="bg-Blanco pt-4 h-78 w-55 relative overflow-hidden shadow-md">
            {/* Círculo rojo */}
            <div className="bg-[#DD002B] absolute w-35 h-35 rounded-full -bottom-20 left-1/2 transform -translate-x-1/2"></div>
            {/* Pestañas arriba y abajo */}
            <div className="bg-Negro absolute w-10 h-1.5 top-0 left-1/2 transform -translate-x-1/2"></div>
            <div className="bg-Negro absolute w-10 h-1.5 bottom-0 left-1/2 transform -translate-x-1/2"></div>
            {/* Card content */}
            <div className="w-[80%] h-[60%] flex flex-col items-center mx-auto">
                <img src={image} alt={title} className="h-[85%] w-full object-contain drop-shadow-2xl mb-4" />
                <span className="uppercase text-center font-light tracking-wide text-lg text-Negro leading-4.5">{title}</span>
            </div>
            {/* Precio */}
            <span className="text-2xl text-Blanco absolute bottom-2 left-1/2 transform -translate-x-1/2">{price}</span>
        </div>
    )
}
