---
layout: brand.njk
title: beeps' brand
updated: 2025-04-19
metadata:
  description: The style guide for my personal projects, including this website.
cssComponents:
  - table
  - blockquote
  - code
---

{% set colourAssignments = [
  { name: "Text", dark: "#ffffff", light: "#334139" },
  { name: "Supporting text", dark: "#d4d4d7", light: "#586b60" },
  { name: "Accent text and links", dark: "#00fa17", light: "#12803b" },
  { name: "Hovered and visited links", dark: "#12c873", light: "#2baf5d" },
  { name: "Canvas", dark: "#2a2536", light: "#ffffff" },
  { name: "Surface", dark: "#3d364f", light: "#f4f3f7" },
  { name: "Page furniture", dark: "#786999", light: "#786999" }
] %}

<style>
:root {
  {%- for n, c in palette %}
  --brand-color-{{ n }}: {{ c }};
  {%- endfor %}
}
</style>

{% macro _swatch(hex) %}
<span class="pageSwatch">
<span class="pageSwatch_preview" style="background-color: {{ hex }};"></span>
<code class="kimCode">{{ hex }}</code>
</span>
{% endmacro %}

A lot of famous individuals are well known for [always wearing the same clothes](https://edition.cnn.com/2015/10/09/world/gallery/decision-fatigue-same-clothes/index.html). Usually they credit this to reducing "decision fatigue"—not having to choose how to dress every day leaves time to mull over the more important decisions.

I don't wear exactly the same clothes every day, but when it comes to building random pages and side projects, I usually spend more time thinking about how it looks than how it works. Consequentially, since late-2021, I've tried to cut down on decision fatigue by making my personal projects follow the same set of basic design rules.

---

## General principles

- Be square and blocky. There aren't many circles or curves here.
- Follow good accessibility practices. Use contrasting colours, write good copy.

## Colours

I maintain a pretty limited palette of base colours. Shades and tints of each are allowed.

Always aim to achieve at least a 4.5:1 contrast ratio between text and background colours, in accordance with [the WCAG Level AA criterion](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).

<table class="kimTable">
  <thead class="kimTable_head">
    <tr class="kimTable_row">
      <th class="kimTable_header" scope="col">Usage</th>
      <th class="kimTable_header" scope="col">Dark</th>
      <th class="kimTable_header" scope="col">Light</th>
    </tr>
  </thead>
  <tbody class="kimTable_body">
    {%- for r in colourAssignments %}
    <tr class="kimTable_row">
      <th class="kimTable_header" scope="row">{{ r.name }}</th>
      <td class="kimTable_cell">{{ _swatch(r.dark, palette[r.dark]) }}</td>
      <td class="kimTable_cell">{{ _swatch(r.light, palette[r.light]) }}</td>
    </tr>
    {%- endfor %}
  </tbody>
</table>

## Typography

[Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) is used for the majority of text. As a variable font, it's available in all widths from bold (700) to thin (300).

> <div style="font-family:'Space Grotesk'"><span style="font-weight:700">We choose to go to the Moon. </span> <span style="font-weight:600">We choose to go to the Moon... </span><span style="font-weight:500">We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard; </span><span style="font-weight:400">because that goal will serve to organize and measure the best of our energies and skills,</span> <span style="font-weight:300">because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one we intend to win, and the others, too.</span></div>

[Space Mono](https://fonts.google.com/specimen/Space+Mono) is used for code snippets and as a stylistic alternative for small amounts of text. It's used in bold (700) and regular (400) weights.

## Iconography

### Robat icon

The logo of the website (and pretty much just this website). This has been a symbol I've used for longer than you'd expect, [since around 2010]({{ '/blog/2023-07-25-20-years/#numbers' | url }}).

<div class="pageLogo">
  <img src="{{ '/assets/images/icons/favicon.svg' | url }}" alt="Silhouette of a stylised bat's head, within which the cutout of a mechanical gear is visible.">
</div>

### Utility icons

Some custom made icons for custom made uses.

{%- set icons = [
  "arrow-n",
  "arrow-ne",
  "arrow-e",
  "arrow-se",
  "arrow-s",
  "arrow-sw",
  "arrow-w",
  "arrow-nw",
  "menu",
  "rss"
] -%}

<div class="pageIconGrid">
{%- for i in icons -%}<span>{% include "./assets/icons/" + i + ".svg" %}</span>{% endfor -%}
</div>
