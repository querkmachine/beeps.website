---
tag: link
name: External Resource Link
category: Metadata
spec: https://html.spec.whatwg.org/multipage/semantics.html#the-link-element
---

Allows for a page to refer to an external resource, along with information about the resource.

This is typically used for defining style sheets, icons, alternative versions of the current page, and preloading resources to be used later.

<!-- prettier-ignore-start -->
```html
<head>
  <!-- Stylesheets -->
  <link rel="stylesheet" href="my-styles.css" media="screen">
  <link rel="stylesheet" href="dark-theme.css" media="(prefers-color-scheme: dark)">
  
  <!-- Icons -->
  <link rel="icon" href="favicon.ico">
  <link rel="apple-touch-icon" href="icon.png" sizes="192x192">
  
  <!-- Alternate content formats -->
  <link rel="alternate" href="rss-feed.xml" type="application/atom+xml">
  <link rel="alternate" href="/svenska/" hreflang="sv">
  
  <!-- Content preloading -->
  <link rel="preload" href="huge-image.jpeg" as="image" imagesizes="33vw, 100vw">
  <link rel="preload" href="webfont.woff2" as="font" href="font/woff2">
</head>
```
<!-- prettier-ignore-end -->

External resource links should always appear in the [`head`](#head) of the page.
