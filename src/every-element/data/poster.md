---
tag: poster
name: Video Poster
category: Media
spec: https://github.com/whatwg/html/pull/12585
mdn: null
caniuse: null
experimental: true
---

As of writing, a proposed element that supercedes the `poster` attribute on {{ eeTag("video") }} elements, allowing for the use of real {{ eeTag("img") }} and {{ eeTag("picture") }} elements and the benefits associated with them, such as alternate text.

<!-- prettier-ignore-start -->
```html
<video controls>
  <poster>
    <img alt="A still of the Space Launch System leaving the launchpad." srcset="launch.jpg 800w, launch-large.jpg 1200w" sizes="(max-width: 800px) 100vw, 1200px">
  </poster>
  <source src="artemis-1-launch.mp4" type="audio/mp4">
</video>
```
<!-- prettier-ignore-end -->

The proposal has received support from Chromium and Mozilla.
