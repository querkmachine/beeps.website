---
title: "Frontend Forum #: Catching up to 2024"
date: 9999-01-01
tags: [web development, frontend forum]
---

[Kyresti on Cohost](https://cohost.org/Kyresti) asked:

> Say you're coming across someone (like me), who knew how to make a website with HTML 4.0 when 4.0 was still new, Angelfire, and nothing else. Later brushed on some basic concepts like FTP, servers and hosting, and the existence of CSS and javascript (albeit having not learned or practiced either). Talking table-sorcery, bright garish colors, midi music and visitor counters. The origin of what a lot of neocities culture tries to revisit.
>
> How differently do you do it in 2024?

[J. Henry Waugh on the fediverse](https://chaos.social/@jhwgh1968) suggested:

> "Frameworkless" Web 2.0
>
> Think static site, but with small dynamic affordances. E.g. instead of a Web 1.0 form submission, show a spinner until the POST is done then print "Sent!"
>
> How to do that in modern browsers (e.g. Promises) is something everyone has their own way to do
>
> [...]
>
> The reason everyone builds frameworks for everything is partly features, but also seems that if you want to do it in a way that's compatible with all browsers (although that seems to be falling off, alas...) you have to write a bunch of polyfills and boilerplate
>
> jQuery is the least bad thing I've used, and it gets a ton of "this is stupid" and "it's legacy crap" comments online bc it's not a full-featured framework

---

I've bundled these two together because I've interpreted them both as being very "how do you do things in 2024" style questions. Let me know if I've missed the mark there.

Frontend development is somewhat notoriously a fast moving field.

Unlike many software programming languages, which usually only release a major update every year or few years, frontend technologies are all living standards made up of multiple 'modules'.

Modules pass through the standards process at their own pace and browser vendors can choose to implement them at any time during that process. That means new stuff is being added to both specifications and browsers all the time. It can be very exciting if you like to play with shiny new things, but keeping on top of it all is basically a full time job in itself.

So, what's changed in the last ten to fifteen years?

## HTML has gone semantic

As mentioned in [the first entry of this series]({{ '/blog/2024-04-29-frontend-forum-1-the-basics/' | url }}), `<font>` tags are gone and `bgcolor` attributes are out. The main focus of HTML these days is in semantically describing content.

To this end, a lot of new sectioning elements were introduced. These exist to break up the page into major landmarks, which help content parsers like search engines and some assistive technologies to better understand the page.

- `<header>` for a page's header (or the header for an `<article>` if inside one of those).
- `<footer>` for a page's content information (or the metadata for an `<article>`) and other footer-y stuff.
- `<main>` for the main content area of a page.
- `<nav>` for any navigational elements, including lists of links, breadcrumbs and pagination.
- `<article>` for a unit of standalone content of the page.
- `<section>` for... well, a section of something.
- `<aside>` for content that is complementary to, but tangential to the other content.
- `<search>` for wrapping search interfaces, such as forms and result lists alike.

For example, a 'reader mode' feature in a browser can assume that if an `<article>` tag is present, that probably contains all of the primary content it needs to concentrate on.

Alternatively, the user of a screen reader might have keyboard shortcuts to jump directly between `<nav>` and `<main>` tags, skipping repeated elements like headers.

## HTML can do more by itself (kinda)

HTML also started taking on some behavioural functions that would have previously have been accomplished by JavaScript.

- The `<details>` and `<summary>` elements can be used to create toggleable content areas.
- `<input type="date">` provides a calendar interface for selecting dates.
- `<datalist>` allows you to specify a list of autocomplete suggestions for text inputs.
- The `<dialog>` element provides a means of creating modals that prevent interaction with the rest of the page.
- The `popover` and `popovertarget` attributes allows for the simple creation of popovers like tooltips.

This might seem like a blurring of the separation of concerns: the notion that HTML is principally about content and JavaScript is principally about behaviours. To a degree it is. The aim of bringing these things into HTML has been to try standardise common interaction patterns, so that everyone isn't implementing them differently (and in many cases, poorly).

Unfortunately, in many ways this has failed to come to fruition. Although all of the features I've just mentioned have been implemented by the majority of modern browsers, general consensus is that almost none of them have actually been implemented _that_ well, with a whole raft of known issues regarding accessibility and customisation.

That doesn't mean they cannot be used, but they need to be used with care, and alternatives considered where the detriment to users is too great.

## CSS is (almost) a programming language now

CSS has gotten an incredible number of new features over the last decade or so. Even providing a bullet point list of everything that's new would need an entire blog post of its own, so I'm going to try and keep to the really big hitters.

[Variables? We got 'em.](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) They can be set globally on `:root` and overridden via the cascade when needed.

```css
:root {
  --status-color: gray;
  --status-text-color: white;
}

.status {
  border-color: var(--status-color);
  color: var(--status-text-color);
  background-color: var(--status-color);
}

.status.error {
  --status-color: red;
}

.status.warning {
  --status-color: yellow;
  --status-text-color: black;
}

.status.success {
  --status-color: green;
}
```

[Demo of CSS variables in use.](https://jsfiddle.net/querkmachine/mwjhs5z9/)

There are a whole bunch of new [math functions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions/Using_CSS_math_functions) included, with more being added.

These come in particularly handy with many of the new unit types that have been added. Most common of these are viewport units, which are individually equal to 1% of the browser window's width or height.

Of all the math functions, `calc` is the one you're likely to use the most.

Unlike CSS preprocessors or doing the maths with your fingers, `calc` is evaluated at render time, meaning it can know things that you can't know ahead of time, such as the root font size or the width of the browser window, and combine units that are otherwise unintuitive to work out manually.

```css
:root {
  /* Find some non-convoluted example for calc here */
}

.splash {
  height: clamp(300px, 80vh, 600px);
}
```

In this example, we're using another math function, `clamp`, to have the `div` take up 80% of the browser window's height, but never to shrink shorter than 300 pixels or grow taller than 600 pixels, even if the browser window is resized larger or smaller than those limits.

## CSS: Container queries

## CSS: Nesting

## CSS: Logical properties?

## JS: `const`, `let`, arrow functions, template literals, default function parameters, oh my

## JS: Almost everything from jQuery is in vanilla JS now

## JS: Promises and `fetch`, the modern way to AJAX

## JS: Classes and modules
