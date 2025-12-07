import Valdivia from '../../assets/images/valdivia.webp';
import SanJose from '../../assets/images/san-jose.webp';

export default function Despachos() {
    return(
        <>
        <section id='despachos' className="bg-Negro2 py-16 px-4 relative">
            {/* Overlay de textura de papel */}
            <div className="paper-texture-overlay"></div>
            {/* Contenido */}
            <article className="max-w-7xl flex flex-col mx-auto px-4">
                {/* Título y descripción */}
                <div className="text-center mb-22">
                    <h1 className="text-Amarillo font-IM-Fell-English text-[40px]">Despachos</h1>
                    <p className="text-Crema leading-5">A continuación puedes revisar nuestros despachos para Valdivia y comunas. <br />Si necesitas más información, comunícate con nosotros.</p>
                </div>
                {/* Imágenes de despachos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 justify-items-center">
                    {/* Valdivia */}
                    <div className='flex flex-col items-center gap-4 max-w-92'>
                        <div className='w-full max-w-72 aspect-square'>
                            <img 
                                src={Valdivia} 
                                alt="Foto de Valdivia" 
                                className='rounded-full w-full h-full object-cover outline-dashed outline-[#D6BDF1] outline-6 -outline-offset-3'
                            />
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#E1E1E1" className="size-22">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                        <span className='text-Crema font-IM-Fell-English text-[32px] tracking-wide leading-0'>Valdivia</span>
                        <span className='text-Crema text-2xl text-center mt-5'>Despacho <strong>GRATIS</strong> por compras sobre <strong className='text-[#A788C8]'>$10.000</strong></span>
                    </div>
                    {/* Comunas */}
                    <div className='flex flex-col items-center gap-4 max-w-92'>
                        <div className='w-full max-w-72 aspect-square'>
                            <img 
                                src={SanJose} 
                                alt="Foto de San Jose" 
                                className='rounded-full w-full h-full object-cover outline-dashed outline-[#B64F3C] outline-6 -outline-offset-3'
                            />
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#E1E1E1" className="size-22">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                        <span className='text-Crema font-IM-Fell-English text-[32px] tracking-wide leading-0'>Comunas de Los Ríos</span>
                        <span className='text-Crema text-2xl text-center mt-5'>Despacho <strong>GRATIS</strong> por compras sobre <strong className='text-[#B64F3C]'>$50.000</strong></span>
                    </div>
                </div>
            </article>
        </section>
        </>
    )
}