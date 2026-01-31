# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Chicago Compass is a vanilla JavaScript single-page application for discovering social venues in Chicago neighborhoods. It uses a compass-themed UI where users select a "vibe" (interest category) and neighborhood to find matching venues.

**Stack**: Pure HTML, CSS, and JavaScript - no framework, no build tools, no package manager.

## Running the Application

No build step required. The app can be run by:
- Opening `index.html` directly in a browser
- Using any simple HTTP server: `python3 -m http.server 8000`

## Architecture

### Data Model

The core data is in `script.js` in the `vibeDictionary` object - a 5×5 grid mapping:
- **5 Neighborhoods**: Wicker Park, West Loop, Wrigleyville, Logan Square, The Loop
- **5 Vibes**: Sports, Tech, Artists, Foodies, Music
- Each combination returns up to 3 venue suggestions with name and address

### Application Flow

1. `initializePills()` sets up click handlers for vibe and neighborhood buttons
2. User selects one vibe pill and one neighborhood pill
3. `updateFindButton()` enables the search button when both are selected
4. `showCrowd()` orchestrates the search when button is clicked
5. `findSpots(neighborhood, vibe)` looks up venues in the dictionary
6. `displayResults(spots)` renders venue cards in the results container

### Styling

CSS uses variables in `:root` for the dark theme with neon accents (cyan `#00d4ff`, purple `#7b2cbf`). The design is mobile-first with responsive breakpoints.

## Extending the Application

- **Add venues**: Edit entries directly in `vibeDictionary`
- **Add new vibe/neighborhood**: Add HTML button, add dictionary data, update `vibeMapping` object
- **Change theme**: Modify CSS variables in `:root`
# Project Identity & Style Rules

## Design & Visuals
- **Official Colors:** Always use the Chicago Municipal colors for primary elements:
  - Star Red: `#E4002B`
  - Flag Blue: `#41B6E6`
  - White: `#FFFFFF`
- **Typography:** If adding new fonts, prioritize 'Big Shoulders' for headers and 'Roboto' for body text (official Chicago Design System fonts).
- **Iconography:** Use 6-pointed stars (not 5-pointed) to match the Chicago flag's symbolism.

## Coding Style
- **Naming:** Use "Chicago Social Compass" as the full project name in `<title>` tags.
- **Organization:** Keep all images in an `/assets` folder and CSS in `style.css`.
- **Interactions:** Ensure all buttons have a `:hover` state using a 20% darker shade of "Flag Blue."