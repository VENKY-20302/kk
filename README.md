# Netflix Clone Project Documentation

## Project Title
Netflix Clone

## Aim
Build a responsive Netflix-style landing page with interactive movie cards, a searchable catalog, and video preview playback using plain HTML, CSS, and JavaScript.

## Abstract
This project recreates the look and feel of a streaming service interface inspired by Netflix. It includes a sticky header, hero banner, horizontally scrolling movie rows, a search filter, and a video preview overlay. The implementation is built as a static web page with dynamic movie row rendering and user interaction handled in JavaScript.

## Files
- `index.html` - Project structure and page layout
- `netflix.css` - Visual styling, layout, responsive card design, and theme
- `netflix.js` - Data model, DOM rendering, search filtering, and video overlay logic

## Project Features
- Sticky header with navigation and search input
- Hero section with title, description, and CTA buttons
- Movie row categories such as "Trending Now", "Action & Adventure", and "Dramas"
- Horizontally scrollable movie carousels
- Clickable movie cards that open a video preview overlay
- Accessible keyboard support for movie cards (Enter / Space to open preview)
- Search field filtering movie titles in real time

## Links
- Local project entry: `index.html`
- CSS styles: `netflix.css`
- JavaScript behavior: `netflix.js`
- Embedded YouTube demo section in `index.html`
  - Example video: `https://www.youtube.com/embed/_4S9H7J_HM4?rel=0`

## Code Overview

### `index.html`
- Defines the page structure:
  - Header with brand, navigation, search input, and profile button
  - Hero section with marketing copy and action buttons
  - Main content area containing the dynamic movie rows container
  - Embedded YouTube iframe demo section
  - Footer with author credit
- Loads the stylesheet and script at the top and bottom of the document.

### `netflix.css`
- Sets a dark streaming UI theme with gradients and accent color
- Styles the sticky header, hero banner, movie rows, and buttons
- Uses CSS grid for horizontal row scrolling
- Adds hover states and polished card visuals
- Ensures the page looks cinematic and modern

### `netflix.js`
- Defines movie categories and movie data, including title, year, image, and video URL
- Dynamically renders category rows and movie cards into the page
- Builds an overlay for video playback and attaches close behavior
- Implements search filtering across movie titles
- Handles keyboard accessibility for movie cards

## Screenshots
To capture screenshots of the project:
1. Open `index.html` in a browser.
2. Capture the full landing page to show the hero section and movie rows.
3. Click a movie card to show the video preview overlay, then capture that state.

Suggested screenshot names:
- `screenshot-home.png` — homepage with header, hero, and rows
- `screenshot-video-overlay.png` — movie preview overlay active

> Note: There are no screenshot image files included in this repository yet. Use your browser or OS screenshot tool to create them.

## Getting Started
1. Open `index.html` in a browser.
2. Use the search input to filter movie titles.
3. Click any movie card to open the inline preview overlay.

## Notes
- This is a static frontend prototype; there is no backend or real streaming functionality.
- The embedded YouTube video iframe is used to simulate preview playback.
- Movie images use remote Unsplash links for placeholder artwork.
