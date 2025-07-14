# Momai Traders - Digital Business Website

A modern, responsive React website for Momai Traders, a wholesale supplier of cleaning materials and stationery solutions based in Ahmedabad, Gujarat. This professional digital business website showcases the company's products and services with integrated WhatsApp functionality for easy customer inquiries.

## Features

- **Responsive Design**: Mobile-first approach that works perfectly on all devices
- **WhatsApp Integration**: Direct product inquiries through WhatsApp
- **Email Integration**: Professional email inquiry system
- **Contact Information**: Complete contact details with phone, email, and address
- **Product Showcase**: Interactive product catalog with detailed descriptions
- **Image Gallery**: Professional product image gallery with modal view
- **Smooth Navigation**: Smooth scrolling between sections
- **Contact Form**: Customer feedback and inquiry form
- **Modern UI**: Built with Tailwind CSS for a clean, professional look
- **SEO Optimized**: Proper meta tags for search engines and social media sharing

## Tech Stack

- **React**: Frontend framework
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Icon library
- **JavaScript (ES6+)**: Modern JavaScript features

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation with mobile menu
│   ├── Hero.jsx        # Company introduction and contact actions
│   ├── About.jsx       # Company information and services
│   ├── Products.jsx    # Product catalog with WhatsApp integration
│   ├── Gallery.jsx     # Product image gallery
│   ├── Contact.jsx     # Contact info, feedback form, and location
│   └── Footer.jsx      # Company details and quick links
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd momai-traders
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `dist` folder.

## Business Information

- **Company**: Momai Traders
- **Industry**: Cleaning Materials & Stationery Solutions
- **Location**: Ghatlodiya, Ahmedabad, Gujarat, India
- **Website**: https://momaitraders.vercel.app/
- **Nature of Business**: Wholesale Supplier

## Products & Services

- **Office Stationery Material**: Complete range of office supplies and stationery items
- **Housekeeping Material**: Comprehensive cleaning materials and supplies
- **Washroom Solutions**: All types of washroom and hygiene solutions
- **Printing Services**: Professional printing services for business needs
- **Computer Consumables**: Complete range of computer accessories and consumables
- **Industrial Packing Material**: Specialized industrial packaging materials
- **Disposable Material**: High-quality disposable products for various applications
- **Dustbins**: Wide variety of dustbins and waste management solutions

## Contact Information

- **Primary Phone**: +91 99749 02733
- **Secondary Phone**: +91 87884 77773
- **Email**: momaitraders73@gmail.com
- **Website**: https://momaitraders.vercel.app/
- **Address**: Shop-10, Simandhar Complex, Near Prabhat Chowk, Ghatlodiya, Ahmedabad, 380061, Gujarat, India

## Key Features Implementation

### WhatsApp Integration
Direct product inquiry links that open WhatsApp with pre-filled messages for specific products, enabling immediate customer communication.

### Email Integration
Professional email inquiry system that pre-fills email templates with product-specific information for formal business communication.

### Responsive Design
Fully responsive design that adapts to all screen sizes, ensuring optimal user experience on mobile, tablet, and desktop devices.

### SEO & Social Media Optimization
Comprehensive meta tags for search engines and social media platforms (Facebook, Twitter, WhatsApp) with proper Open Graph implementation.

### Professional Contact System
Multiple contact methods including phone, WhatsApp, email, and physical address with Google Maps integration.

## Customization

### Colors
The website uses a blue and green color scheme defined in Tailwind CSS. Main colors:
- Primary Blue: `#2563eb`
- Green (WhatsApp): `#16a34a`
- Gray tones for text and backgrounds

### Images
Replace placeholder images in the Gallery component with actual product photos. Images should be optimized for web (WebP format recommended).

### Content
Update company information, products, and contact details in the respective components as needed.

## Deployment

The website is deployed on Vercel and can be accessed at: **https://momaitraders.vercel.app/**

For deployment to other platforms:
- **Vercel**: `npm run build && vercel --prod`
- **Netlify**: `npm run build` and upload the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment

## License

This project is proprietary software for Momai Traders.

## Support

For business inquiries, please contact:
- **Website**: https://momaitraders.vercel.app/
- **Email**: momaitraders73@gmail.com
- **Phone**: +91 99749 02733
