---
tag: noscript
name: JavaScript Fallback
category: Scripting
spec: https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element
---

Provides fallback content for browsers that do not support JavaScript or where JavaScript execution has been disabled by the user.

<!-- prettier-ignore-start -->
```html
<canvas id="cool-interactive-map-thing"></canvas>
<script src="cool-interactive-map-thing.js"></script>

<noscript>
  <img src="map.png" alt="Fallback map image">
</noscript>
```
<!-- prettier-ignore-end -->

Notably, `noscript` does _not_ display for browsers where JavaScript is available, but scripts failed to load or run without erroring. You need to handle those use cases yourself.
