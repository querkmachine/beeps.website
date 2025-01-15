---
tag: caption
name: Table Caption
category: Tables
spec: https://html.spec.whatwg.org/multipage/tables.html#the-caption-element
---

The title or caption of a [`table`](#table). A table may only have one caption.

The caption must be the first element in the table. The location of the caption can be changed using the `caption-side` CSS property.

<!-- prettier-ignore-start -->
```html
<table>
  <caption>Atmospheric composition of solar system planets</caption>
  ...
</table>
```
<!-- prettier-ignore-end -->

Providing a caption isn't required, but is useful for providing a succinct description of the table for assistive technology users.
