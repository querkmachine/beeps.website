---
layout: brand.njk
title: beeps' brand
updated: 2025-09-24
metadata:
  description: The style guide for my personal projects, including this website.
cssComponents:
  - table
  - blockquote
  - code
---

{% set colourAssignments = [
  { name: "Text", dark: "#ffffff", light: "#4b4b4b" },
  { name: "Supporting text", dark: "#f5f5f5", light: "#6d6d6e" },
  { name: "Accent text and links", dark: "#0ff10f", light: "#578057" },
  { name: "Hovered and visited links", dark: "#0bc148", light: "#6c9679" },
  { name: "Canvas", dark: "#252134", light: "#f9f9f9" },
  { name: "Surface", dark: "#302750", light: "#ffffff" },
  { name: "Page furniture", dark: "#7c56fc", light: "#786999" }
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

- Be unaplogetically square and blocky. There aren't many circles or curves here.
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

[Hubot Sans](https://github.com/github/hubot-sans) is used for the majority of text.

As a variable font, it's available in all weights from heavy (900) to light (200), can be compressed and expanded from 75% to 125%, and has real italics, allowing for a wide variety of expression.

> <div style="font-family:'Hubot Sans'"><span style="font-weight:900;font-stretch:125%">We choose to go to the Moon. </span> <span style="font-weight:600">We choose to go to the Moon&hellip; </span><span style="font-weight:500">We choose to go to the Moon in this decade and do the other things, not because they are easy, but <em>because they are hard</em>; </span><span style="font-weight:400;font-stretch:90%;">because that goal will serve to organize and measure the best of our energies and skills,</span> <span style="font-weight:300;font-stretch:75%;">because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one we intend to win, and the others, too.</span></div>

Code samples are set in the device's default monospace font.

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
