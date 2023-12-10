import { NavLink } from 'react-router-dom';

export const HeaderComponent = () => {
    return (
        <nav className="bg-[#556B2F] p-4">
            <div className="flex items-center justify-between px-8">
                <div className="text-white flex ">
                    <i className="fa-solid fa-images text-2xl"></i>
                    <h1 className='font-serif tracking-wide ml-2 text-2xl'>Galeria artistica</h1>
                </div>
                <div className="hidden md:flex space-x-4">
                    <NavLink
                        className={({ isActive }: any) => `font-serif tracking-wid text-white hover:text-[#221A0E] ${isActive ? 'border-b-2 border-[#221A0E]' : ''}`}
                        to="/galeria">Galería</NavLink>

                    <NavLink
                        className={({ isActive }: any) => `font-serif tracking-wid text-white hover:text-[#221A0E] ${isActive ? 'border-b-2 border-[#221A0E]' : ''}`}
                        to="/informacion">Información</NavLink>
                </div>
            </div>
            <div className="md:hidden flex mt-2 w-full text-center ">
                <NavLink
                    className={({ isActive }: any) => `flex-1 font-serif tracking-wid text-white hover:text-[#221A0E]${isActive ? 'border-t-2 border-[#221A0E]' : ''}`}
                    to="/galeria">Galería</NavLink>

                <NavLink
                    className={({ isActive }: any) => `flex-1 font-serif tracking-wid text-white hover:text-[#221A0E]${isActive ? 'border-t-2 border-[#221A0E]' : ''}`}
                    to="/informacion">Información</NavLink>
            </div>


        </nav>
    );

}
