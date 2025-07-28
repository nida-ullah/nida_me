# Modern Portfolio Website

A beautiful, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Clean and professional design with gradient backgrounds
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Built with Next.js for optimal performance
- 🎭 **Smooth Animations**: Beautiful animations powered by Framer Motion
- 🎯 **SEO Optimized**: Proper meta tags and structured data
- ♿ **Accessible**: Built with accessibility in mind
- 🌙 **Dark Theme**: Beautiful dark theme with purple accents

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Section**: Personal information and what you do
3. **Skills Section**: Technical skills with animated progress bars
4. **Projects Section**: Showcase of your work with interactive cards
5. **Contact Section**: Contact form and social links

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icons
- **ESLint**: Code linting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change "Your Name" to your actual name
   - Update the description
   - Update social media links

2. **About Section** (`src/components/About.tsx`):
   - Update personal information
   - Modify the description
   - Update contact details

3. **Skills Section** (`src/components/Skills.tsx`):
   - Update skill levels and categories
   - Add or remove skills as needed

4. **Projects Section** (`src/components/Projects.tsx`):
   - Add your actual projects
   - Update project descriptions and links
   - Add project images

5. **Contact Section** (`src/components/Contact.tsx`):
   - Update contact information
   - Add your social media links

6. **Layout** (`src/app/layout.tsx`):
   - Update metadata with your information
   - Change title and description

### Styling

The portfolio uses Tailwind CSS for styling. You can customize:

- Colors: Update the purple/pink gradient colors
- Fonts: Change the font family in `globals.css`
- Animations: Modify Framer Motion animations
- Layout: Adjust spacing and grid layouts

### Adding Images

1. Place your images in the `public` folder
2. Update image paths in components
3. For project images, you can use placeholder services or your own images

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Performance Optimization

- Images are optimized with Next.js Image component
- Code splitting is handled automatically
- Static generation for better performance
- Minimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the portfolio, feel free to open an issue on GitHub.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
