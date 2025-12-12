import Stack from '../Stack.jsx';
import CiudadIcon from '../icons/CiudadIcon.jsx';
import PinpointIcon from '../icons/PinpointIcon.jsx';
import ClockIcon from '../icons/ClockIcon.jsx'
import InfoCard from '../shared/InfoCard.jsx';
import local1 from '../../assets/images/local-1.webp';
import local2 from '../../assets/images/local-2.webp';
import local3 from '../../assets/images/local-3.webp';
import local4 from '../../assets/images/local-4.webp';

export default function UbicacionHorarios() {
    const localImages = [
        { id: 1, img: local4 },
        { id: 2, img: local3 },
        { id: 3, img: local2 },
        { id: 4, img: local1 }
    ];

    return (
        <>
        <section id='ubicacion-horarios' className="bg-Crema py-16 px-4 relative">
            {/* Overlay de textura de papel */}
            <div className="paper-texture-overlay"></div>
            {/* Contenido */}
            <article className="max-w-7xl flex flex-col mx-auto px-4">
                    {/* Título y descripción */}
                    <div className="text-center mb-12">
                        <h1 className="text-Negro font-IM-Fell-English text-[40px]">Ubicación y horarios</h1>
                    </div>
                    {/* Mapa Google Maps + "Nuestro Local" */}
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-8 gap-y-12">
                        {/* Mapa */ }
                        <div className="lg:col-span-4">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5332.884974137306!2d-73.22530096767282!3d-39.815515096110225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9615ee86bb1b486b%3A0x1fabc2e91cacef3c!2sAv.%20Pedro%20Aguirre%20Cerda%20232%2C%205090006%20Valdivia%2C%20Los%20R%C3%ADos!5e1!3m2!1ses-419!2scl!4v1764363689972!5m2!1ses-419!2scl" width="100%" height="500" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        {/* Nuestro local */}
                        <div className='lg:col-span-2 flex flex-col justify-center items-center'>
                            <div className='relative'>
                                <div className='absolute inset-0 bg-Rojo -rotate-[1.6deg]'></div>
                                <span className='relative px-3 py-2 text-Crema text-xl uppercase font-bold block'>
                                    Nuestro Local
                                </span>
                            </div>
                            <Stack
                                randomRotation={false}
                                sensitivity={100}
                                sendToBackOnClick={true}
                                cardDimensions={{ width: "95%", height: "370px" }}
                                cardsData={localImages}
                            />
                        </div>
                    </div>
                    {/* Cards informativas */}
                    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 justify-items-center">
                        <InfoCard
                            icon={CiudadIcon}
                            title="Ciudad"
                            content="Valdivia"
                        />
                        <InfoCard
                            icon={PinpointIcon}
                            title="Dirección"
                            content={<span>Av. Pedro <br /> Aguirre <br /> Cerda 232</span>}
                            contentSize='text-lg'
                        />
                        <InfoCard
                            icon={ClockIcon}
                            title="Horarios"
                            content={<span>Lunes a Sábado: <br /> 10:00 - 13:30 <br /> 15:00 - 19:30</span>}
                            contentSize='text-lg'
                        />
                    </div>
            </article>
        </section>
        </>
    )
}