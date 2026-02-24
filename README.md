# 🖤💜 Carlos Miguel V. Torres — Portfolio

A sleek, dark portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
carlos-portfolio/
├── app/
│   ├── layout.tsx        # Root layout (fonts, metadata)
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles + CSS variables
├── components/
│   ├── Cursor.tsx        # Custom animated cursor
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── Skills.tsx        # Skills grid
│   ├── Projects.tsx      # Projects showcase
│   ├── About.tsx         # About + stats
│   ├── Contact.tsx       # Contact + social links
│   ├── Footer.tsx        # Footer
│   ├── ScrollReveal.tsx  # Scroll animation wrapper
│   └── data/
│       ├── skills.ts     # Skills data
│       └── projects.ts   # Projects data
├── public/               # Static assets (add your images here)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## ✏️ Customization

### Add a new project
Edit `components/data/projects.ts` and add a new entry:
```ts
{
  id: '02',
  title: 'My New Project',
  description: 'What this project does.',
  tags: ['React', 'Next.js'],
  status: 'Live',
  statusColor: '#a3e635',
  github: 'https://github.com/JenxxAI/your-repo',
  live: 'https://your-site.com',
}
```

### Update your email
In `components/Contact.tsx`, update:
```tsx
href="mailto:YOUR_EMAIL_HERE"
```

### Add a profile photo
Drop your image in `/public/avatar.jpg` and add it to `Hero.tsx`:
```tsx
import Image from 'next/image'
<Image src="/avatar.jpg" alt="Carlos" width={300} height={300} className="rounded-full" />
```

---

## 🌐 Deploy to Vercel

1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Select your repo → Deploy

That's it — your portfolio is live! ✅

---

## 🎨 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework + routing |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| CSS Variables | Theme consistency |
| Intersection Observer | Scroll reveal animations |
| Google Fonts | Syne + DM Mono + Outfit |
