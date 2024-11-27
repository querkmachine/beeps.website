---
title: "Frontend Forum #3: Frontend tooling"
date: 2024-08-22
tags: [web development, frontend forum]
metadata:
  description: My thoughts on the kind of tooling needed to build websites in 2024.
interactions:
  host: chitter.xyz
  username: batbeeps
  id: "113024659877893417"
cssComponents:
  - blockquote
  - character
---

[Ninji on Mastodon](https://wuffs.org/@Ninji) asked:

> Tooling is one that immediately comes to mind. I don't do front-end stuff often, and there's an overwhelming amount of choices.
>
> Webpack? Importing CSS/JS from random CDNs? Other packers? When are these appropriate (or not appropriate)? Should I be using the same tooling for a single-file proof-of-concept as I do for a big behemoth project?

I won't lie, there are a lot of choices, and which ones are currently in vogue seems to change every few months; such is the _fast-paced, exciting world_ of frontend web development.

The nice news is that I think the use cases for tooling like this are largely confined to those big, behemoth projects.

I don't think there's much value in using an abstraction of HTML (such as web components, JSX, or some other means) unless you're designing and building component-heavy systems, be they apps or sprawling, content-heavy websites.

JavaScript bundlers like [Webpack] and [Rollup] are again more suited to complex apps or websites that probably have large amounts of JS, where having multiple entry files rather than a giant list of scripts (or a single, massive bundle) is going to have notable performance benefits.
`
{% character character="ash", variant="thinking" %}
I probably have some particular biases here. I am a strong proponent of the separation of concerns and believe that HTML, CSS and JavaScript should exist as separate and distinct layers.

Many component-centric frameworks usually merge all of these together into a single component file, allowing you to 'tree shake' bundled files to include only the specific components needed for a particular area. If you know how to do that, though, you're probably not reading this.
{% endcharacter %}

Bundlers are also useful for libraries and tools intended for others, where you might want to package and distribute the same script in multiple formats (ESM, CommonJS, UMD, etc.), but you can usually just get away with only shipping ESM for modern websites.

To answer the question then: I don't think you need the same tooling for small sites versus large. In fact, for small sites, you probably don't need any tooling at all.

## Well, actually... task runners

Task runners, such as [Gulp](https://gulpjs.com) and [Grunt](https://gruntjs.com/), I treat a little differently. Alone they don't really do much of anything, but they provide an interface by which you can chain together a bunch of other build scripts in a logical and easier to understand way than something like Bash scripts or npm scripts.

I think using task runners is often sensible regardless of the size of the site in question. They are tools that you can make do what you want, rather than tools that directly do anything for you.

## Well, actually... polyfilling

Polyfilling is the process of 'filling in the cracks' of feature support in browsers. In my opinion, it's the only case where having some build tooling set up is useful regardless of the size of the site.

Polyfilling tools like [PostCSS](https://postcss.org/) (with [postcss-preset-env](https://preset-env.cssdb.org/)) and [Babel](https://babeljs.io/) allow you to use modern CSS and JS while still supporting older browsers, or to use cutting-edge features that aren't widely supported yet.

{% character character="ash", variant="alarmed" %}
Be aware, that polyfilling is commonly achieved through a liberal application of JavaScript, and having a many of them can really bloat the amount of code you're shipping. Be cautious.
{% endcharacter %}

You don't _need_ to polyfill things. If you're a small personal site where you can be reasonably confident that everyone is using a recent version of Chrome or Firefox, everything will probably work fine without polyfilling.

## CDNs

CDNs, or Content Delivery Networks, are centralised hosts for assets used across many seperate domain names. The general idea is that the using a CDN allows for these shared assets to be loaded once, and can then be aggressively cached for repeated use, rather than being loaded afresh for each domain.

Unfortunately—and tell me if you've heard this one before—this only really works as intended for large, content-heavy websites (or groups of websites) where the CDN is managed by the same organisation. For other cases, there tends to be quite a few drawbacks:

- The performance benefit of sharing assets only applies if your users are visiting lots of different websites that are using the same files from the same CDN, which is rarely actually the case.
- CDNs can complicate dependency management, especially if it's one that updates files to the latest versions in place. (Not common, but it does happen.)
- Public CDNs are an increasingly common vector for man-in-the-middle attacks.
- Over time, a CDN can shut down or stop hosting the assets you're relying upon, breaking your website without warning.

There are times when you have little choice (you can't easily download all of Google Maps to your server, for example), but I've personally stopped using CDNs for personal projects after being burned on more than one occassion.

For short-term, low-stakes experiments, feel free to use public CDNs though, I don't think anyone cares **too** much about that.
