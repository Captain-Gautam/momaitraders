import React from 'react'
import { FaWhatsapp, FaBox, FaTape, FaIndustry, FaPrint, FaHome, FaTrash, FaClipboardList, FaEnvelope } from 'react-icons/fa'

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Office Stationery Material',
      icon: <FaClipboardList className="w-8 h-8" />,
      description: 'Complete range of office stationery items for all your business and administrative needs.',
      whatsappText: 'Enquiry for product: Office Stationery Material'
    },
    {
      id: 2,
      name: 'All Type Of Washroom Solutions',
      icon: <FaHome className="w-8 h-8" />,
      description: 'Comprehensive washroom solutions and cleaning supplies for maintaining hygiene standards.',
      whatsappText: 'Enquiry for product: All Type Of Washroom Solutions'
    },
    {
      id: 3,
      name: 'All Type Of Printing Services',
      icon: <FaPrint className="w-8 h-8" />,
      description: 'Professional printing services for business needs including documents, banners, and promotional materials.',
      whatsappText: 'Enquiry for product: All Type Of Printing Services'
    },
    {
      id: 4,
      name: 'Industrial Packing Material',
      icon: <FaBox className="w-8 h-8" />,
      description: 'Specialized industrial packing materials for heavy-duty and commercial packaging requirements.',
      whatsappText: 'Enquiry for product: Industrial Packing Material'
    },
    {
      id: 5,
      name: 'Housekeeping Material',
      icon: <FaHome className="w-8 h-8" />,
      description: 'Complete range of housekeeping and cleaning materials for maintaining clean environments.',
      whatsappText: 'Enquiry for product: Housekeeping Material'
    },
    {
      id: 6,
      name: 'Disposable Material',
      icon: <FaBox className="w-8 h-8" />,
      description: 'High-quality disposable products for various commercial and industrial applications.',
      whatsappText: 'Enquiry for product: Disposable Material'
    },
    {
      id: 7,
      name: 'All Types Of Dustbins',
      icon: <FaTrash className="w-8 h-8" />,
      description: 'Wide variety of dustbins and waste management solutions for different environments and needs.',
      whatsappText: 'Enquiry for product: All Types Of Dustbins'
    }
  ]

  const handleWhatsAppEnquiry = (productText) => {
    const phoneNumber = '919974902733'
    const message = encodeURIComponent(productText)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmailEnquiry = (productText) => {
    const email = 'momaitraders73@gmail.com'
    const subject = encodeURIComponent(`Product Enquiry - ${productText.replace('Enquiry for product: ', '')}`)
    const body = encodeURIComponent(`Dear Momai Traders,\n\nI am interested in learning more about ${productText.replace('Enquiry for product: ', '')}.\n\nPlease provide me with more details including:\n- Product specifications\n- Pricing information\n- Availability\n- Minimum order quantity\n\nThank you for your time.\n\nBest regards`)
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`
    window.open(mailtoUrl, '_blank')
  }

  return (
    <section id="products" className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Products & Services</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            Comprehensive solutions for all your cleaning and stationery needs. 
            Click on any product to send us a WhatsApp message or email enquiry.
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
                
                <div className="space-y-2">
                  <button
                    onClick={() => handleWhatsAppEnquiry(product.whatsappText)}
                    className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors duration-200 font-medium text-xs sm:text-sm lg:text-base"
                  >
                    <FaWhatsapp className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                    <span>WHATSAPP ENQUIRY</span>
                  </button>
                  
                  <button
                    onClick={() => handleEmailEnquiry(product.whatsappText)}
                    className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors duration-200 font-medium text-xs sm:text-sm lg:text-base"
                  >
                    <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                    <span>EMAIL ENQUIRY</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <div className="bg-blue-600 rounded-lg p-4 sm:p-6 lg:p-8 text-white mx-2 sm:mx-0">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Need a Custom Solution?</h3>
            <p className="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-xs sm:text-sm lg:text-base px-2 sm:px-0">
              Can't find exactly what you're looking for? We offer custom solutions 
              tailored to your specific requirements. Contact us to discuss your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                onClick={() => handleWhatsAppEnquiry('Hi, I need a custom solution for my business. Please help me.')}
                className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors duration-200 text-xs sm:text-sm lg:text-base"
              >
                <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>WhatsApp Quote</span>
              </button>
              
              <button
                onClick={() => handleEmailEnquiry('Enquiry for product: Custom Solution')}
                className="flex items-center justify-center space-x-2 bg-white text-blue-600 hover:bg-gray-100 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors duration-200 text-xs sm:text-sm lg:text-base"
              >
                <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Email Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
