---
tag: p
name: Paragraph
category: Grouping content
spec: https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element
---

Unsurprisingly, surrounds a paragraph of content.

<!-- prettier-ignore-start -->
```html
<p>Many years ago, the great British explorer George Mallory, who was to die on Mount Everest, was asked why did he want to climb it? He said, “Because it is there.”</p>
<p>Well, space is there, and we’re going to climb it.</p>
```
<!-- prettier-ignore-end -->

You pretty much always want to surround sizeable blocks of text in a `p`, as it allows assistive technology users to rapidly move between paragraphs of text. Don't use multiple [`br`](#br) elements to emulate paragraphs, and don't use empty `p` elements to emulate spacing—use CSS instead.
