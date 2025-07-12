# Momai Traders - Static Digital Business Card Website

A modern, responsive React website for Momai Traders, a plastic packaging materials company based in Ahmedabad, Gujarat. This **static digital business card** showcases the company's products and services with integrated WhatsApp functionality for easy customer inquiries.

## Features

- **Static Website**: No backend required - can be hosted anywhere
- **Responsive Design**: Mobile-first approach that works perfectly on all devices
- **WhatsApp Integration**: Direct product inquiries through WhatsApp
- **Contact Card Download**: Downloadable vCard for easy contact saving
- **Product Gallery**: Interactive image gallery with modal view
- **Smooth Navigation**: Smooth scrolling between sections
- **Simple Feedback Form**: Basic customer rating interface (display only)
- **Modern UI**: Built with Tailwind CSS for a clean, professional look

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
- **Industry**: Plastic Packaging Materials
- **Location**: Ahmedabad, Gujarat, India
- **Proprietor**: Devendra Acharya
- **Established**: 22/02/2021
- **GST No**: 24BRYPP7182G1Z1

## Products & Services

- B.O.P.P. Tapes
- P.P. Box Strapping
- Pet Box Strapping
- Stretch Wrap Films and Shrink Films
- Packaging materials (Plain & Printed)
- Laminated Pouches & Rolls
- H.D.P.E. Bags, L.D.P.E. Liners
- P.P. Bags Plain & Printed
- Industrial Tapes
- Paper Bags
- Cord Strap & Buckle

## Contact Information

- **Phone**: +91 99749 02733, +91 87884 77773
- **Email**: momaitraders@gmail.com
- **Address**: Shop-10, Simandhar Complex, Near Prabhat Chowk, Ghatlodiya, Ahmedabad, 380061

## Key Features Implementation

### WhatsApp Integration
Direct product inquiry links that open WhatsApp with pre-filled messages for specific products.

### Contact Card Download
Generates and downloads a vCard (.vcf) file with complete contact information.

### Responsive Gallery
Image gallery with lightbox functionality and keyboard navigation support.

### Smooth Scrolling Navigation
Navigation links that smoothly scroll to different sections of the page.

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

The website can be deployed to any static hosting service:

- **Vercel**: `npm run build && vercel --prod`
- **Netlify**: `npm run build` and upload the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment

## License

This project is proprietary software for Momai Traders.

## Support

For technical support or customization requests, please contact the development team.
