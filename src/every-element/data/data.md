---
tag: data
name: Data
category: Text semantics
spec: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-data-element
---

Along with the `value` attribute, provides a machine-readable version of the content within the element, such as an ID for a user or product.

<!-- prettier-ignore-start -->
```html
Find out <data value="42">the Answer to Life, the Universe, and Everything</data>
```
<!-- prettier-ignore-end -->

There is no specification for how scripts consume this information. It is up to the webpage author and the data consumer to agree on the standard.

For providing machine-readable dates and times, use [`time`](#time) instead.
