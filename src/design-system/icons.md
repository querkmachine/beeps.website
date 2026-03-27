---
preTitle: Styles
title: Iconography
cssComponents:
  - table
---

Graphics used in various bits of the website.

## Robat icon

The logo of the website (and pretty much just this website). This has been a symbol I've used for longer than you'd expect, [since around 2010]({{ '/blog/2023-07-25-20-years/#numbers' | url }}).

<div class="pageLogo">
  <img src="{{ '/assets/images/icons/favicon.svg' | url }}" alt="Silhouette of a stylised bat's head, within which the cutout of a mechanical gear is visible.">
</div>

## Detailed icons

Detailed icons are used on the about page to illustrate each section.

These adapt their colours according to the current theme of the page via use of [named colours]({{ '/design-system/colour/' | url }}): `furniture` for borders, `surface` for backgrounds and `text-accent` for highlights.

Intended for use at 80&times;80 pixels.

{%- set bigIcons = {
  "ace": "Ace of spades",
  "id": "Identity card",
  "idic": "IDIC<br>(Infinite Diversity in Infinite Combinations)",
  "loudhailer": "Loudhailer",
  "nonhuman": "Nonhuman unity symbol",
  "paws": "Paw",
  "plural": "Ampersand",
  "trans": "Pride flag",
  "website": "Website"
} -%}

<table class="kimTable">
  <thead class="kimTable_head">
    <tr class="kimTable_row">
      <th class="kimTable_header pageBigIconColumn" scope="col">Icon</th>
      <th class="kimTable_header" scope="col">Name</th>
    </tr>
  </thead>
  <tbody class="kimTable_body">
    {%- for icon, name in bigIcons %}
    <tr class="kimTable_row">
      <td class="kimTable_cell">{% include "../assets/icons/" + icon + ".svg" %}</td>
      <th class="kimTable_header" scope="row">{{ name | safe }}</th>
    </tr>
    {%- endfor %}
  </tbody>
</table>

## Simple icons

Icons made for more generic uses.

These are all single colour and inherit the surrounding text colour. They're all intended to be used at 20&times;20 pixels.

{%- set icons = {
  "menu": "Hamburger menu",
  "rss": "RSS feed",
  "arrow-n": "N arrow",
  "arrow-ne": "NE arrow",
  "arrow-e": "E arrow",
  "arrow-se": "SE arrow",
  "arrow-s": "S arrow",
  "arrow-sw": "SW arrow",
  "arrow-w": "W arrow",
  "arrow-nw": "NW arrow"
} -%}

<table class="kimTable">
  <thead class="kimTable_head">
    <tr class="kimTable_row">
      <th class="kimTable_header pageIconColumn" scope="col">Icon</th>
      <th class="kimTable_header" scope="col">Name</th>
    </tr>
  </thead>
  <tbody class="kimTable_body">
    {%- for icon, name in icons %}
    <tr class="kimTable_row">
      <td class="kimTable_cell">{% include "../assets/icons/" + icon + ".svg" %}</td>
      <th class="kimTable_header" scope="row">{{ name }}</th>
    </tr>
    {%- endfor %}
  </tbody>
</table>

{% css %}
.pageLogo {
max-inline-size: 14em;
}
.pageIconColumn {
inline-size:20px;
}
.pageBigIconColumn {
inline-size:80px;
}
{% endcss %}
