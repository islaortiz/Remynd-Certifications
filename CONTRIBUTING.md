# Contributing

This knowledge base is **open** — any Remynd employee can add material for a
certification they passed. Thanks for sharing. 🙌

## Ground rules

- **No official / copyrighted content.** Only your own notes, cheatsheets and
  practice questions you wrote. No dumps of real exam questions or paid course
  material.
- Everything is a **study aid**, not a guarantee. Keep the "unofficial" notice on
  each page.
- Keep files self-contained where possible (single HTML/PDF).

## Add a new certification

1. **Create a folder** named after the exam code, no spaces — e.g. `AZ900`.
2. **Add your resources** inside it (cheatsheets, mock exams, notes as HTML / PDF).
3. **Add a resource page**: copy `PL300/index.html` into your folder, then edit:
   - the `<title>`, the `cert-tag`, the `<h1>` and the description,
   - the resource cards to point at your files.
   Paths use `../` to reach shared assets (`../assets/css/style.css`,
   `../images/...`) — keep them.
4. **Add a card** on the landing page `index.html`, inside `.cert-grid`:
   ```html
   <a class="cert-card" href="AZ900/index.html">
     <span class="cert-tag">AZ-900</span>
     <h3>Microsoft Azure Fundamentals</h3>
     <p class="who">For: anyone new to Azure</p>
     <p>Short description of what the exam certifies…</p>
     <span class="go">View resources →</span>
   </a>
   ```
5. **Open a pull request** describing what you added.

## Add a resource to an existing certification

Drop the file into that cert's folder and add a `res-card` in its `index.html`
under the right `res-group` (Cheatsheets / Mock exams / …).

## Style

Colors and components come from `assets/css/style.css` (Remynd brand teal
`#0A3435`). Reuse the existing classes — don't add per-page CSS unless needed.
