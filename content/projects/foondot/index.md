+++
title = 'foondot'
date = 2026-03-31T00:00:00+00:00
draft = false
description = 'A simple dotfile manager and sync utility.'
repo = 'https://github.com/foonly/foondot'
live = ''
tags = ['go', 'cli', 'dotfiles']
status = 'active'
+++

Foondot is a utility that manages symlinks from a local repository, linking files and folders according to a configuration file. It also features a built-in sync command to automatically pull, commit, and push changes using Git.

I made this utility because even though dotfile managers are dime a dozen, I couldn't find one that quite fit my needs. I wanted something simple and minimal, with a focus on automation. I also wanted to learn Go, so I decided to build my own.

I was inspired by the excellent [Toml Bombadil](https://github.com/oknozor/toml-bombadil) that I used to manage my dotfiles, but I wanted something with more automation. Since Toml Bombadil uses templating to generate the symlinks, it doesn't have a way to automatically sync changes. Foondot, on the other hand, has a built-in sync command that can be run periodically to keep your dotfiles up to date.
