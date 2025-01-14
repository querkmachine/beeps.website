---
layout: brand.njk
title: beeps' brand
updated: 2025-01-14
metadata:
  description: The style guide for my personal projects, including this website.
cssComponents:
  - table
  - blockquote
  - code
  - callout
---

{% set palette = {
  white: "#ffffff",
  "off-black": "#334139",
  "purple": "#786999",
  "dark-purple": "#2a2536",
  "pale-purple": "#3d364f",
  "green": "#00fa17",
  "green-alt": "#12c873",
  "dark-green": "#12803b",
  "dark-green-alt": "#2baf5d",
  "pale-green": "#f2f3f2",
  "light-grey": "#d4d4d7",
  "dark-grey": "#586b60"
} %}

{% set colourAssignments = [
  { name: "Text", dark: "white", light: "off-black" },
  { name: "Supporting text", dark: "light-grey", light: "dark-grey" },
  { name: "Accent text and links", dark: "green", light: "dark-green" },
  { name: "Hovered and visited links", dark: "green-alt", light: "dark-green-alt" },
  { name: "Canvas", dark: "dark-purple", light: "white" },
  { name: "Surface", dark: "pale-purple", light: "pale-green" },
  { name: "Page furniture", dark: "purple", light: "purple" }
] %}

<style>
:root {
  {%- for n, c in palette %}
  --brand-color-{{ n }}: {{ c }};
  {%- endfor %}
}
</style>

{% macro _swatch(mainColorName, mainColorHex) %}
<span class="page-swatch">
<span class="page-swatch__preview" style="background-color: var(--brand-color-{{ mainColorName }});"></span>
<code class="kimCode">{{ mainColorHex }}</code>
</span>
{% endmacro %}

{% callout %}
This website is currently being [redesigned in the open]({{ '/blog/2025-01-11-renovating-in-the-open' | url }}). The information on this page is probably going to be out of date until things have settled down.
{% endcallout %}

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

## Robat icon

This isn't used that much, but in places where a logo or icon is useful, there's an icon.

<div class="page-icon">
  <img src="{{ '/assets/images/icons/favicon.svg' | url }}" alt="Silhouette of a stylised bat's head, within which the cutout of a mechanical gear is visible.">
</div>
