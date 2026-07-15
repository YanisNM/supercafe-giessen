# supercafé — Website

Next.js 14 (App Router) + Tailwind CSS project for the supercafé Gießen website.

## Struktur

```
supercafe-website/
├─ app/
│  ├─ layout.jsx        # Root-Layout, Metadata, globale Styles
│  ├─ page.jsx           # Startseite – rendert die Website-Komponente
│  └─ globals.css        # Tailwind + Fonts + Animationen
├─ components/
│  └─ SupercafeWebsite.jsx  # Komplette Website (Hero, Menü, Galerie, Kontakt …)
├─ public/
│  └─ images/            # Hier später die echten Café-Fotos ablegen
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
└─ next.config.mjs
```

## Lokal starten

```bash
npm install
npm run dev
```

Dann [http://localhost:3000](http://localhost:3000) öffnen.

## Auf Vercel deployen

1. Dieses Projekt in ein neues GitHub-Repository pushen.
2. Auf [vercel.com](https://vercel.com) → **Add New Project** → das Repo auswählen.
3. Vercel erkennt Next.js automatisch (Build Command `next build`, Output wird automatisch verwaltet) — einfach **Deploy** klicken.
4. Fertig — die Website ist unter der vergebenen `*.vercel.app`-Domain live. Eine eigene Domain (z. B. supercafe-giessen.de) lässt sich danach unter **Project → Settings → Domains** verbinden.

## Echte Fotos einbinden

Aktuell zeigt die Seite dezente Platzhalter-Flächen anstelle von Fotos (`ImagePlaceholder`-Komponente
in `components/SupercafeWebsite.jsx`). Sobald echte Fotos vorliegen:

1. Bilder in `public/images/` ablegen.
2. In `SupercafeWebsite.jsx` die jeweilige `<ImagePlaceholder ... />`-Stelle durch
   `<img src="/images/dein-bild.jpg" alt="..." className="..." />` (gleiche Klassen wie der
   Platzhalter) ersetzen.

## Menü aktualisieren

Die komplette Speisekarte liegt als Datenobjekt `MENU_CATEGORIES` oben in
`components/SupercafeWebsite.jsx` — Preise, Beschreibungen und neue Positionen lassen sich dort
direkt anpassen, ohne das Layout zu berühren.
