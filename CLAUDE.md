# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site for Darren Cornelius Citra Wijaya — NLP researcher and CS student at BINUS University. Single-page static site (HTML + CSS + vanilla JS). No build step, no framework.

## Develop

Open `index.html` directly in a browser. No server, bundler, or package manager needed. Edit `style.css` for visual changes, `index.html` for content/structure.

## Architecture

- **`index.html`** — All content and inline JS (mobile menu toggle, scroll spy for nav active states, IntersectionObserver for scroll-reveal animations, accordion toggles for research cards)
- **`style.css`** — All styles, organized by section. CSS custom properties in `:root` for theming. Responsive breakpoints at 640px/768px/1024px. Uses `body::before` (gradient ambient) and `body::after` (dotted overlay) for background effects.
- **`darren_portfolio.md`** — PRD/product requirements doc (reference only, not served)

### Key patterns
- `.section-observe` elements get `.visible` class via IntersectionObserver for scroll-reveal animations
- Research cards use `.expanded` class + max-height transition for accordion behavior
- Active nav link tracked via scroll position against `section[id]` elements
- Card components use CSS custom properties for consistent theming (`--bg-card`, `--border-subtle`, etc.)
