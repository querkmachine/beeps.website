---
tag: blockquote
name: Block Quotation
category: Grouping content
spec: https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element
---

Container indicating that the enclosed text is a quotation from a third-party, typically rendered separately from non-quoted content.

<!-- prettier-ignore-start -->
```html
<blockquote>
  <p>
    We go to the moon and do the other things, not because they are easy, but because they are hard.
  </p>
</blockquote>
```
<!-- prettier-ignore-end -->

For quotations inline with other text, use [`q`](#q).

If the quote has a citation, this should appear outside of the blockquote element, such as in a [`figcaption`](#figcaption), with both the blockquote and figcaption wrapped in a [`figure`](#figure). Use the [`cite`](#cite) element if it's appropriate to your needs.
