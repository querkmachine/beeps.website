---
tag: pre
name: Preformatted Text
category: Grouping content
spec: https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element
---

Represents text that should be presented exactly as written, without collapsing or removing spaces, tabs, and line breaks.

If `pre` is being used to produce a visual, such as ASCII art, then it should be hidden from assistive technologies and furnished with a text alternative as though it were an image. You can use [`figure`](#figure) and [`figcaption`](#figcaption) for this purpose.

<!-- prettier-ignore-start -->
```html
<figure>
<!-- Because `pre` preserves spaces, we don't want to indent anything inside of it. -->
<pre aria-hidden="true">
     ________________________________
    /                                "-_
   /      .  |  .                       \
  /      : \ | / :                       \
 /        '-___-'                         \
/_________________________________________ \
     _______| |________________________--""-L
    /       F J                              \
   /       F   J                              L
  /      :'     ':                            F
 /        '-___-'                            /
/_________________________________________--"
</pre>
  <figcaption>An ASCII drawing demonstrating how wormholes bend space time, by Henry Segerman.</figcaption>
</figure>
```
<!-- prettier-ignore-end -->

`pre` is often used in confunction with [`code`](#code) to display code snippets.
