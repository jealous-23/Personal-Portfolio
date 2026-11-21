# Jealous Recide — Personal Portfolio (ITST 301)

Personal portfolio website built for **ITST 301 (Principles of Web Design)** under BSIT – Web and Mobile Application Development (WMAD). The site presents my background, technical learning focus, selected software/web builds, and interactive front-end controls.

## How to Open & Locate Main Files
1. **Live Website:** Open the deployed portfolio URL above in any modern desktop or mobile browser (tested in a private/incognito window without sign-in).
2. **Local Preview:** Clone or extract the project files and open `index.html` in a browser (or run via a local static server / VS Code Live Server).

### Project Structure
* `index.html` — Home/landing view with developer overview, interactive greeting trigger, featured project links, and core stack.
* `about.html` — Developer background, learning focus progress bars, and client-side validated contact form (`#contact`).
* `projects.html` — Selected builds (`Wordavle`, `TilePacer`, and `Caleb's Kitchen`) with expandable details and a project status table.
* `css/style.css` — Custom layout, theme tokens, responsive rules, and keyboard focus styles.
* `js/script.js` — Interactive JavaScript for time-aware greeting, expandable project details, form validation, and back-to-top scroll control.
* `images/profile.jpg` — Developer profile image asset.

## Technologies & Tools Used
* **Markup, Styling & Layout:** Semantic HTML5, CSS3, and Bootstrap 5.3.3
* **Scripting & Interactivity:** Vanilla JavaScript (`DOMContentLoaded`, event listeners, `aria-expanded` / `hidden` toggles, form validation, scroll handling)
* **Design & Version Control:** Figma, Git, and GitHub

## Interactive JavaScript Features
* **Greeting Trigger (`#greetBtn` on `index.html`):** Displays a time-of-day welcome message (`Good morning`, `Good afternoon`, or `Good evening`) inside an `aria-live="polite"` status region.
* **Project Details Toggle (`.toggle-details-btn` on `projects.html`):** Expands or collapses technical notes for each project while updating `aria-expanded` and the `hidden` attribute.
* **Contact Form Validation (`#contactForm` on `about.html`):** Checks required name, email, and message fields plus email format in the browser (static demo—does not send data to a server).
* **Back-to-Top Control (`#backToTop`):** Appears after scrolling past `300px` and smoothly returns to the top of the page.

## Featured Student Builds
* **Wordavle** *(Java Swing)* — Category-based word-guessing game with four-, five-, and six-letter challenges and five attempts.
* **TilePacer** *(Java Swing)* — Tile-based arcade game concept emphasizing screen flow, responsive controls, and visual contrast.
* **Caleb's Kitchen** *(PHP, MySQL, HTML, CSS)* — Restaurant web concept covering menu browsing, cart management, and online ordering workflows.

## Course & Academic Context
Built as part of the **ITST 301 Personal Portfolio Final Project** (Laguna State Polytechnic University). Accompanying documentation and Figma design notes are maintained in the project manual and PDF submission.