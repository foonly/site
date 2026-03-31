# Copilot Instructions

## Project Overview

Personal Hugo static site at `https://foonly.dev/`. Single language (`en-us`), TOML config and front matter throughout.

## Commands

```bash
hugo server                # Local dev server
pnpm run build             # Full production build (hugo + postcss)
pnpm run watch             # Watch and reprocess CSS only
```

**Package manager**: pnpm (v8.15.8).

## Architecture

### Asset Pipeline

CSS and JS are handled separately:

- **CSS**: `assets/css/main.css` → PostCSS CLI (postcss-preset-env stage 2 + postcss-import, nesting disabled) → `public/css/`. PostCSS runs *outside* Hugo Pipes as a post-build step in `pnpm run build`.
- **JS**: `assets/js/main.js` → Hugo Pipes `js.Build` (esbuild bundler).
- In **production** (`hugo.Environment != "development"`), both CSS and JS are fingerprinted with SRI integrity attributes. In **development**, CSS is served as-is and JS is unminified.

### Layout System

Templates use Hugo's block/define pattern:

- `layouts/_default/baseof.html` — skeleton; page templates fill `{{ define "main" }}...{{ end }}`
- Partials live in `layouts/partials/`; nested partials under `layouts/partials/head/` for CSS/JS `<head>` fragments
- `partialCached` is used for `head/css.html` and `head/js.html`
- Inline partials (defined with `define` inside a partial file) are used in `menu.html` for recursive menu walking
- Partials that accept parameters use explicit dict context: `{{ partial "terms.html" (dict "taxonomy" "tags" "page" .) }}`
- Partials are documented with JSDoc-style comments (`@context`, `@example`)

### Content Structure

- **Posts** (`content/posts/`) — primary section, uses `tags` taxonomy
- **Blog** (`content/blog/`) — secondary/experimental section
- Page bundles (directory + `index.md`) are used alongside standalone `.md` files
- All front matter uses TOML delimiters (`+++`)

### Conventions

- Front matter fields follow the archetype in `archetypes/default.md` (title, date, draft)
- Tags taxonomy is the only active taxonomy; rendered via `terms.html` partial on single pages
- Menus are defined in `hugo.toml` under `[menus.main]` with `weight` ordering
- Templates use `{{ or (T .Identifier) .Name }}` for menu labels (i18n-ready via `T` translation function, even though no translations are currently configured)
- `<html>` tag uses `{{ or site.Language.LanguageCode site.Language.Lang }}` and `{{ or site.Language.LanguageDirection "ltr" }}`
- Dates: machine-readable as `time.Format "2006-01-02T15:04:05-07:00"`, human-readable as `time.Format ":date_long"`

### Notes

- `assets/css/input.css` is currently empty — likely a Tailwind entry point placeholder
- Utility classes (`bg-white dark:bg-slate-800`, etc.) appear in `baseof.html` but Tailwind is not yet installed
- `data/` and `i18n/` directories are empty scaffolding
