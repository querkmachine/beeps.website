---
title: "Frontend Forum #: Frontend tooling"
date: 9999-01-01
tags: [web development, frontend forum]
---

[Ninji on Mastodon](https://wuffs.org/@Ninji) asked:

> Tooling is one that immediately comes to mind. I don't do front-end stuff often, and there's an overwhelming amount of choices.
>
> Webpack? Importing CSS/JS from random CDNs? Other packers? When are these appropriate (or not appropriate)? Should I be using the same tooling for a single-file proof-of-concept as I do for a big behemoth project?

I won't lie, there are a lot of choices, and which ones are currently in vogue seems to change every few months, such is the fast-paced, exciting world of frontend web development.

The nice news is that I think the use cases for tooling like this are largely confined to those big, behemoth projects.

I don't think there's much value to using an abstraction of HTML (such as web components, JSX, or some other means) unless you're designing and building component-heavy systems, be they apps or sprawling, content-heavy websites.

Javascript bundlers like Webpack and Rollup are again more suited to complex apps or large websites that might have large amounts of JS, where having multiple entry files rather than a giant list of scripts (or a single, massive bundle) is going to have notable performance benefits.

{% character character="ash", variant="thinking" %}
I probably hsve some particular biases here. I am a strong proponent of the separation of concerns and that HTML, CSS and JavaScript should exist as separate and distinct layers.

Many component-centric frameworks usually bundle them together into a single unit, and being able to 'tree shake' to only include the components the page needs is very useful. If you know how to do that, though, you're probably not reading this.
{% endcharacter %}

Bundlers are also useful for libraries and tools intended for others, where you might want to package and distribute the same script in multiple formats (ESM, CommonJS, UMD, etc.), but you can usually just get away with only shipping ESM for modern websites.

## Well, actually... polyfilling

Polyfilling is the process of 'filling in the cracks' of feature support in browsers. In my opinion, it's the only case where having some build tooling set up is useful regardless of the size of the site.

Polyfilling tools like PostCSS (with postcss-preset-env) and Babel allow you to use modern CSS and JS whilst still supporting older browsers, or to use cutting-edge features that basically nothing supports yet.

{% character character="ash", variant="alarmed" %}
Be aware, that polyfilling is commonly achieved via a liberal application of JavaScript, and having a lot of them can really bloat how much code you're shipping. Be cautious.
{% endcharacter %}

You don't _need_ to polyfill things. If you're a small personal site where you can be reasonably confident that everyone is using a recent version of Chrome or Firefox, everything will probably work fine without polyfilling.

## CDNs

CDNs, or content delivery networks, are centralised hosts for and assets used across lots of seperate domain names. The general idea is that the using a CDN allows for these shared assets to be loaded once, and can then be aggressively cached on repeated use, rather than loaded anew for each domain.

Unfortunately—and tell me if you've heard this one before—this only really works as intended for large, content-heavy websites (or groups of websites) where the CDN is managed by the same organisation. For anything else, they tend to suck:

- The performance benefit of sharing assets only works if your users are visiting lots of different websites that are using the same files from the same CDN, which is rarely actually the case.
- CDNs can make dependency management more difficult, especially if it's one that updates files to the latest versions in place. (Not common, but it does happen.)
- Public CDNs are an increasingly common vector for man-in-the-middle attacks.
- Over time, a CDN can just shut down or stop hosting the assets you're using, breaking your website without warning.

There are times when you have little choice (you can't easily download all of Google Maps to your server, for example), but I've personally stopped using CDNs for personal projects after being burned on more than one occassion.

For random experiments you don't care about in the longer term, go right ahead.
