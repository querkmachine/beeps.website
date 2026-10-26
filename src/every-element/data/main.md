---
tag: main
name: Main
category: Sections of a page
spec: https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element
---

Represents the dominant content of the page.

A page can only have one `main` element, and it should not be nested within any elements that are semantically significant. Only the following elements are valid ancestors of `main`:

- {{ eeTag("html") }}
- {{ eeTag("body") }}
- {{ eeTag("div") }}
- {{ eeTag("form") }}
- any custom elements
