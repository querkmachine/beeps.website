---
preTitle: Styles
title: Spacing
cssComponents:
  - code
---

{% from "src/_includes/example.njk" import kimExample %}

The sizes of the spaces between things are codified into steps from 0 to 9. The steps become exponentially larger, giving more room for subtle changes at smaller sizes and expansive gaps at larger ones.

What the spacing actually evaluates to is calculated using [Utopia's fluid responsive design fancymaths](https://utopia.fyi/), which is based on the current viewport size.

{{ kimExample("spacing", "spacing") }}

(Not shown here is step 0, which is equivalent to no spacing. It's used for removing existing spacing where needed.)

In code, these are accessed using the `space` custom properties.

```css
.thingus {
  margin: var(--space-2);
  padding: var(--space-3);
}
```

### 'One-up' spacing

'One-up' spacing effects a more extreme change in spacing depending on the viewport size. For example, 1&rarr;2 spacing is closer to 1 on the spacing scale on narrow viewports but closer to 2 on wide viewports, with viewport sizes inbetween using an interpolated value between those two extremes.

All one-up spacings are contiguous. So it can go from 1&rarr;2 or 2&rarr;3, but not from 1&rarr;3.

In code, these are also accessed with the `space` custom properties, but with the larger value appended to the end.

```css
.bigger-thingus {
  padding: var(--space-5-6);
}
```

### Spacing override classes

Sometimes (read: often) I only want to change the spacing of something in one specific context, or something exists only for spacing reasons and doesn't deserve its own CSS class. For these, spacing override classes exist.

These all follow the format of `kim-!-<TYPE>-<DIRECTION>-<VALUE>`. For example, `kim-!-margin-block-end-2` sets the block-end (usually, bottom) margin of an element to 2 on the spacing scale.
