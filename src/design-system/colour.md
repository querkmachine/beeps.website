---
preTitle: Styles
title: Colour
cssComponents:
  - table
  - code
---

{% set colourAssignments = [
  { name: "Text (`text`)", dark: "#ffffff", light: "#4b4b4b" },
  { name: "Supporting text (`text-subtle`)", dark: "#f5f5f5", light: "#6d6d6e" },
  { name: "Accentuated text (`text-accent`)", dark: "#0ff10f", light: "#578057" },
  { name: "Links (`link`)", dark: "#0ff10f", light: "#578057" },
  { name: "Hovered links (`link-hover`)", dark: "#0bc148", light: "#6c9679" },
  { name: "Visited links (`link-visited`)", dark: "#0bc148", light: "#6c9679" },
  { name: "Furniture (`furniture`)", dark: "#7c56fc", light: "#786999" },
  { name: "Highlighted background (`surface`)", dark: "#302750", light: "#ffffff" },
  { name: "Page background (`canvas`)", dark: "#252134", light: "#f9f9f9" }
] %}

{% set focusColourAssignments = [
  { name: "Focused text and borders (`focus-text`)", all: "#000000" },
  { name: "Focused background (`focus-background`)", all: "#ffcc00" }
] %}

{% macro _swatch(hex) %}
<span class="pageSwatch">
<span class="pageSwatch_preview" style="background-color: {{ hex }};"></span>
<code class="kimCode">{{ hex }}</code>
</span>
{% endmacro %}

This website uses an intentionally rather limited palette. Every colour is mapped to a specific purpose that informs its use.

Colours in code are accessed using the `color` custom properties and the colour's keyword.

```css
.an-link {
  color: var(--color-link);
}

.an-link:visited {
  color: var(--color-link-visited);
}

.an-link:hover {
  color: var(--color-link-hover);
}
```

Many of these colours are not hardcoded values, but instead calculated from a few base colours using the `color-mix` CSS function.

<table class="kimTable">
  <thead class="kimTable_head">
    <tr class="kimTable_row">
      <th class="kimTable_header" scope="col">Usage</th>
      <th class="kimTable_header" scope="col">Dark theme</th>
      <th class="kimTable_header" scope="col">Light theme</th>
    </tr>
  </thead>
  <tbody class="kimTable_body">
    {%- for r in colourAssignments %}
    <tr class="kimTable_row">
      <th class="kimTable_header" scope="row">{{ r.name | markdownInline | safe }}</th>
      <td class="kimTable_cell">{{ _swatch(r.dark) }}</td>
      <td class="kimTable_cell">{{ _swatch(r.light) }}</td>
    </tr>
    {%- endfor %}
  </tbody>
</table>

There are a few 'raw' colours exposed using `c` custom properties, but I avoid using these outside of the colour mixing code.

## Focus colours

Focus state colours are consistent across all themes. They're always used in conjunction with one another, ensuring that appropriate contrast is given against any background colour.

<table class="kimTable">
  <thead class="kimTable_head">
    <tr class="kimTable_row">
      <th class="kimTable_header" scope="col">Usage</th>
      <th class="kimTable_header" scope="col">Colour</th>
    </tr>
  </thead>
  <tbody class="kimTable_body">
    {%- for r in focusColourAssignments %}
    <tr class="kimTable_row">
      <th class="kimTable_header" scope="row">{{ r.name | markdownInline | safe }}</th>
      <td class="kimTable_cell">{{ _swatch(r.all) }}</td>
    </tr>
    {%- endfor %}
  </tbody>
</table>

## Syntax highlighting colours

I can't be bothered going into these, but they're all fixed hues that get their saturation and lightness altered depending on whether it's the dark or light theme.

[Look at the code on GitHub](https://github.com/querkmachine/beeps.website/blob/main/src/assets/components/code.scss) and you can probably work it out.

## Accessiblity

Check on the [dark theme's contrast](https://colors.beeps.gay/?colors=FFF,F5F5F5,0FF10F,0BC148,7C56FC,302750,252134) and [light theme's contrast](https://colors.beeps.gay/?colors=4B4B4B,6D6D6E,578057,6C9679,786999,FFFFFF,F9F9F9) if you want.

All text and links colours should have a minimum of 4.5:1 contrast ratio with both the surface and canvas colours. Furniture should have a minimum of 3:1 contrast ratio with surface and canvas colours.

At time of writing, not all of these are the case. Sigh. Colours are hard. 😔

{% css %}
.pageSwatch {
display: inline-flex;
align-items: center;
gap: .5rem;
}

.pageSwatch_preview {
width: 1.75rem;
height: 1.75rem;
border: 1px solid currentcolor;
forced-color-adjust: none;
}
{% endcss %}
