---
title: The curse of subpixel rounding
tags: [web development]
metadata:
  description: An annoying and invisible piece of how your browser renders things.
cssComponents:
  - code
  - callout
---

Pixels! Everyone knows pixels! They're the little squares that make up screens, typically themselves made up of one red, one green, and one blue subpixels that combine in different intensities to create a visible spectrum of colour.

And that's that. You can write `border-top-width: 1px solid red` in your CSS to light up a single row of red subpixels and job's a good-un.

Right? Right?!

{% callout %}
There's probably already half a dozen technical innacuracies in that opening sentence.

This blog post generalises a lot in trying to present something complicated and invisible in a (hopefully) easy to understand way, and purely within the focus of how this works in a web context.
{% endcallout %}

## Screen resolution fucks everything up

So, that's only true if you have a one-to-one relationship between the pixels in the screen (display pixels)

## Display scaling fucks everything up

- 125% UI scaling
- 90% scaling

## Browsers fuck everything up

- Rounding doesn't always mean rounding up

## Users fuck everything up

- Zooming
