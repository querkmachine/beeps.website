---
tag: wbr
name: Word Break Opportunity
category: Text semantics
spec: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-wbr-element
---

Represents an opportunity to insert a line break, if one is required to avoid the text overflowing the element.

Useful for long, compound words that might be displayed in a constrained space, allowing you to define word boundaries where it's least disruptive for the reader.

<!-- prettier-ignore-start -->
```html
The German Space Agency has their own interest in starting a <span lang="de">Weltraum<wbr>schrott<wbr>beseitigungs<wbr>programm</span>. 
```
<!-- prettier-ignore-end -->

`wbr` will not introduce a hyphen when it breaks across lines. Use a soft hyphen (`&shy;`) instead of `wbr` if you want line breaks to be hyphenated.
