---
tag: del
name: Deleted Text
category: Text semantics
spec: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-del-element
---

Text that has been removed from a document, usually rendered 'struck through'. A `datetime` attribute can be added to provide information on when it was removed.

<!-- prettier-ignore-start -->
```html
The Higgs-Boson has <del datetime="2013-03-14">not</del> been proven to exist. 
```
<!-- prettier-ignore-end -->

Screen readers do not announce the presence of `del` elements, so you may want to use [custom CSS to provide additional context](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/del#accessibility).

The companion to [`ins`](#ins), which is for text that has been added to a document. If something has been stricken entirely, use [`s`](#s).
