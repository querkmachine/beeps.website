---
tag: picture
name: Picture
category: Media
spec: https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element
---

A container for an [`img`](#img) and any number of [`source`](#sources) elements, that allows for conditionally changing the image being displayed by the `img` based on screen resolution, viewport size, and browser support.

`picture` must contain a single `img` element, which comes last in the element. This `img` is used as a fallback if the browser doesn't support the `picture` element or none of the provided `source`s are able to be used.

Unlike the similar looking [`audio`](#audio) and [`video`](#video) elements, `picture` is _only_ a container. All attributes relating to the image, like `class`es or `alt` text, must be placed on the `img` element, not the `picture` element.

<!-- prettier-ignore-start -->
```html
<picture>
  <!-- Used if the browser supports AVIF images -->
  <source srcset="apollo-11.avif" type="image/avif">
  
  <!-- Used if the browser window is taller than it is wide --> 
  <source srcset="apollo-11-portrait.jpg" media="(orientation: portrait)">
  
  <!-- Used if the browser window is wider than 1000 pixels and the image takes up 100% of the viewport width -->
  <source srcset="apollo-11-wide.jpg" media="(min-width: 1000px)" sizes="100vw" width="1000">
  
  <!-- Provides multiple resolutions of the same image, depending on the display's pixel density -->
  <source srcset="apollo-11@3x.jpg 3x, apollo-11@2x.jpg 2x, apollo-11.jpg">
  
  <!-- Fallback image and where you put your attributes -->
  <img src="apollo-11.jpg" width="300" height="600" alt="Photograph of the Apollo 11 Saturn V rocket mid-launch, taken from the top of the launch tower.">
</picture>
```
<!-- prettier-ignore-end -->

Using `picture` is only beneficial if you're leveraging its ability to replace the source image, otherwise, it's simpler to use [`img`](#img).
