import { FormEvent } from "react"

interface SearcherComponentProps {
  handleSearchImagenes: (event: FormEvent<HTMLFormElement>) => Promise<void>,
  parameters: string,
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const SearcherComponent: React.FC<SearcherComponentProps> = ({ handleSearchImagenes, parameters, onInputChange }) => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center mt-5'>
      <form onSubmit={handleSearchImagenes} className="w-full justify-center flex items-center">

        <input
          value={parameters}
          name="parameters"
          onChange={onInputChange}
          className='w-full h-[50px] max-w-md p-3 border rounded-tl-md rounded-bl-md focus:outline-none focus:ring focus:ring-[#556B2F] focus:border-#556B2F'
          placeholder='Buscar imagen'
        />

        <button type='submit' className='bg-white p-3 h-[50px] rounded-tr-md rounded-br-md focus:outline-none focus:ring focus:ring-[#556B2F] focus:border-#556B2F hover:text-[#556B2F]'>
          <i className="fa-solid fa-magnifying-glass h-full"></i>
        </button>

      </form>
    </div>
  )
}
