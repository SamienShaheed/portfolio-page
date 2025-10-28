# Portfolio & Blog

A modern, minimal portfolio and blog built with Next.js 16, TypeScript, Tailwind CSS, and MDX. Features subtle animations with Framer Motion, accessibility-first design, and a clean typography-focused aesthetic.

## Features

- **Modern Stack**: Next.js 16 with App Router, TypeScript, Tailwind CSS v4
- **Content Management**: MDX support with frontmatter parsing
- **UI Components**: shadcn/ui components for consistent design
- **Animations**: Subtle Framer Motion animations with reduced motion support
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels
- **Typography**: Beautiful prose styling with @tailwindcss/typography
- **Responsive**: Mobile-first design that works on all devices
- **SEO Ready**: Metadata, OpenGraph, and Twitter cards

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Content**: MDX with gray-matter
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-portfolio
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

## Project Structure

```
my-portfolio/
├── content/                 # Content files
│   ├── posts/              # Blog posts (.mdx)
│   └── projects/           # Project descriptions (.md)
├── src/
│   ├── app/                # App Router pages
│   │   ├── blog/           # Blog pages
│   │   ├── projects/       # Project pages
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   ├── components/         # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── fade-in.tsx     # Animation wrapper
│   │   ├── post-card.tsx   # Blog post card
│   │   ├── project-card.tsx # Project card
│   │   ├── site-footer.tsx # Footer component
│   │   └── site-header.tsx # Header component
│   └── lib/                # Utilities
│       ├── content.ts       # Content management
│       └── utils.ts         # Helper functions
├── next.config.ts          # Next.js configuration
└── package.json
```

## Content Management

### Adding Blog Posts

1. Create a new `.mdx` file in `content/posts/`
2. Add frontmatter with required fields:

```mdx
---
title: "Your Post Title"
description: "A brief description of your post"
date: "2025-01-15"
published: true
tags: ["tag1", "tag2"]
---

# Your Post Title

Your content here...
```

### Adding Projects

1. Create a new `.md` file in `content/projects/`
2. Add frontmatter with required fields:

```md
---
title: "Project Name"
description: "Brief project description"
url: "https://project-url.com"
github: "https://github.com/username/project"
tags: ["Next.js", "TypeScript"]
featured: true
---

# Project Name

Detailed project description...
```

## Customization

### Updating Site Information

1. **Site Title**: Update the title in `src/app/layout.tsx`
2. **Personal Info**: Modify the homepage content in `src/app/page.tsx`
3. **Navigation**: Update navigation items in `src/components/site-header.tsx`

### Styling

- **Colors**: Modify CSS variables in `src/app/globals.css`
- **Typography**: Update prose styles in the same file
- **Components**: Customize shadcn/ui components in `src/components/ui/`

### Analytics

Replace the Plausible script in `src/app/layout.tsx`:

```tsx
<script
  defer
  data-domain="your-domain.com"
  src="https://plausible.io/js/script.js"
></script>
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- **Netlify**: Use `npm run build` and deploy the `out` folder
- **Railway**: Connect your GitHub repository
- **DigitalOcean App Platform**: Use the Next.js preset

## Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=localhost
```

For production, update these with your actual domain:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.com
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Accessibility

This portfolio is built with accessibility in mind:

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader friendly navigation
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects `prefers-reduced-motion`
- **Color Contrast**: WCAG AA compliant colors
- **Keyboard Navigation**: Full keyboard accessibility

## Performance

- **Lighthouse Score**: Optimized for 95+ scores
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Google Fonts with display swap
- **Bundle Analysis**: Optimized imports and code splitting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have questions or need help:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [Tailwind CSS docs](https://tailwindcss.com/docs)
3. Look at [shadcn/ui examples](https://ui.shadcn.com)
4. Open an issue on GitHub

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
