---
tag: source
name: Media Source
category: Media
spec: https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element
---

Specifies a media resource to use with [`audio`](#audio), [`video`](#video), and [`picture`](#picture) elements.

When used with `audio` and `video`, `source` elements typically include `src` and `type` attributes that link to the media files and describe what the [media type](https://en.wikipedia.org/wiki/Media_type) of the file is. Browsers will select the earliest listed `source` that the browser and operating system supports playback for.

<!-- prettier-ignore-start -->
```html
<audio controls width="500" height="40">
  <source src="apollo-11-radio.webm" type="audio/webm">
  <source src="apollo-11-radio.mp3" type="audio/mp3">
</audio>
```
<!-- prettier-ignore-end -->

When used with `picture`, `source` elements typically have a `srcset`, `width`, and `height` attributes.

Multiple sources utilising the `media` attribute can be useful for dynamically replacing an image depending on the size and shape of the browser window.

<!-- prettier-ignore-start -->
```html
<picture>
  <source srcset="apollo-11-landscape.jpg" width="1500" height="700" media="(orientation: landscape)">
  <source srcset="apollo-11-portrait.jpg" width="500" height="1000" media="(orientation: portrait)">
  
  <img src="apollo-11-portrait.jpg" width="300" height="600" alt="Photograph of the Apollo 11 Saturn V rocket mid-launch, taken from the top of the launch tower.">
</picture>
```
<!-- prettier-ignore-end -->

`src` and `srcset` attributes are not interchangeable: `audio` and `video` elements must always use `src` and `picture` elements must always use `srcset`.
