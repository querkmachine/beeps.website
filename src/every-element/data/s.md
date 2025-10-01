---
tag: s
name: Strikethrough
category: Text semantics
spec: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-s-element
---

Represents text that is no longer relevant or accurate.

There is significant overlap between `s` and [`del`](#del) elements. `del` is intended for marking up changes to documents that are revised in place, such as changes to articles on Wikipedia. Meanwhile, `s` is more generically for text that is no longer accurate.

<!-- prettier-ignore-start -->
```html
Buy an acre of land on Mars for just <s>$34.99</s> $29.99!
```
<!-- prettier-ignore-end -->

If it has been removed as part of a round of edits, use [`del`](#del). If it's a stylistic choice, use CSS and `text-decoration: line-through` instead.

Screen readers do not announce the presence of `s` elements, so you may want to use [custom CSS to provide additional context](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/s#accessibility).
