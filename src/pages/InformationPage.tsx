import image_1 from '../assets/images/image_3.jpg'



export const InformationPage = () => {

  return (
    <div className="w-full h-auto bg-[#221A0E] flex flex-col items-center">
      <div
        className="w-full min-h-[calc(100vh-55px)] bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center px-2"
        style={{
          backgroundImage: `url("${image_1}")`,
        }}
      >
        <h1 className='text-white sm:text-3-xl md:text-4xl lg:text-4xl xl:text-5xl font-serif text-center'>
          "En el lienzo del universo, cada pincelada de la vida crea un cuadro único de experiencias y emociones, tejido con los hilos sutiles del tiempo y la imaginación."
        </h1>
        <small className='text-white text-right w-full mr-20 text-2xl mt-5'>Leonardo da vinci</small>
        <div className='w-full h-auto flex flex-col items-center justify-center mt-5'>

        </div>
      </div>
    </div>
  )
}
