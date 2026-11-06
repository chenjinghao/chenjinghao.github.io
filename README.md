# chenjinghao.github.io

Personal site for **Jinghao (Adam) Chen** — data analyst and analytics engineer.
Hand-written HTML, CSS and a small enhancement script. No build step, no
frameworks, no trackers, no external requests (the old Bootstrap/Font Awesome
CDN links are gone).

Served at <https://chenjinghao.github.io/> by the existing
`.github/workflows/static.yml` workflow, which publishes the repo root on every
push to `main`.

## Files

| Path | Purpose |
| --- | --- |
| `index.html` | The site: hero, what I do, projects, experience, credentials, contact |
| `styles.css` | Design tokens, layout and components, light + dark |
| `app.js` | Theme toggle, sticky-header state, nav scroll-spy |
| `assets/Jinghao_Chen_Resume.pdf` | Résumé linked from the header and contact section |
| `assets/image.png` | Avatar in the header, and the site favicon |

## Legacy pages

Four standalone pages from the previous site are kept and still reachable; all
carry `noindex` so they do not compete with the homepage in search:

- `greetings.html`, `mailme.html`, `socialmedias.html`, `linkedinprofilebadge.html`

Everything else from the old site — the Bootstrap homepage, its stylesheet,
`script.js`, the `resouces/` images, the screenshots and the old README — was
removed and remains available in git history:

```powershell
git log --diff-filter=D --name-only       # what was deleted, and when
git show <commit>^:legacy-index.html      # recover a file from before deletion
```

## Editing

Content lives in `index.html` in five commented sections. Colours and type
scales are CSS custom properties at the top of `styles.css`; every text column,
card and list is capped at the same `--rail` width so they share one right edge.

Preview locally:

```powershell
python -m http.server 8000
```

## Note

The résumé PDF contains a phone number. If that shouldn't be public on the open
web, replace `assets/Jinghao_Chen_Resume.pdf` with a redacted version.
