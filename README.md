# Company Portfolio Template

A customizable React portfolio with sample content. The visuals are original CSS compositions and illustrative project mockups. No personal resume, certificate PDFs, project screenshots, or profile photographs are included.

## Run locally

```sh
npm ci
npm start
```

## Validate

```sh
npm test -- --watchAll=false
npm run build
```

## Design and interactions

A warm editorial palette, original geometric artwork, four illustrative project concepts, category filters, accessible native project dialogs, a mobile navigation menu, and email copying. Project previews are visual concepts, not functional stores or analytics products.

## Customize

- Update the profile and introduction in `src/components/Hero.js` and `About.js`.
- Replace the sample email in `Contact.js` and its existing test in `src/App.test.js`. Update the location and availability copy.
- Update branding in `Navbar.js`, `Footer.js`, `public/index.html`, and `public/manifest.json`.
- Replace sample education and experience in `Journey.js`, and the specialty strip in `Stats.js`.
- Edit skills, projects, and certificates in `src/data/`.
- Customize the abstract hero composition in `global.css` and the monogram in `About.js`.
- Project visuals live in `ProjectArt.js` and are styled by theme in `global.css`. Replace these concept previews with your own approved screenshots when ready.
- Add your own certificate PDFs and set their `link` values in `src/data/certificates.js`. Until then, the sample card has no download link.
- Resume downloads have been removed. Add your own resume and download button when ready.

All biography, skill, project, and qualification entries are demonstration content, not claims about a real person or company. Replace them before publishing.

Keep secrets out of source control. This application runs in the browser, so any bundled configuration is public.
