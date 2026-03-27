---
preTitle: Styles
title: Font sizes
---

{% from "src/_includes/example.njk" import kimExample %}

Like spacing, the actual size of type is calculated based on factors such as screen size, as calculated using [Utopia](https://utopia.fyi/).

They are accessed in CSS using the `size` properties, which range from -1 (the smallest) to 6 (the largest), with 0 being the default body font size.

```css
.huge {
  font-size: var(--size-6);
}

.smol {
  font-size: var(--size--1);
}

.normal {
  font-size: var(--size-0);
}
```
