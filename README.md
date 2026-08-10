# Remynd Certifications — Knowledge Base

An **open** knowledge base of tech-certification study material, shared by Remynd
employees. Cheatsheets, mock exams and notes — by colleagues, for colleagues.

> ⚠️ **Unofficial.** Everything here is community-made study material, **not**
> official vendor content. Always verify against the official exam pages.

## View the site

Open `index.html` in a browser. When published (e.g. GitHub Pages), it serves the
landing page with one card per certification; each card links to that
certification's resource page.

## Structure

```
.
├── index.html              # Landing page — welcome + certification cards
├── assets/css/style.css    # Shared brand styles (Remynd colors)
├── images/                 # Remynd logos
├── PL300/                  # Everything for the PL-300 certification
│   ├── index.html          #   → resource page for PL-300
│   └── ...                 #   → cheatsheets, mock exams, question bank
└── DP900/                  # Everything for the DP-900 certification
    ├── index.html
    └── ...
```

**Rule:** each certification lives in its own folder named after the exam code
(`PL300`, `DP900`, `AZ900`, …). All of that cert's resources go inside it.

## Contributing

Passed a certification? Add your material — see [CONTRIBUTING.md](CONTRIBUTING.md).

## Publishing on GitHub Pages

Repo **Settings → Pages → Source: `main` / root**. Site goes live at
`https://<org-or-user>.github.io/<repo>/`.
