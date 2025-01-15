---
tag: dl
name: Definition List
category: Grouping content
spec: https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element
---

A container for a list of keys and values, defined by a single [`dt`](#dt) followed by one or more [`dd`](#dd) elements.

Each set of `dt` and `dd` elements may optionally be wrapped in a [`div`](#div) for ease of styling.

<!-- prettier-ignore-start -->
```html
<dl>
  <div>
    <dt>Orbital speed</dt>
    <dd>24.07 km/s</dd>
  </div>
  <div>
    <dt>Satellites</dt>
    <dd>Phobos</dd>
    <dd>Deimos</dd>
  </div>
</dl>
```
<!-- prettier-ignore-end -->
