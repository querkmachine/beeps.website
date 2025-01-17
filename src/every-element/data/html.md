---
tag: html
name: HTML Document
category: Sections of a page
spec: https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
---

Surrounds all other HTML content, including the [`head`](#head) and [`body`](#body). There can only be one `html` element.

The `html` element should include the page's language in the `lang` attribute, written as a [IETF language subtag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags). This helps screen readers understand how it should pronounce the page's content.

Incuding the language direction using the `dir` attribute also ensures that the browser renders content in the intended direction, instead of defaulting to the system default.

<!-- prettier-ignore-start -->
```html
<html lang="en" dir="ltr">
  ...
</html>
```
<!-- prettier-ignore-end -->
