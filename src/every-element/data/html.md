---
tag: html
name: HTML Document
category: Sections of a page
spec: https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
---

Surrounds all other HTML content, including the [`head`](#head) and [`body`](#body). There can only be one `html` element.

The `html` element should include the page's language in the `lang` attribute, written as a [IETF language subtag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags). This helps search engines provide results in the user's language and helps screen readers know how to pronounce the page's content.

<!-- prettier-ignore-start -->
```html
<html lang="en">
  ...
</html>
```
<!-- prettier-ignore-end -->
