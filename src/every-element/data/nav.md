---
tag: nav
name: Navigation
category: Sections of a page
spec: https://html.spec.whatwg.org/multipage/sections.html#the-nav-element
---

Defines a section containing major navigational aids, including the main navigation, in-page tables of contents, paging navigation, and breadcrumbs.

If a page has multiple navigation elements, it can benefit assistive technology users to give each one an accessible label, so that it's easy to identify what each navigation is for.

<!-- prettier-ignore-start -->
```html
<nav aria-label="Pagination">
  <a href="/2">Previous page</a>
  <a href="/1">Page 1</a>
  <a href="/2">Page 2</a>
  <a href="/3" aria-current="page">Page 3</a>
  <a href="/4">Page 4</a>
  <a href="/4">Next page</a>
</nav>
```
<!-- prettier-ignore-end -->
