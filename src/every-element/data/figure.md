---
tag: figure
name: Figure
category: Grouping content
spec: https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element
---

A self-contained piece of content, optionally with a caption, that is referenced by the surrounding content but where the position of it is irrelevant to understanding the content.

Figures can contain any kind of content, but common examples include images, charts and diagrams.

Figures may have a [`figcaption`](#figcaption). If present, the `figcaption` element must be the first or last element in `figure`.

<!-- prettier-ignore-start -->
```html
<figure>
  <img src="saturn-v-schematic.jpg" alt="A black and white illustration of a large rocket ship, presented sideways with a cutaway showing the internal workings of the rocket.">
  <figcaption>A schematic of the Saturn V rocket's internal systems.</figcaption>
</figure>
```
<!-- prettier-ignore-end -->

Including a `figcaption` can be beneficial to screen reader users, as it provides context on what the figure contains.
