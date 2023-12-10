import { Image } from "../models/ImageMode";
import Swal from 'sweetalert2';

export const GalleryApi = (count = 10, randomValue = 0, page = 1, parameters = "") => {

    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY

    const apiUrl = `https://api.unsplash.com/photos/random?count=${count}&client_id=${apiKey}&random=${randomValue}&page=${page}${parameters !== "" ? `&query=${parameters}` : ""}`;

    return fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa');
            }
            return response.json();
        })
        .then((data) => {
            const images = data.map((item: Image) => ({
                id: item.id || '',
                description: item.description || '',
                urls: {
                    full: item.urls.full || '',
                    regular: item.urls.regular || '',
                    small: item.urls.small || '',
                },
            }));
            return images;
        })
        .catch((error) => {
            if (error.message.includes("La solicitud no fue exitosa")) {
                if (parameters) {
                    Swal.fire({
                        title: "¡No se encontraron resultados!",
                        text: `No se encuentran imagenes relacionadas con las palabras: ${parameters}`,
                        icon: "error",
                    });
                    throw error;
                }

                else {
                    Swal.fire({
                        title: "¡Error en el servidor", //Se supero la prueba grauita
                        text: `Vuelva a intentarlo mas tarde por favor.`,
                        icon: "error",
                    });
                    throw error;
                }

            } else {
                console.error('Error al obtener fotos: ', error);
                throw error;
            }
        });
};

