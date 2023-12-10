import { Routes, Route } from 'react-router-dom'
import { GalleryRouters } from './GalleryRouters'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/*" element={<GalleryRouters />}/>
        </Routes>
    </>
  )
}
