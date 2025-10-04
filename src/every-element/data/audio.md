---
tag: audio
name: Audio
category: Media
spec: https://html.spec.whatwg.org/multipage/media.html#the-audio-element
---

An embedded audio file, defined using the `src` attribute or one or more [`source`](#source) elements.

By default, the element renders invisibly. The `controls` attribute must be included to provide playback controls.

Any HTML placed inside of the element, that isn't `source` elements, will be displayed if the browser or device is incapable of audio playback.

<!-- prettier-ignore-start -->
```html
<audio controls>
  <source type="audio/mp3" src="golden-record.mp3">
  <p><a href="golden-record.mp3">Listen to Voyager's Golden Record</a>
</audio>
```
<!-- prettier-ignore-end -->
