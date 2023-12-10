import { Routes, Route, Navigate } from 'react-router-dom'
import { GalleryPage } from '../pages/GalleryPage'
import { FooterComponent, HeaderComponent } from '../components'
import { InformationPage } from '../pages'


export const GalleryRouters = () => {

  return (
    <>
      <HeaderComponent />
      <Routes>

        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/informacion" element={<InformationPage />} />
        <Route path="/*" element={<Navigate to="/galeria" />} />

      </Routes>
      <FooterComponent />
    </>
  )
}
