# foonly.dev

Personal website and blog built with [Hugo](https://gohugo.io/).

Live at **[foonly.dev](https://foonly.dev/)**

## Overview

A minimal, hand-styled personal site featuring:

- **Home** — short intro / about section
- **Projects** — grid of project cards with status badges and links
- **Posts** — blog posts with tags

The site uses vanilla CSS with custom properties for theming (including automatic dark mode via `prefers-color-scheme`) and ships no JavaScript framework.

## Prerequisites

- [Hugo](https://gohugo.io/installation/) **v0.158.0+** (extended edition)

## Getting Started

```sh
# Clone the repository
git clone https://github.com/foonly/site.git
cd site

# Start the dev server
hugo server -D
```

The site will be available at `http://localhost:1313/`.

## Project Structure

```
site/
├── archetypes/          # Content templates for `hugo new`
├── assets/
│   ├── css/main.css     # All styles (custom properties, reset, components)
│   └── js/main.js       # Client-side scripts (optional, not present yet)
├── content/
│   ├── _index.md        # Home page content
│   ├── posts/           # Blog posts
│   └── projects/        # Project pages
├── layouts/
│   ├── _default/        # Base, home, list, single, and term templates
│   ├── partials/        # Reusable partials (header, footer, menu, etc.)
│   └── projects/        # Project-specific layout overrides
├── static/              # Static assets copied as-is (favicon, etc.)
├── hugo.toml            # Site configuration
└── version.txt          # Current release version
```

## Building for Production

```sh
HUGO_ENVIRONMENT=production hugo
```

Output is written to the `public/` directory.

## Deployment

Deployment is automated via GitHub Actions. Pushing a version tag triggers the workflow:

```sh
git tag v1.2.0
git push origin v1.2.0
```

The [deploy workflow](.github/workflows/deploy.yml) will:

1. Install Hugo
2. Build the site with `HUGO_ENVIRONMENT=production`
3. Deploy the `public/` directory to the server via `rsync` over SSH

### Required GitHub Secrets & Variables

| Type     | Name             | Description                        |
| -------- | ---------------- | ---------------------------------- |
| Secret   | `DEPLOY_SSH_KEY` | Private SSH key for the server     |
| Variable | `DEPLOY_HOST`    | Hostname / IP of the target server |
| Variable | `DEPLOY_USER`    | SSH user on the target server      |
| Variable | `DEPLOY_PATH`    | Absolute path to deploy into       |
| Variable | `DEPLOY_KNOWN_HOSTS` | Server's SSH host key line(s), e.g. output of `ssh-keyscan <host>` |

## License

All content and code in this repository is © Niklas. All rights reserved unless otherwise stated.
