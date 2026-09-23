---
tag: fencedframe
name: Fenced Frame
category: Embedded content
spec: https://wicg.github.io/fenced-frame/#the-fencedframe-element
obsolete: true
---

A proposed alternative to [`iframe`](#iframe) that would block pages from setting third-party cookies. It was intended to better preserve user privacy without breaking the `iframe` element's backwards compatibility.

Proposed by Google and initially implemented in Chromium-based browsers, it was opposed by Mozilla, who supported [the CHIPS standard](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies) instead. Google eventually withdrew its support for `fencedframe`.
