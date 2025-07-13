// Logo component for Momai Traders
import React from 'react'
import logoPng from '../assets/logo.png'

const Logo = ({ className = "w-12 h-12", showText = false }) => {
  return (
    <div className="flex items-center space-x-2">
      {/* Momai Traders logo from PNG file */}
      <img 
        src={logoPng}
        alt="Momai Traders Logo"
        className={className}
      />
      {showText && (
        <span className="font-bold text-current">Momai Traders</span>
      )}
    </div>
  )
}

export default Logo
