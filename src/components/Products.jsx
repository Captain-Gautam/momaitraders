import React from 'react'
import { FaWhatsapp, FaBox, FaTape, FaIndustry } from 'react-icons/fa'

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'All Kinds Of Industrial Tapes',
      icon: <FaTape className="w-8 h-8" />,
      description: 'High-quality industrial tapes for various applications including packaging, sealing, and bundling.',
      whatsappText: 'Enquiry for product: All Kinds Of Industrial Tapes'
    },
    {
      id: 2,
      name: 'H.D.P.E Bags & Tarpauline',
      icon: <FaBox className="w-8 h-8" />,
      description: 'Durable HDPE bags and tarpauline sheets for heavy-duty packaging and protection needs.',
      whatsappText: 'Enquiry for product: H.D.P.E Bags & Tarpauline'
    },
    {
      id: 3,
      name: 'L.D.P.E. Liners',
      icon: <FaIndustry className="w-8 h-8" />,
      description: 'Low-density polyethylene liners perfect for container lining and moisture protection.',
      whatsappText: 'Enquiry for product: L.D.P.E.Liners'
    },
    {
      id: 4,
      name: 'Laminated Pouches & Rolls',
      icon: <FaBox className="w-8 h-8" />,
      description: 'Premium laminated pouches and rolls for food packaging and other sensitive products.',
      whatsappText: 'Enquiry for product: Laminated Pouches & Rolls'
    },
    {
      id: 5,
      name: 'Paper Bags',
      icon: <FaBox className="w-8 h-8" />,
      description: 'Eco-friendly paper bags for retail and commercial use, available in various sizes.',
      whatsappText: 'Enquiry for product: Paper Bag'
    },
    {
      id: 6,
      name: 'P.P. Box Strapping',
      icon: <FaTape className="w-8 h-8" />,
      description: 'Strong and reliable polypropylene strapping for secure packaging and bundling.',
      whatsappText: 'Enquiry for product: P.P.Box- Strapping'
    },
    {
      id: 7,
      name: 'Packaging Materials (Plain & Printed)',
      icon: <FaIndustry className="w-8 h-8" />,
      description: 'Comprehensive range of plain and custom printed packaging materials for branding.',
      whatsappText: 'Enquiry for product: Packaging materials ( Plain & Printed )'
    },
    {
      id: 8,
      name: 'Pet Box Strapping & Pneumatic Machine',
      icon: <FaTape className="w-8 h-8" />,
      description: 'PET strapping solutions with pneumatic machines for automated packaging operations.',
      whatsappText: 'Enquiry for product: Pet Box- Strapping & Pneumatic Machine'
    },
    {
      id: 9,
      name: 'LD Shrink Film & Stretch Film',
      icon: <FaIndustry className="w-8 h-8" />,
      description: 'High-quality shrink and stretch films for product wrapping and pallet protection.',
      whatsappText: 'Enquiry for product: LDShrink Film & Stretch Film'
    },
    {
      id: 10,
      name: 'Cord Strap & Buckle',
      icon: <FaTape className="w-8 h-8" />,
      description: 'Heavy-duty cord strapping with buckles for securing large and heavy shipments.',
      whatsappText: 'Enquiry for product: Cord Strap & Buckle'
    }
  ]

  const handleWhatsAppEnquiry = (productText) => {
    const phoneNumber = '919974902733'
    const message = encodeURIComponent(productText)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="products" className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Products & Services</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            Comprehensive packaging solutions for all your industrial and commercial needs. 
            Click on any product to send us a WhatsApp enquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-3 sm:p-4 lg:p-6">
                <div className="flex items-start mb-3 sm:mb-4">
                  <div className="text-blue-600 mr-2 sm:mr-3 lg:mr-4 flex-shrink-0">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                      {React.cloneElement(product.icon, {
                        className: "w-full h-full"
                      })}
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 flex-1 leading-tight">{product.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {product.description}
                </p>
                
                <button
                  onClick={() => handleWhatsAppEnquiry(product.whatsappText)}
                  className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors duration-200 font-medium text-xs sm:text-sm lg:text-base"
                >
                  <FaWhatsapp className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  <span>ENQUIRY NOW</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <div className="bg-blue-600 rounded-lg p-4 sm:p-6 lg:p-8 text-white mx-2 sm:mx-0">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Need a Custom Solution?</h3>
            <p className="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-xs sm:text-sm lg:text-base px-2 sm:px-0">
              Can't find exactly what you're looking for? We offer custom packaging solutions 
              tailored to your specific requirements. Contact us to discuss your needs.
            </p>
            <button
              onClick={() => handleWhatsAppEnquiry('Hi, I need a custom packaging solution. Please help me.')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors duration-200 text-xs sm:text-sm lg:text-base"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
