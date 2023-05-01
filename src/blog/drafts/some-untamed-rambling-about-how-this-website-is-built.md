---
title: Some untamed rambling about how this website is built
date: 9999-01-01
tags: [design, web development]
draft: true
---

Hi, I'm beeps. I make websites for a living.

As a consequence of my career-based hubris, I have been granted the Sisyphean curse of never being entirely satisfied with how my personal website looks or works.

Frequent visitors to this website will probably have noticed that the fonts, colours, structure, layout and graphics have had a tendency to change or shift around every few months. [I will never be satisfied.](https://www.youtube.com/watch?v=asfLNbrSPv4)

This constant desire for movement has led to some interesting decisions when it's come to how this site has been designed and built. I figured it might interest some of y'all.

## A little bit crap, on purpose

The French philosopher Montesquieu once wrote that "the best is the mortal enemy of the good".

{% character variant="point-up" %}
Technically he wrote <span lang="fr">"Le mieux est le mortel ennemi du bien"</span> because he was French and wrote it in French.
{% endcharacter %}

In the modern tech industry, this aphorism is usually translated into "perfect is the enemy of done"—it's better for something to be finished than for it to be perfect.

Having started and abandoned a dozen different revisions over the years, this quote became my philosophy for how I treat this website. If it's online, if it works, if folks can read it, that's good enough. Everything can be put off, or added to, or improved upon later.

That quote will probably be a recurring aspect through this post. Nothing on this site is the best, or the highest effort, or even necessarily what I would want it to be in an ideal universe—but it's online, and that's what matters.

## No grids, no masters

There have been some wonderful developments in web layouts over the last few years. Flexbox is lovely. The CSS Grids are awesome. Collectively they've made once impossibly complex, magazine-like layouts incredibly simple to produce.

I don't use them.

Instead, I use a four-column, floats-like, technically-flexbox grid system. It's simple, it's maybe even a bit 'old school', but it works predictably and I can spin up entirely new layouts and pages with it, without writing a single line of CSS.

Why? Because Flexbox and Grid are too... prescriptive, I feel.

If every `<div>` has an assigned slot in a grid layout, then I can't spontaneously decide to just move where the `<div>` is. I'd have to go into the CSS and change `grid-template-areas` to move it there, which could have knock-on effects on other pages. And then I'd have to make sure it still makes sense at different breakpoints, tweak those, etcetera and so forth.

Basically, if you're not doing those impossibly complex, magazine-like layouts, Grid can be kind of a faff actually.

Flexbox and the `order` property introduces some of the same issues, though to a much smaller degree. I do use flexbox in quite a few places, but never with `order`.

That detachment of layout from authored CSS, I believe, has been _key_ in the relative longevity of this iteration of my website. The ability to change something on the fly, anywhere, without fear of breaking something else, is really damn useful.

There is an element of accessibility here too. With CSS Grid and Flexbox it's really easy for content to stop appearing in a [meaningful sequence](https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html) and have an unpredictable [focus order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html). Both of those are big no-nos, and by avoiding those layout systems, I avoid accidentally falling foul of those <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> criteria.

## Flip-flopping on fonts

- I like fonts.
- I cannot decide what font to use on this website.
- I really like the look of Space Mono/Grotesk.
- I don't like how mismatched they are, feature wise.
- Grotesk doesn't even have real italics!
- They feel harder to read compared to more neutral fonts.
- But they feel so _me_.
- In the middle of a battle between preference and practicality.

## Pretty-printing code for future generations

Do me a favour. Right click on this page, hit "View Page Source" and have a look around for a moment.

Now do the same thing on something like the BBC News homepage.

My code is _so_ pretty by comparison, right?

This isn't a brag about how awesome I am at writing code compared to those total scrubs at the BBC, not at all, my code is pretty because I run it through Prettier after it has been compiled. Yes, after.

This totally unnecessary build step is because I first learned to write HTML and CSS by reading and copying the code of other websites. In this world of obfuscated, minified, HTML-in-JS code, that practice is increasingly difficult, and I want to make it possible for folks to just _read the damn code_.

I'm under no impression that someone first coming into web development is actually viewing the source of my website, it's not like I'm doing anything particularly fancy anywhere (except maybe the [404 page animation]({{ '/404/' | url }})), but if I'm gonna have a stance on this I should at least practice what I preach.

## Colours
