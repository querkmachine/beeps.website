---
tag: time
name: Time
category: Text semantics
spec: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element
---

Represents a human readable (and optionally, machine readable) date and/or time. Often used as part of metadata, such as when a post was published or updated.

<!-- prettier-ignore-start -->
```html
<time>20 July 1969</time>
```
<!-- prettier-ignore-end -->

A machine readable version of the date can be provided using the `datetime` attribute. This must use the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) datetime format.

<!-- prettier-ignore-start -->
```html
<time datetime="1969-07-20T20:17:40Z">20 July 1969 at 8:17pm UTC</time>
```
<!-- prettier-ignore-end -->
