---
layout: brand.njk
title: beeps' brand
metadata:
  description: Style guide for my personal projects, including this website.
---

{% set palette = {
  white: "#ffffff",
  "off-black": "#334139",
  "light-purple": "#786999",
  "light-green": "#97e697",
  "deep-purple": "#2a2536",
  "brilliant-green": "#00fa17"
} %}

{% set colourAssignments = [
  { name: "Text", dark: "white", light: "off-black" },
  { name: "Background", dark: "deep-purple", light: "white" },
  { name: "Primary", dark: "brilliant-green", light: "light-purple" },
  { name: "Accents requiring contrast", dark: "brilliant-green", light: "light-purple" },
  { name: "Accents not requiring contrast", dark: "light-purple", light: "light-green" }
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

A lot of famous individuals are well known for [always wearing the same clothes](https://edition.cnn.com/2015/10/09/world/gallery/decision-fatigue-same-clothes/index.html). Usually they credit this to reducing "decision fatigue"—not having to choose how to dress every day leaves time to mull over the more important decisions.

I don't wear exactly the same clothes every day, but when it comes to building random pages and side projects, I usually spend more time thinking about how it looks than how it works. Consequentially, since late-2021, I've tried to cut down on decision fatigue by making my personal projects follow the same set of basic design rules.

---

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

> <div style="font-family:'Space Mono'"><span style="font-weight:700">Many years ago the great British explorer George Mallory, who was to die on Mount Everest, was asked why did he want to climb it. He said, "Because it is there." </span><span style="font-weight:400">Well, space is there, and we're going to climb it, and the moon and the planets are there, and new hopes for knowledge and peace are there.</span></div>

## Robat icon

This isn't used a whole lot, but in places where a logo or icon is needed—and the space is either too small or a dabbing robot bat would be inappropriate—there's an icon.

<div style="max-width:14rem">
  <img src="{{ '/assets/images/icons/favicon.svg' | url }}" alt="Robot bat icon">
</div>
