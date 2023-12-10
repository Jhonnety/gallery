import { Image } from '../models/ImageMode';
import LazyLoad from 'react-lazy-load';

const OpenImageFullHD = (url: string) => {
    window.open(url, '_blank');
};

interface GalleryComponentProps {
    gallery: Image[],
    parameters: string
}

export const GalleryComponent: React.FC<GalleryComponentProps> = ({ gallery, parameters }) => {
    return (
        <div id='gallery' className="w-full flex flex-wrap justify-center">
            <h1 className='text-white text-5xl pt-10 pb-20 w-full pl-10'>
                Imagenes{`${(parameters != "") && (parameters.length > 1) ? (' de ' + parameters) : ''}`}:
            </h1>
            {gallery.map((image: Image) => (

                <div key={image.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">

                    <div className="relative h-auto w-600">
                        <LazyLoad key={image.id}>
                            <img
                                className="w-full cursor-pointer"
                                src={image.urls.small}
                                alt={image.description}
                            />
                        </LazyLoad>
                        <div onClick={() => OpenImageFullHD(image.urls.full)} className="absolute inset-0 flex items-center cursor-pointer justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <p className="font-serif font-bold  text-white text-center">Click para ver y descargar la imagen en alta resuloción</p>
                        </div>
                    </div>

                </div>

            ))}

        </div>
    )
}
