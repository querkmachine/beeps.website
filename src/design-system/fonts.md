---
preTitle: Styles
title: Fonts
---

{% from "src/_includes/example.njk" import kimExample %}

[Hubot Sans](https://github.com/github/hubot-sans) is used for the majority of text. As a variable font, it’s available in all weights from heavy (900) to light (200), can be compressed and expanded from 75% to 125%, and has real italics, allowing for a wide variety of expression.

{{ kimExample("typography-font", "Font weights and widths") }}

Code samples are set in the device’s default monospace font.

The typefaces are made available to CSS using the `font` custom properties. Although the same typeface is used for headings and body text, they're separated in code to accommodate future changes.

```css
h1 {
  font-family: var(--font-heading);
}

p {
  font-family: var(--font-body);
}

code {
  font-family: var(--font-code);
}
```
