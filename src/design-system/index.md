---
title: Little Beepo Design System
metadata:
  description: A little looksee at how this website is itself built.
cssComponents:
  - callout
  - figure
# redirect_from:
#   - /brand/
#   - /test/
---

{% figure float="right", caption="Little Beepo." %}
{% image "/images/little-beepo.jpg", "Photograph of a mostly white-furred kitten with some grey patches on the top of its head. It looks very upset, almost as if it's been crying." %}
{% endfigure %}

The **Little Beepo Design System** (LBDS) is the absolutely arbitrary, first-thing-I-thought-of name for this website's design system. It's named after [Little Beepo, whose misery is increasing](https://cat-diagnosis.tumblr.com/678373227223990272/little-beepos-misery-is-increasing-little).

The design system replaces the former brand and component test pages, whilst hopefully giving some useful insight into how things are constructed and why they are the way they are.

{% callout %}
Code examples aren't displayed below examples just yet, so bust out your browser dev tools or view source to see how they're constructed.
{% endcallout %}

## The sections

**Styles** are basically the settings, the ground rules upon which all other things are built. These are all exposed using CSS custom properties, because I'm nice like that.

**Objects** are applications of styles that appear frequently throughout the website's content. Think headings, links, and the like.

**Components** are more complex, usually assemblages of several styles and objects with a dash of bespoke styling and functionality.

In the context of this website, components are special because they only get loaded into pages that use them, while styles and objects are loaded for every page. I do that to cut down on how much code needs to be downloaded and parsed by your machine. You're welcome. :3
