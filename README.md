# Jealous Recide — Personal Portfolio (ITST 301)

Personal portfolio website built for **ITST 301 (Principles of Web Design)** under BSIT – Web and Mobile Application Development (WMAD) at Laguna State Polytechnic University[cite: 2, 7, 8]. It showcases my background, learning focus, selected builds, and interactive front-end controls[cite: 2, 7, 8, 9].

## Links & Deliverables
* **Deployed Portfolio:** https://velvety-stardust-ba9c5e.netlify.app/
* **GitHub Repository:** https://github.com/jealous-23/Personal-Portfolio
* **Figma Prototype & Wireframes:** https://www.figma.com/proto/FcJTuWtA9QdmIVQWVwW0Ci/Recide_Jealous_PersonalPortfolio_Week6?node-id=117-224&t=16QmG3BetdjgKX7D-6

## How to Open & Locate Main Files
1. **Live Website:** Open `https://velvety-stardust-ba9c5e.netlify.app/` in a browser (accessible without sign-in; tested in a private/incognito window).
2. **Local Preview:** Clone or download the repository from `https://github.com/jealous-23/Personal-Portfolio` and open `index.html` in a browser (or serve locally via a static server / VS Code Live Server).

### Main Files
* `index.html` — Home/landing view with developer introduction, interactive greeting trigger, featured projects, and core stack.
* `about.html` — Background, current learning focus bars, and client-side validated contact form (`#contact`).
* `projects.html` — Selected builds (**Wordavle**, **TilePacer**, and **Caleb's Kitchen**) with expandable details and a project status table.
* `css/style.css` — Custom visual tokens, layout rules, responsive styling, and `:focus-visible` keyboard focus styles[cite: 2, 5, 11].
* `js/script.js` — Client-side JavaScript for time-aware greeting, project detail toggles, form validation, and back-to-top scroll behavior[cite: 2, 10].
* `images/profile.jpg` — Developer profile image asset[cite: 1, 8].

## Technologies & Tools Used
* **Markup, Styling & Layout:** Semantic HTML5, CSS3, and Bootstrap 5.3.3[cite: 2, 8, 11]
* **Scripting & Interactivity:** Vanilla JavaScript (`DOMContentLoaded`, event listeners, `aria-expanded` / `hidden` state toggles, form validation, scroll event handling)[cite: 2, 10]
* **Design & Workflow:** Figma, Git, and GitHub

## Interactive JavaScript Features
* **Greeting Trigger (`#greetBtn` on `index.html`):** Displays a time-of-day welcome (`Good morning`, `Good afternoon`, or `Good evening`) inside `#greetMessage` (`role="status"` / `aria-live="polite"`)[cite: 8, 10].
* **Project Details Toggle (`.toggle-details-btn` on `projects.html`):** Toggles the `hidden` attribute on each project's details panel, updates `aria-expanded`, and switches the button text between `Show details ▼` and `Hide details ▲`[cite: 9, 10].
* **Contact Form Validation (`#contactForm` on `about.html`):** Validates required fields and email format in the browser (static front-end demo; does not send messages to a server)[cite: 7, 10].
* **Back-to-Top Button (`#backToTop`):** Appears after scrolling past `300px` and smoothly scrolls back to the top[cite: 10, 11].

## Featured Student Builds
* **Wordavle** *(Java Swing)* — Category-based word guessing game with four-, five-, and six-letter challenges and five attempts[cite: 8, 9].
* **TilePacer** *(Java Swing)* — Tile-based arcade game concept emphasizing responsive controls, screen flow, and high-contrast visuals[cite: 8, 9].
* **Caleb's Kitchen** *(PHP, MySQL, HTML, CSS)* — Restaurant web concept with menu browsing, cart management, and online ordering workflows[cite: 8, 9].