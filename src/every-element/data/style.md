---
tag: style
name: Style
category: Metadata
spec: https://html.spec.whatwg.org/multipage/semantics.html#the-style-element
---

Allows for inserting CSS style information directly into the current page. CSS inserted using `style` have a higher priority than CSS in external stylesheets, but lower priority than elements with inline `style` attributes.

<!-- prettier-ignore-start -->
```html
<style>
  .earth {
    color: azure;
  }
</style>

<div class="earth" aria-label="A pale blue dot.">.</div>
```
<!-- prettier-ignore-end -->

This can be used anywhere on the page, but best practice is to include it in the [`head`](#head) so that the browser renderer encounters it sooner. This avoids the browser having to restart rendering the page when it encounters new `style` elements.

To link to an external stylesheet, use [`link`](#link).
