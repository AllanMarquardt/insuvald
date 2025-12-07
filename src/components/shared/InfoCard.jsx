import WavePattern from '../../assets/images/wave-gray.webp';

export default function InfoCard({ icon: Icon, title, content, contentSize = "text-2xl" }) {
    return (
        <div className="relative w-86 h-45 bg-Blanco p-4 shadow-lg overflow-hidden">
            {/* Ícono */}
            <Icon className='absolute w-22 bg-[#DD002B] z-5 p-3 top-6 left-6 rounded-full text-Blanco'/>
            {/* Background de ondas */}
            <div 
                className="absolute inset-0 bottom-32 opacity-10 bg-size-[150%] bg-center-bottom bg-no-repeat"
                style={{ backgroundImage: `url(${WavePattern})` }}>
            </div>
            {/* Barras grises decorativas */}
            <div className="absolute top-32 left-0 flex flex-col gap-2">
                <div className="w-22 h-2 bg-[#CAC8C9]"></div>
                <div className="w-22 h-2 bg-[#CAC8C9]"></div>
            </div>
            {/* Contenido */}
            <div className="absolute flex flex-col text-right top-12 right-12">
                <h2 className="text-Negro text-2xl tracking-wide lowercase font-light">{title}</h2>
                <h2 className={`text-[#DD002B] uppercase leading-5 ${contentSize}`}>{content}</h2>
            </div>
        </div>
    )
}