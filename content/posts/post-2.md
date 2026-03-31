+++
title = 'CSS custom properties for theming'
date = 2023-02-15T10:00:00-07:00
draft = true
tags = ['css', 'web']
+++

CSS custom properties (often called CSS variables) are one of the most useful features added to CSS in recent years. They unlock a clean approach to theming — especially dark/light mode — without JavaScript or preprocessors.

## Defining tokens

Declare properties on `:root` so they're available everywhere:

```css
:root {
  --color-bg: #f5f5f4;
  --color-text: #1c1917;
}
```

## Responding to preferences

Use a media query to swap values for dark mode:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #1c1917;
    --color-text: #f5f5f4;
  }
}
```

Now every element that uses `var(--color-bg)` switches automatically. No class toggling, no runtime cost, no flash of wrong theme.

## Keeping it minimal

The trick is to define enough tokens that your UI is consistent, but not so many that changes become tedious. A handful of colour roles (background, surface, border, text, text-muted, accent) plus a few spacing and radius values covers most cases.
