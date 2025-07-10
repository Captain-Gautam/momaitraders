# Assets Folder

## Logo Instructions

The current logo is implemented as an SVG component in `/src/components/Logo.jsx`. 

### To replace with your actual logo:

1. **If you have an image file (PNG, JPG, SVG):**
   - Place your logo file in this `/src/assets/` folder
   - Name it something like `momay-traders-logo.png` or `momay-traders-logo.svg`
   - Update the Logo component to use the image instead of the SVG

2. **Example of how to update Logo.jsx to use an image:**

```jsx
import React from 'react'
import logoImage from '../assets/momay-traders-logo.png'

const Logo = ({ className = "w-8 h-8", showText = false }) => {
  return (
    <div className="flex items-center space-x-2">
      <img 
        src={logoImage} 
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
```

### Current Implementation:
- The logo is currently a custom SVG design with packaging/box theme
- It includes "MT" initials
- Colors adapt to the parent component's text color
- Used in Header (small) and Hero (large) sections

### Logo Specifications:
- **Header**: 32x32px (w-8 h-8)
- **Hero**: 80x80px (w-20 h-20)
- Should work on both light and dark backgrounds
- Recommended format: SVG (scalable) or high-resolution PNG
