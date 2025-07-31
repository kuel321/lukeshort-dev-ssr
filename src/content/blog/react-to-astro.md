---
title: "Why I Switched from Client-Rendered React to Astro"
pubDate: 2025-07-02
description: "For years, I built everything in React. Client-rendered, single-page apps with snappy transitions and a clean component model. It worked—until it didn’t."
author: "Luke Short"
heroImage: "/wvcam-proj.png"
---

### Why I Switched from Client-Rendered React to Astro

When I launched projects like WVCams, I realized something:
Performance alone isn’t enough if Google can’t see your content.

### The SEO Wall
Client-rendered apps load the shell first, then fetch and hydrate content on the client. That’s fine for users with fast devices and good connections. But bots? Not so much.

Google’s crawler can render JavaScript—eventually—but it’s not guaranteed, and it’s not fast. I started seeing pages that looked great in the browser but were practically invisible to search engines.

I’d optimized images, compressed scripts, even fine-tuned Lighthouse scores—yet nothing helped as much as this one change:

### Switching to Astro
Astro isn’t a framework. It’s a static site generator with optional islands of interactivity. Out of the box, it ships HTML—not a JavaScript bundle. That means Google (and every crawler or screen reader) gets real, readable content instantly.

Astro let me:

Server-render content at build time

Keep using React components (or Preact in my case)

Cut JS payloads down to just what’s interactive

Drastically improve SEO and indexing speed

On WVCams.com, I saw faster indexing, better crawl depth, and more impressions almost immediately after the switch.

Still Feels Like React
The best part? I didn’t have to abandon my component mindset. Astro supports JSX, file-based routing, scoped styles, and just enough interactivity to keep things modern—without dragging in a full client app by default.

And when I do need reactivity (like login modals or interactive maps), I use islands—just mount a component, and Astro handles the rest.