# Redline Gym

A bold, single-page landing site for a gym, built with React, Vite and Tailwind CSS.

## Features

- Hero with a self-drawing heartbeat line
- Programs accordion, About, and Pricing sections
- Free-week CTA and contact form
- Smooth scrolling, mobile menu, responsive layout
- Respects reduced-motion settings

## Tech stack

React 18, Vite, Tailwind CSS 3, react-scroll, react-icons

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
public/            images and favicon (banner.png, offer.png, favicon.svg)
src/
  App.jsx          page layout
  index.css        Tailwind setup and custom styles
  components/      Navbar, Hero, Marquee, Programs, About,
                   Pricing, CTA, Contact, Footer
```

## Customizing

- Brand colors and fonts: `tailwind.config.js`
- Text, plans and programs: edit the arrays at the top of each component

The forms only show a success message for now. Connect them to a backend or a service like Formspree to receive real messages.

## License

Copyright &copy; 2026 SafOne. All rights reserved.

This code may not be used, copied, modified, or distributed in any way without written permission from the author, so contact me first on [GitHub](https://github.com/Safwen-bm).