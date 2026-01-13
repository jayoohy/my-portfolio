# Joy Ogukah - Portfolio

A modern, fully responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a dynamic blog, project showcase, and dark mode support with smooth animations.

## Features

- ✨ **Modern Design** - Clean, professional UI with smooth animations using Framer Motion
- 🌙 **Dark Mode** - Built-in dark/light theme toggle with persistent preference
- 📱 **Fully Responsive** - Mobile-first design that looks great on all devices
- 📝 **Blog Section** - Write and publish blog posts with markdown-like HTML content
- 💼 **Project Showcase** - Display your projects with live demo links and GitHub repos
- ⚡ **Fast Performance** - Optimized images, code splitting, and server-side rendering
- 🎯 **SEO Ready** - Metadata configuration for better search engine visibility
- 🎨 **Customizable** - Easy to modify colors, content, and styling

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Geist Font Family](https://vercel.com/font)

## Project Structure

```
├── app/
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── blog/
│   │   ├── page.tsx             # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx         # Individual blog post
│   ├── projects/
│   │   └── page.tsx             # Projects showcase
│   ├── contact/
│   │   └── page.tsx             # Contact page
│   └── resume/
│       └── page.tsx             # Resume page
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Navigation bar
│   │   │   └── PageContainer.tsx # Page wrapper
│   │   ├── theme/
│   │   │   └── ThemeProvider.tsx # Theme context
│   │   └── ui/
│   │       └── animated-theme-toggler.tsx
│   ├── img/                      # Image assets
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/                       # Static assets
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

Edit `app/page.tsx` to update:

- Your name and title
- Social media links
- CV download link

### Add Blog Posts

Edit `app/blog/[slug]/page.tsx` and add entries to the `blogPosts` object with:

- `title`: Post title
- `content`: HTML content of the post
- `date`: Publication date
- `readTime`: Estimated reading time
- `category`: Post category
- `slug`: URL-friendly identifier

### Update Projects

Edit `app/projects/page.tsx` and update the `projects` array with:

- `title`: Project name
- `description`: Project description
- `tags`: Technology tags
- `image`: Project image
- `liveUrl`: Live demo URL (use `"#"` to disable)
- `githubUrl`: GitHub repository URL
- `category`: "web" or "ai"

### Customize Colors

Primary colors are defined in the code:

- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Accent: `#a9165f` (Rose)

Edit these hex values throughout the codebase to change the color scheme, or configure them in `tailwind.config.ts` for consistency.

### Modify Navigation

Update the `navItems` array in `src/components/layout/Navbar.tsx` to add or remove navigation links.

## Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Then start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Deployment

This project is ready to deploy on [Vercel](https://vercel.com), the creators of Next.js:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be deployed and live!

For other hosting providers, follow the Next.js [deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## License

This project is open source and available under the MIT License.

## Author

**Joy Ogukah** - Software Developer

- [GitHub](https://github.com/jayoohy)
- [LinkedIn](https://www.linkedin.com/in/joy-ogukah-b4aba7275/)
- [Twitter](https://x.com/jay_ooh_y)
- [Email](mailto:ogukahjoy@gmail.com)
