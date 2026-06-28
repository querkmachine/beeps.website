---
tag: map
name: Image Map
category: Image maps
spec: https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element
---

Surrounds one or more [`area`](#area) elements. Along with the `name` attribute and an [`img`](#img) (or rarely, an [`object`](#object)), it can be used to create an image with multiple interactive regions.

<!-- prettier-ignore-start -->
```html
<map name="my-solar-system">
  <area alt="Square Planet" shape="rect" href="square.html" coords="0,0,50,50">
  <area alt="Poly Planet" shape="poly" href="poly.html" coords="10,10,30,0,40,50,10,40">
  <area alt="Orb Planet" shape="circle" href="orb.html" coords="25,100,25">
</map>

<img usemap="my-solar-system" src="system.jpg" alt="My Solar System">
```
<!-- prettier-ignore-end -->

Image maps usually have poor accessibility and cannot scale up or down if the size of the image is altered. They should generally be avoided.
