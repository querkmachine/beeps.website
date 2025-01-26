---
title: Renovating in the open
date: 2025-01-11
updated: 2025-01-26
tags: [meta, web development]
metadata:
  description: This website's getting a little renovation work.
interactions:
  host: social.beeps.gay
  username: beeps
  id: "113809632629456392"
cssComponents:
  - code
---

Just a programming note that I'm making some big ol' changes to this website.

Not that interesting in itself, but I'm doing it "in the open", which is the modern web developer's hip new way of putting an under construction GIF on the homepage.

I'm not planning on any major overhauls, but enough stuff is going to be changed that it's likely to be janky for a little bit. Some stuff will get added, some stuff will get ripped out. I also can't guarantee that everything will be as accessible as I'd normally like during this time.

I'm going to be updating this blog post whenever a new thing has been changed, so keep your peepers on it!

## Changelog

### 2025-01-11

The first "open" release. Notable changes include:

- Added **_more colours!_**
- Added a site-wide navigation menu.
- Added iconography in various places.
- Added a little colour bar beneath page titles because IDK.
- Redesigned how the site name/logo looks.
- Redesigned the site's footer.
- Redesigned links.
- Redesigned various in-page components, including callouts, character callouts, comments, and social media embeds.
- Removed the manual colour scheme switch. Sorry to the fans of that feature; it's just too much annoying code for too minor functionality. I think I have a nicer way to reinstate it with much less code, but it'll take a little while.
- Removed collapsible tables of contents. Same issue: too much code, too little functionality.

### 2025-01-12

- Added some (hopefully) subtle page transitions on supporting browsers.
- Added some scroll padding so that when you jump to a section of a page, it doesn't butt right up against the top of the window.
- Added hover styles to logo and menu button.
- Redesigned the footer area of each page to mirror the header.
- Changed how some of the `color-mix` colours, such as link hover/visited colours and 'surface' colours, were being calculated.
- Changed structure of the main and footer navigations.
- Changed keyboard focus styles on webring names.
- Changed the blog archive page so that the introductory content is two-thirds width.
- Changed XL headings so that the colour bar appears above the text instead of below it. Also, they're green now.
- Changed the border and added background colour to the blogs section of the homepage.
- Made minor changes to the 404 page text formatting.
- Fixed homepage 'spots' not changing colour along with the wider colour scheme.
- Fixed the menu button getting misaligned on narrow screens.

### 2025-01-17

- Reworked how dark and light mode colours are defined. This new method isn't as backwards compatible, but makes it possible to force a specific mode by changing the `color-scheme` CSS property.
- Fixed OpenGraph images generating with the wrong colours.

### 2025-01-22

- Fixed various broken styles on Ash's reference page.
- Adjusted the breakpoints for when things in the masthead change.

### 2025-01-23

- Fixed links with icons being misaligned with their surrounding text.
- Added a stylesheet to the RSS feed, with information about what it is, so users aren't faced with a mess of XML if they happen to click on it.

### 2025-01-24

- Capped the maximum height of tables of contents.

### 2025-01-25

- Tweaked the prior changes to tables of contents.
- Added dashes to subsections in tables of contents.
- Changed styles of dates on blog post listings.

### 2025-01-26

- Added a new link callout component.
- Added a 'fancy' variant of the horizontal rule
- Changed the design of arrow icons.
- Fixed hover and focus states not being applied correctly to jump link icons.
