---
tag: img
name: Image
category: Media
spec: https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element
---

Embeds an image into the document.

Images should include an `alt` attribute that [succinctly describes the contents of the image]({{ '/blog/2024-12-02-alt-text/' | url }}').

<!-- prettier-ignore-start -->
```html
<img src="saturn.jpg" alt="Close up photograph of the planet Saturn, with a particular focus on the planet's ring system.">
```
<!-- prettier-ignore-end -->

Only a subset of image formats are widely supported by web browsers. These are JPEG, PNG, GIF, SVG, WebP and AVIF.

Adding `width` and `height` attributes helps browsers know how large the image will be before it has finished loading, helping the page to render faster.
