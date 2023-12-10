import React from 'react'
import ReactDOM from 'react-dom/client'
import { GalleryApp } from './GalleryApp.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GalleryApp />
    </BrowserRouter>
  </React.StrictMode>,
)
