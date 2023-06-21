---
title: Some untamed rambling about how this website is built
date: 2023-06-21
tags: [design, web development]
---

Hi, I'm beeps. I make websites for a living.

As a consequence of my career-based hubris, I have been granted the Sisyphean curse of never being entirely satisfied with how my personal website looks or works.

Frequent visitors to this website will probably have noticed that the fonts, colours, structure, layout and graphics have had a tendency to change or shift around every few months. [I will never be satisfied.](https://www.youtube.com/watch?v=asfLNbrSPv4)

## A little bit crap: on purpose

The French philosopher Montesquieu once wrote that "the best is the mortal enemy of the good".

{% character variant="point-up" %}
Technically he wrote <span lang="fr">"Le mieux est le mortel ennemi du bien"</span> because he was French and wrote it in French.
{% endcharacter %}

In the modern tech industry, this aphorism is usually translated into "perfect is the enemy of done"—it's better for something to be finished than for it to be perfect.

Having started and abandoned a dozen different revisions over the years, this quote became my philosophy for how I treat this website. If it's online, if it works, if folks can read it, that's good enough. Everything can be put off, added to, or improved upon later.

For years, this website was nothing but a holding page with some introductory text and links to my social media. Only by embracing being a bit shit did I overcome this profane proclivity for perfectionism and actually produce a practical publication.

Nothing on this site is the best, or the highest effort, or even necessarily what I would want it to be in an ideal universe—but it's online, and that's what matters.

## No models, no masters

There have been some wonderful developments in web layouts over the last few years. Flexbox is lovely. The CSS Grids are awesome. Subgrid is on the precipice of being available in all major browsers. Collectively they've made once impossibly complex, magazine-like layouts incredibly simple to produce.

I don't use them.

Instead, I use a four-column, floats-like, technically-flexbox grid system. It's simple, and it's maybe even a bit 'old school', but it works predictably and I can spin up entirely new layouts and pages with it, without writing a single line of CSS.

Why? Because Flexbox and Grid are too... prescriptive, I feel.

If every `<div>` has an assigned slot in a grid layout, then I can't spontaneously decide to just move where the `<div>` is. I'd have to go into the CSS and change `grid-template-areas` to move it there, which could have knock-on effects on other pages. And then I'd have to make sure it still makes sense at different breakpoints, tweak those, etcetera, etcetera and so forth.

Basically, if you're not doing those impossibly complex, magazine-like layouts, Grid can be kind of a faff actually.

Flexbox and the `order` property introduce some of the same issues, though to a much smaller degree. I do use flexbox in quite a few places, but never with `order`.

That detachment of layout from authored CSS, I believe, has been _key_ in the relative longevity of this iteration of my website. The ability to change something on the fly, anywhere, without fear of breaking something else, is really damn useful.

There is an element of accessibility here too. With CSS Grid and Flexbox it's really easy for content to stop appearing in a [meaningful sequence](https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html) and have an unpredictable [focus order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html). Both of those are big no-nos, and by avoiding those layout systems, I avoid accidentally falling foul of those <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> criteria.

## A couple of colours

For many of the same reasons as the grid, this site uses a very limited palette of colours. If you're using the light theme you get purple and green, if you're on the dark you get yellow and orange.

The actual usages of the colours are also quite limited: purple and yellow are used for nearly anything that isn't plain text, whilst green and orange are used only for accents that demand a subtler touch.

This creates a site that is almost monochrome in appearance, dominated by only one primary colour outside of the requisite (off) black and white. This makes it simple to ensure that things stay [nice and contrast-y](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html), and adds an almost unintentional sense of class to proceedings. It's easy to go overboard with colours and make something that looks tacky and mismatched—it's a lot harder to do that if you only ever have two options.

More recently I've started using [display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/) for the yellow, to really make it nice on compatible displays. I've also done [some experimentation with new themes](https://chitter.xyz/@batbeeps/110396358903108275) that I ended up shelving as it felt a bit much for what is otherwise a very simple website.

## Some flip-flopping on fonts

I like fonts. Typographic design is one of many (admittedly, many) unexercised passions. I have years of accumulated theoretical knowledge about the history of typographic design and the technical development of typefaces, and I have never once cracked open a piece of font editing software.

{% character variant="happy" %}
I'm really good at telling Arial and Helvetica apart on sight, at least!
{% endcharacter %}

This has manifested as being really, really unsure of what fonts to use on this website. Originally it was [Space Mono](https://fonts.google.com/specimen/Space+Mono) for headings and the system sans-serif for body copy. Then it became Space Mono and [Space Grotesk](https://floriankarsten.github.io/space-grotesk/). Then it was [IBM Plex](https://www.ibm.com/plex/). Then it was Space Grotesk again but without Mono.

I love the looks of Space Mono and Space Grotesk. They're geometric and angular, befitting the sorta spacey, sorta sci-fi, sorta robotic look I'm going for. They have fun letter forms that are both distinct without being totally unsuitable for large blocks of body copy, like the uppercase M, the lowercase g, and the number 1.

But, despite being fonts supposedly intended to be the same superfamily, I hate how Space Mono and Space Grotesk work together. Each one was constructed by different foundries, with different priorities over what to develop. Grotesk is a variable font, Mono is not. Mono has true italics, Grotesk does not. Grotesk has five weights, Mono has two.

This disconnect is utterly maddening to me and is why (as of writing) pretty much everything but code is set in Grotesk. I still _hate_ that there are no true italics, [I can only hope it happens someday](https://github.com/floriankarsten/space-grotesk/issues/35).

I'm basically constantly flopping between wanting to use a typeface that's more feature-rich, wanting to use a typeface that's more performant, and just really, really liking this one. It's an ongoing saga.

## Pretty-printing for posterity

Do me a favour: right-click on this page, hit "View Page Source" and have a look around for a moment.

Now do the same thing on something like the BBC News homepage.

My code is _so_ pretty by comparison, right?

This isn't a brag about how awesome I am at writing code compared to those total scrubs at the BBC, not at all, my code is pretty because I run it through Prettier after it has been compiled. Yes, after.

This totally unnecessary build step is because I first learned to write HTML and CSS by reading and copying the code of other websites. In this world of obfuscated, minified, HTML-in-JS code, that practice is increasingly difficult, and I want to make it possible for folks to just _read the damn code_.

I'm under no impression that someone first coming into web development is actually viewing the source of my website, it's not like I'm doing anything particularly fancy anywhere (except maybe the [404 page animation]({{ '/404/' | url }})), but if I'm gonna have a stance on this I should at least practice what I preach.

## A jot of JavaScript

As little as possible without being unreadable. As unintrusive as possible without being inaccessible.

I splurged a little with some canvas code to dynamically generate the spots on the homepage and 404 page, but that's entirely unnecessary for the site to work and its loading and execution is deferred to all heck. I don't want that to slow the site down by any amount for anyone if I can help it.

I'm really not a fan of unnecessary JS, _especially_ on small personal websites like this one.

## Questions?

I've almost certainly not covered everything on here, it's an untamed ramble after all (and I didn't even go into Eleventy or static-site generators), but if you have any other questions about the how or the why of this website, [drop me a toot](https://chitter.xyz/@batbeeps) and I'll be happy to respond!
