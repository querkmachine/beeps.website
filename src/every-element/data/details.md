---
tag: details
name: Details
category: Interactive elements
spec: https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element
---

Container element for a disclosure widget that can show or hide content on a page. This can be useful for hiding content that is only relevant to a subset of users.

<!-- prettier-ignore-start -->
```html
<details>
  <summary>Transcript of Kennedy's address at Rice University</summary>
  <p>I appreciate your president having made me an honorary visiting professor, and I will assure you that my first lecture will be very brief.</p>
</details>
```
<!-- prettier-ignore-end -->

Content is hidden by default. Add the `open` HTML attribute to have it start open.

Details should include a [`summary`](#summary) element that describes the content. All content within the details element other than the `summary` will be shown and hidden when interacting with it.
