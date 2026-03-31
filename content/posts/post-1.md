+++
title = 'Getting started with Hugo'
date = 2023-01-15T09:00:00-07:00
draft = false
tags = ['hugo', 'web']
+++

Hugo is a static site generator written in Go. It takes Markdown files and templates and produces a complete website — no database, no runtime dependencies, just files you can put anywhere.

After using various tools over the years I keep coming back to Hugo for personal projects. It's fast, has sensible defaults, and the template language is expressive enough to build anything I've needed.

## Getting started

Install Hugo and create a new site:

```sh
brew install hugo
hugo new site mysite
cd mysite
git init
```

Add a theme or start with your own layouts. Hugo looks for templates in `layouts/`, falling back to a theme if one is configured.

## Content organisation

Content lives in the `content/` directory. Sections map naturally to subdirectories. Page bundles (a directory with an `index.md`) let you keep images and other resources alongside their content.

```
content/
  posts/
    my-first-post.md
    a-post-with-images/
      index.md
      diagram.png
```

That's the foundation. Everything else — taxonomies, shortcodes, data files — builds on top of this simple structure.
