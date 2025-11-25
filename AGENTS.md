# Repository Guidelines

This repository is a static site generator that converts Markdown files into HTML pages using a custom build script (`blah.js`). Articles are written in Markdown at the repository root and transformed into a blog-style website.

## Project Structure & Module Organization

```
dtrejo.com/
├── *.md                  # Article files (source content)
├── _layout.html          # Main HTML template with inline CSS
├── _components/          # Reusable HTML/JS components (nav, footer, etc.)
├── blah.js              # Main build script (static site generator)
├── motif.js             # Social media image generator
├── dist/                # Build output (git-ignored, deployed separately)
├── css/, js/            # Static assets (copied to dist)
├── images/              # Image assets
└── _deploy.sh           # Deployment script to GitHub Pages
```

Markdown files in the root become HTML pages at `/{filename}`. Components in `_components/` are loaded by the build script and injected into templates.

## Build, Test, and Development Commands

```bash
npm run build          # Generate static site into dist/ directory
npm run debug          # Build with verbose logging (-v flag)
npm start              # Start local development server (serve .)
npm run deploy         # Build and deploy to GitHub Pages (DTrejo/dtrejo.github.io)
```

No automated test suite exists (`npm test` returns an error). Manual verification is required after builds.

## Coding Style & Naming Conventions

**JavaScript:**
- Use 2-space indentation (no tabs)
- Template literals for string interpolation
- Prefer `const` over `let` where possible
- ES6+ syntax (arrow functions, destructuring)
- Minimal comments (code should be self-explanatory)

**Files:**
- Markdown articles: kebab-case (e.g., `how-to-write-consistently-painlessly.md`)
- Internal files: Prefix with `_` (e.g., `_layout.html`, `_deploy.sh`)
- Components directory: `_components/`

**Style:**
- No linting tools configured
- Follow existing patterns in `blah.js` for consistency

## Commit & Pull Request Guidelines

**Commit Message Patterns:**
Based on recent history, commits follow an imperative, sentence-case style:

```
Update [file]: [description]
Create [file]
[verb] [description]
```

Examples:
- `Update sf-ruby-conference-notes-2025.md`
- `Create chicha-recipe.md`
- `delete zero width spaces`
- `fix formatting again`
- `improve formatting`

Keep commits focused on single changes. Use descriptive but concise messages. No strict convention enforced, but clarity is preferred.

**Branch Strategy:**
- Default branch: `master`
- Active development branch: `develop`
- Work on feature branches and merge to `develop`, then to `master` for deployment

**Pull Requests:**
No strict PR process documented. For agent-generated changes:
- Verify build completes successfully (`npm run build`)
- Test locally with `npm start`
- Check generated `dist/` output for correctness
- Ensure no sensitive data in commits (deployment credentials in `_deploy.sh` use SSH keys)

## Agent-Specific Instructions

When making changes to this repository:

1. **Content Changes:** Edit or create `.md` files in the repository root. Use YAML frontmatter for metadata (title, description, etc.).

2. **Template Changes:** Modify `_layout.html` or components in `_components/`. Templates use ES6 template literal syntax (`${this.property}`).

3. **Build Script Changes:** Exercise caution when editing `blah.js` — it's the core generator. Test thoroughly with `npm run debug`.

4. **Always run `npm run build`** after content or code changes to verify the build succeeds before committing.

5. **Do not commit `dist/` directory** — it's generated and deployed separately via `_deploy.sh`.

6. **Check git status** before commits to avoid committing untracked system files (`.vscode/`, `node_modules/`, etc.).
