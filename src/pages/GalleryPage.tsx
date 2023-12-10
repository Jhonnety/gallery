import { FormEvent } from 'react';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import image_1 from '../assets/images/image_2.jpg'
import { GalleryApi } from '../unsplash/GalleryApi';
import { Image } from '../models/ImageMode';
import { useForm } from '../hooks/useForm';
import { GalleryComponent, SearcherComponent } from '../components';

const scrollToGallery = () => {
  const galleryElement = document.getElementById('gallery');
  if (galleryElement) {
    galleryElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const num_images = 12

export const GalleryPage = () => {

  const [gallery, setGallery] = useState<Image[]>([])
  const [page, setPage] = useState(1);
  const [initialLoad, setInitialLoad] = useState(true);
  const { parameters, onInputChange, onResetForm } = useForm({ parameters: "" })

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const randomValue = Math.random();
        const images: Image[] = await GalleryApi(initialLoad ? num_images : num_images, randomValue, page, parameters);
        setGallery((prevGallery) => (initialLoad ? [...images] : [...prevGallery, ...images]));
        setInitialLoad(false);
      } catch (error) {
        onResetForm()
        console.error('Error en la carga de imágenes:', error);
      }
    };

    fetchGallery();
  }, [page]);

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSearchImagenes = async (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    if (parameters != "" && parameters.length > 1) {
      try {
        const randomValue = Math.random();
        const resultados = await GalleryApi(num_images, randomValue, page, parameters);
        setGallery(resultados);
        scrollToGallery()
      } catch (error) {
        onResetForm()
        console.error('Error al buscar imágenes:', error);
      }
    } else {
      Swal.fire({
        title: "¡Error en buscar imagen!",
        text: "Por favor ingrese una palabra para buscar una imagen.",
        icon: "error",
      });

    }
  };

  return (
    <div className="w-full h-auto bg-[#221A0E] flex flex-col items-center">
      <div
        className="w-full min-h-[calc(100vh-95px)] md:min-h-[calc(100vh-55px)] bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center px-5"
        style={{
          backgroundImage: `url("${image_1}")`,
        }}
      >
        <h1 className='text-white text-4xl md:text-6xl text-center font-serif'>
          ¡Encuentra cientos de imágenes increíbles gratis con Unsplash!
        </h1>

        <SearcherComponent
          handleSearchImagenes={handleSearchImagenes}
          parameters={parameters}
          onInputChange={onInputChange}
        />

        <i onClick={scrollToGallery} className="hover:text-[#556B2F] fa-solid fa-arrow-down text-white xl:text-6xl absolute bottom-0 mb-10 cursor-pointer transform hover:scale-125 transition-transform duration-300"></i>
      </div>

      {gallery.length > 0 &&
        <>
          <GalleryComponent
            gallery={gallery}
            parameters={parameters}
          />
          <button className="font-serif  text-1xl mt-10 mb-20 bg-[#556B2F] hover:bg-[#405124] text-white font-bold py-2 px-4 rounded" onClick={loadMoreImages}>Cargar más imagenes</button>
        </>
      }


    </div>
  )
}
