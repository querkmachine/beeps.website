---
tag: area
name: Image Area
category: Image maps
spec: https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element
---

Defines a clickable region within a [`map`](#map), defined using the `shape`, `coords` and `href` attributes.

If `shape="rect"`, the `coords` value is the starting X and Y axes coordinates, followed by the ending X and Y axes coordinates.

If `shape="circle"`, the `coords` value is the X and Y axes coordinates at the centre of the circle, followed by the circle's diameter.

If `shape="poly"`, the `coords` value is any number of X and Y axes coordinates provided in pairs.

All coordinates are expressed in pixel values, starting from the top-left of the image, and separated by commas.

Image maps usually have poor accessibility and cannot scale up or down if the size of the image is altered. They should generally be avoided.
