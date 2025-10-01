---
tag: section
name: Generic Section
category: Sections of a page
spec: https://html.spec.whatwg.org/multipage/sections.html#the-section-element
---

Represents a section of a document that doesn't have a more specific element to represent it.

Sections should always contain a heading or an accessible label that identifies the section's content.

<!-- prettier-ignore-start -->
```html
<section>
  <h2>Astronauts</h2>
  [...]
</section>

<section aria-label="Cosmonauts">
</section>

<h2 id="taikonauts-heading">Taikonauts</h2>
<section aria-labelledby="taikonauts-heading">
</section>
```
<!-- prettier-ignore-end -->

There are many, many more semantic alternatives to `section`. For a non-exhaustive list of examples:

- For navigation elements, use [`nav`](#nav).
- For wrapping the primary content of the page, use [`main`](#main).
- For the main heading of a page, or headings within a section, use [`header`](#header).
- For the main footer of a page, or
- For a piece of content that makes sense outside of the context of the rest of the page, use [`article`](#article).
- For content that is supplemental to the page's content, use [`aside`](#aside).
- For search functionality, use [`search`](#search).

If you're looking for an element solely to use as a styling hook, use [`div`](#div).
