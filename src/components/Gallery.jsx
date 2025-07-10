import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Placeholder images - in real implementation, these would be actual product images
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400',
      alt: 'Industrial Packaging Tapes',
      title: 'Industrial Packaging Tapes'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
      alt: 'HDPE Bags and Packaging',
      title: 'HDPE Bags and Packaging'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400',
      alt: 'Stretch Films and Wrapping',
      title: 'Stretch Films and Wrapping'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
      alt: 'Laminated Pouches',
      title: 'Laminated Pouches'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1516762689617-e1cfddf819d3?w=400',
      alt: 'Paper Bags',
      title: 'Paper Bags'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
      alt: 'Strapping Materials',
      title: 'Strapping Materials'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400',
      alt: 'Custom Packaging Solutions',
      title: 'Custom Packaging Solutions'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400',
      alt: 'Industrial Supplies',
      title: 'Industrial Supplies'
    }
  ]

  const openModal = (image, index) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length
    setSelectedImage(galleryImages[nextIndex])
    setCurrentImageIndex(nextIndex)
  }

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1
    setSelectedImage(galleryImages[prevIndex])
    setCurrentImageIndex(prevIndex)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Product Gallery</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Explore our wide range of packaging products and solutions. Click on any image to view in full size.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => openModal(image, index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-3 sm:p-4">
                  <h3 className="font-semibold text-base sm:text-lg">{image.title}</h3>
                  <p className="text-xs sm:text-sm mt-1">Click to view</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder Notice */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 mx-4 sm:mx-0">
            <p className="text-sm sm:text-base text-yellow-800">
              <strong>Note:</strong> These are placeholder images for demonstration. 
              In the actual website, these would be replaced with real product photos from Momay Traders.
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 z-10 p-2"
            >
              <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2"
            >
              <FaChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2"
            >
              <FaChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain mx-auto"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Title */}
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white text-center">
              <h3 className="text-lg sm:text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                {currentImageIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
