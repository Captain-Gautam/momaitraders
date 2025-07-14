import React from 'react'
import { FaArrowLeft, FaBuilding } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const ClientsPage = () => {
  const navigate = useNavigate()

  // Actual client list
  const clientLogos = [
    {
      id: 1,
      name: 'DHL Express',
      logo: '/images/clients/dhl-express.png',
      category: 'Logistics'
    },
    {
      id: 2,
      name: 'Arvind Fashioning Possibilities',
      logo: '/images/clients/arvind-fashioning-possibilities.png',
      category: 'Textile'
    },
    {
      id: 3,
      name: 'Narayani Heights',
      logo: '/images/clients/narayani-heights.png',
      category: 'Hotel & Resort'
    },
    {
      id: 4,
      name: 'Kaka Ni Bhajipav',
      logo: '/images/clients/kaka-ni-bhajipav.png',
      category: 'Restaurant'
    },
    {
      id: 5,
      name: 'Merengo CIMS Hospital',
      logo: '/images/clients/merengo-cims-hospital.png',
      category: 'Healthcare'
    },
    {
      id: 6,
      name: 'Empire Hospital',
      logo: '/images/clients/empire-hospital.png',
      category: 'Healthcare'
    },
    {
      id: 7,
      name: 'Apaxon',
      logo: '/images/clients/apaxon.png',
      category: 'Technology'
    },
    {
      id: 8,
      name: 'Alpha Superspeciality Hospital',
      logo: '/images/clients/alpha-superspeciality-hospital.png',
      category: 'Healthcare'
    },
    {
      id: 9,
      name: 'The Gharana',
      logo: '/images/clients/the-gharana.png',
      category: 'Restaurant'
    },
    {
      id: 10,
      name: 'Parth Hospital',
      logo: '/images/clients/parth-hospital.png',
      category: 'Healthcare'
    },
    {
      id: 11,
      name: 'City Center II Building',
      logo: '/images/clients/city-center-2-building.png',
      category: 'Commercial'
    }
  ]

  const handleGoBack = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Momai Traders Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleGoBack}
              />
              <div 
                className="text-xl sm:text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-700 transition-colors"
                onClick={handleGoBack}
              >
                Momai Traders
              </div>
            </div>
            
            {/* Back Button */}
            <button
              onClick={handleGoBack}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <FaArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Valued Clients
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are proud to serve some of the most respected organizations across Gujarat. 
            Our commitment to quality and reliability has earned us the trust of leading companies 
            in various industries.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
          {clientLogos.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center justify-center group"
            >
              {/* Client Logo */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                        <svg class="w-8 h-8 sm:w-10 sm:h-10 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                        </svg>
                      </div>
                    `;
                  }}
                />
              </div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-900 text-center leading-tight">
                {client.name}
              </h3>
              <span className="text-xs text-blue-600 mt-1">{client.category}</span>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Join Our Growing Family of Satisfied Clients
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Ready to experience the same quality service and reliability? 
              Contact us today to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=919974902733&text=Hi, I'm interested in your services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                WhatsApp Us
              </a>
              <a
                href="tel:+919974902733"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientsPage
