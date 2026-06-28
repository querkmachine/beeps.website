---
tag: iframe
name: Inline Frame
category: Embedded content
spec: https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element
---

Embeds a different webpage within the current page. This is commonly used for including content hosted on other websites, such as YouTube videos.

<!-- prettier-ignore-start -->
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/niZpcdp2v34">
  <p><a href="https://www.youtube.com/watch?v=niZpcdp2v34">View this video on YouTube</a></p>
</iframe>
```
<!-- prettier-ignore-end -->

Any content within the `iframe`'s opening and closing tags will be shown to the user if their browser is unable to render the frames.
