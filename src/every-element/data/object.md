---
tag: object
name: External Object
category: Embedded content
spec: https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element
---

Represents an external file to embed within the page. The `data` and `type` attributes are required.

Any content inside of the `object`, except for [`embed`](#embed) and [`param`](#param) elements, will be used as fallback content in case the embedded media is unable to be displayed.

<!-- prettier-ignore-start -->
```html
<object data="launch-footage.webm" type="video/webm" width="600" height="140">
  <img src="/launch-photo.jpg" alt="A rocket mid-launch above the pad, bright flames lighting up the night sky." />
</object>
```
<!-- prettier-ignore-end -->

Although still valid, it has largely been replaced by discrete elements like [`canvas`](#canvas), [`audio`](#audio), and [`video`](#video).
