---
tag: hgroup
name: Heading Group
category: Sections of a page
spec: https://html.spec.whatwg.org/multipage/sections.html#the-hgroup-element
---

Groups together a heading ([`h1`–`h6`](#hh%23)) with related content, such as a subtitle, version number or revision date.

An `hgroup` can only contain a single heading, and other content must be contained within [`p`](#p) elements.

<!-- prettier-ignore-start -->
```html
<hgroup>
  <h1>Address at Rice University on the Nation's Space Effort</h1>
  <p>aka, "We choose to go to the moon"</p>
</hgroup>
<p>...</p>
```
<!-- prettier-ignore-end -->
