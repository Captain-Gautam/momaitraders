// Logo component for Momay Traders
import React from 'react'
import logoSvg from '../assets/logo.svg'

const Logo = ({ className = "w-8 h-8", showText = false }) => {
  return (
    <div className="flex items-center space-x-2">
      {/* Actual logo from SVG file */}
      <img 
        src={logoSvg}
        alt="Momay Traders Logo"
        className={className}
      />
      {showText && (
        <span className="font-bold text-current">Momay Traders</span>
      )}
    </div>
  )
}

export default Logo
