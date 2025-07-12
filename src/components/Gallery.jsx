import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Product images matching our services
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400',
      alt: 'Office Stationery Material',
      title: 'Office Stationery Material'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400',
      alt: 'Washroom Solutions',
      title: 'All Type Of Washroom Solutions'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400',
      alt: 'Printing Services',
      title: 'All Type Of Printing Services'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400',
      alt: 'Industrial Packing Material',
      title: 'Industrial Packing Material'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
      alt: 'Housekeeping Material',
      title: 'Housekeeping Material'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      alt: 'Disposable Material',
      title: 'Disposable Material'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
      alt: 'All Types Of Dustbins',
      title: 'All Types Of Dustbins'
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
              <strong>Note:</strong> These are sample images representing our product categories. 
              In the actual website, these would be replaced with real product photos from Momai Traders.
            </p>
          </div>
          
          {/* PDF Download Link */}
          <div className="mt-4 sm:mt-6">
            <a
              href="/product-catalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
              </svg>
              <span>To View More Products</span>
            </a>
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
