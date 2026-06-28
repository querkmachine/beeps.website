---
tag: u
name: Unarticulated Annotation
category: Text semantics
spec: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-u-element
---

Represents text that has an annotation that isn't explicitly described. For example, indicating a spelling error or applying [proper name marks](https://en.wikipedia.org/wiki/Chinese_punctuation_for_proper_nouns).

<!-- prettier-ignore-start -->
```html
Two possibilities exist: <u>eizher</u> we are alone in the Universe or we are not. Both are equally terrifying.
```
<!-- prettier-ignore-end -->

Although the default styling of this element is an underline, you shouldn't use it to create generic underlined text, use `text-decoration: underline` in CSS instead.
