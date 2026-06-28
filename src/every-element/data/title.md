---
tag: title
name: Page Title
category: Metadata
spec: https://html.spec.whatwg.org/multipage/semantics.html#the-title-element
---

The title of the page, as displayed in the browser user interface (tab, window title, browsing history, etc.)

The title should be reasonably descriptive of the page's content and may be split into sections to reproduce the site's content hierarchy. Because the start of the title is less likely to be cut off when displayed in the browser, it should contain the information most unique to the current page.

The title can only contain plain text and HTML entities, not other HTML elements. The `title` element must always be inside of the [`head`](#head) element.

<!-- prettier-ignore-start -->

```html
<head>
  <title>
    The Apollo 13 incident &mdash; Apollo missions &mdash; beeps' cool moon
    mission site
  </title>
</head>
```

<!-- prettier-ignore-end -->
