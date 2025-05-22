import React from 'react'
import './Gallery.css'

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-header">
        <h1> <img src="https://png.pngtree.com/png-clipart/20190630/original/pngtree--png-image_4124521.jpg" alt="" />Gallery</h1>
      </div>

     
      <div className="gallery-row">
        <img src="https://restfood.onlywebcoding.com.ua/images/gallery-1.jpg" alt="Gallery 1" />
        <img src="https://restfood.onlywebcoding.com.ua/images/gallery-2.jpg" alt="Gallery 2" />
        <img src="https://restfood.onlywebcoding.com.ua/images/gallery-3.jpg" alt="Gallery 3" />
      </div>

   
      <div className="gallery-row">
        <img src="https://restfood.onlywebcoding.com.ua/images/gallery-5.jpg" alt="Gallery 5" />
        <img src="https://restfood.onlywebcoding.com.ua/images/gallery-4.jpg" alt="Gallery 4" />
        <img src="https://restfood.onlywebcoding.com.ua/images/gallery-6.jpg" alt="Gallery 6" />
      </div>
    </div>
  )
}

export default Gallery
