+++
title = 'bookmarks'
date = 2026-04-08T00:00:00+00:00
draft = false
description = 'A simple web app to manage your bookmarks.'
repo = 'https://github.com/foonly/bookmarks'
live = 'https://bookmarks.foonly.dev/'
tags = ['typescript', 'web', 'bookmarks']
status = 'active'
+++

This is a browser based bookmarks manager that allows you to store a list of bookmarks locally. It's made without the use of a framework, mostly to see what that's like. It also has quite few dependencies.

## Why a bookmarks manager?

I noticed that modern browsers are moving away from bookmarks, probably because people are used to search for things. Some things are however not easily searchable, or you just need them often, so I figured I would make a place to store bookmarks.

## What does it do?

It can manage a collection of bookmarks, stored locally on your browser. You can organize the bookmarks with tags and give short descriptions.

But storing bookmarks in just one browser is not super useful, so I also added a sync feature. I was thinking about the possibility of syncing data between devices without the need for creating another account, both as a convenience thing for the user and in order to not store any personal data as a provider. So I designed an accountless sync system, where you can create a sync code on one device and use it to sync the data on another device.

## How does the sync work?

The sync code consists of 3 parts: The ID, an encryption key, and a shared secret. On your first device it's randomly generated, but then the idea is that you copy the code to your other devices, and they will sync with each other.

### The ID

This part is not really a secret, even though it's not easily readable either. It's sent with every sync request, and identify you to the sync server. But those requests are protected with TLS, so they shouldn't be easily accessible.

### The encryption key

This part never leave your devices. It's used to encrypt your data with AES-GCM before sending it to the sync server, and decrypt it after you read it back.

### The shared secret

This is a bit of extra protection. It's sent to the server with your first sync request, but should then never be sent again, and there is no way to read it back from the server or ever change it. But every upload to the server is timestamped, and the timestamp plus a hash of you payload data is "signed" (HMAC-SHA256) with this secret, and this signature is checked on every request. This means that if someone would get access to your ID, they would not be able to upload any data to your account, because they would not be able to create a valid signature.

## What's next?

I will probably try to tweak the usability and look of the app, and maybe add some more features. If anyone is using it, and has any ideas for improvements or find any bugs, please open an [issue](https://github.com/foonly/bookmarks/issues) on Github.
