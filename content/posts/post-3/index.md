+++
title = 'Static sites and why I still like them'
date = 2023-03-15T11:00:00-07:00
draft = false
tags = ['web', 'hugo']
+++

There's something satisfying about a website that's just files. No moving parts to keep patched, no database to back up, no server process that can crash at 2 am.

Static sites have made a comeback under the "Jamstack" banner, but the idea isn't new. Early websites were just HTML files on an FTP server. We added dynamic features when we needed them — and somewhere along the way dynamic became the default even when it wasn't needed.

## What fits

Static generation works really well for:

- Personal sites and blogs
- Documentation
- Marketing pages
- Portfolios

Basically anything where the content doesn't change based on who's viewing it.

## What doesn't

It's the wrong tool when you need:

- User-specific content (dashboards, accounts)
- Real-time data
- Complex forms with server-side logic

For those cases a server is the right answer. But for a personal site like this one, files are fine.

## The build step

The one trade-off is that you need a build step. Every content change means regenerating the site and deploying. With modern CI/CD pipelines (GitHub Actions pushing to a CDN) this takes a few seconds and happens automatically on every commit. It's not a real constraint.

Files are good.
