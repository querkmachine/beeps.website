---
tag: search
name: Search
category: Grouping content
spec: https://html.spec.whatwg.org/multipage/grouping-content.html#the-search-element
---

Defines a section of the page that contains search functionality, typically implemented via a [`form`](#form).

This doesn't do much other than inform assistive technology users of where they can find search functionality.

<!-- prettier-ignore-start -->
```html
<search>
  <form>
    <label for="query">Search for something</label>
    <input type="search" id="query" value="space stations">
    <button type="submit">Search</button>
  </form>
  
  <p>Found 5 results.</p>
  <ul>
    <li>International Space Station</li>
    <li>Tiangong</li>
    <li>Mir</li>
    <li>Skylab</li>
    <li>Salyut 1</li>
  </ul>
</search>
```
<!-- prettier-ignore-end -->
