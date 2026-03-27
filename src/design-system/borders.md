---
preTitle: Styles
title: Borders
---

Borders come in three sizes: regular, thick, and hairline.

Regular and thick borders scale with font size, whereas hairline borders remain at 1px in all cases.

The thickness of border used depends on what the severity of the division is intended to be. Content that is closely related may be separated by a hairline border (or no border at all), whereas more significant contextual breaks may use the regular or thick border.

These are all accessed with the `border` custom properties.

```css
.skinny-ape {
  border-width: var(--border-hairline);
}

.average-joe {
  border-width: var(--border-regular);
}

.big-chungus {
  border-width: var(--border-thick);
}
```

See [the documentation on rules]({{ '/design-system/rules/' | url }}) for examples of the three border widths.
