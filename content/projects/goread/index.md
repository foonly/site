+++
title = 'goread'
date = 2024-06-01T00:00:00+00:00
draft = false
description = 'A terminal RSS reader written in Go. Keyboard-driven, no configuration required.'
repo = 'https://github.com/niklas/goread'
live = ''
tags = ['go', 'cli', 'rss']
status = 'wip'
+++

A small command-line RSS/Atom feed reader. Point it at a feed URL (or a list of them) and read articles in the terminal without leaving the keyboard.

## Features

- Vim-style keybindings
- Stores read/unread state locally
- Renders HTML to readable plain text
- Single binary, no dependencies

## Status

Work in progress. Basic feed reading works; I'm adding OPML import and a proper TUI before calling it done.
