---
tag: video
name: Video
category: Media
spec: https://html.spec.whatwg.org/multipage/media.html#the-video-element
---

An embedded video file, defined using the `src` attribute or one or more [`source`](#source) elements.

By default, the video renders without any controls. The `controls` attribute must be included to provide visible playback controls.

Any HTML inside of the element, that aren't `source` elements, will be displayed if the browser or device is incapable of playing the video.

<!-- prettier-ignore-start -->
```html
<video controls>
  <source src="artemis-1-launch.mp4" type="audio/mp4">
  <source src="artemis-1-launch.webm" type="audio/webm">
  <a href="artemis-1-launch.mp4">Download a recording of the Artemis I (SLS) launch.</a>
</video>
```
<!-- prettier-ignore-end -->

[`track`](#track) elements can be used to provide captions, subtitles, and audio description of video content.
