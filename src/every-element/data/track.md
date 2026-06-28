---
tag: track
name: Text Track
category: Media
spec: https://html.spec.whatwg.org/multipage/media.html#the-track-element
---

Provides accessible text alternatives and other metadata to [`audio`](#audio) and [`video`](#video), such as adding closed captions, audio description, or chapter information.

Text tracks are provided as files in [WebVTT format](https://en.wikipedia.org/wiki/WebVTT).

<!-- prettier-ignore-start -->
```html
<video controls>
  <source src="video.webm" type="video/webm">
  <track src="captions-en.vtt" kind="captions" srclang="en" label="English">
  <track src="subtitles-en.vtt" kind="subtitles" srclang="en" label="English">
  <track src="subtitles-sv.vtt" kind="subtitles" srclang="sv" label="Svenska">
  <track src="subtitles-jp.vtt" kind="subtitles" srclang="jp" label="日本語">
</video>
```
<!-- prettier-ignore-end -->

The `kind` attribute describes what kind of data the file contains. These can be:

- `subtitles`: Transcription or translation of speech, intended for users who can hear but don't understand the content's original language.
- `captions`: Transcription or translation of speech, sounds and music, intended for users who are deaf or hard of hearing.
- `descriptions`: Audio description of the visual components of a video, intended for users who are blind.
- `chapters` and `metadata`: Provides other metadata to the video player. These don't normally do anything by default, and require you to write additional code to make work.

The `srclang` attribute describes the language of the text alternative, using an [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags). The `label` attribute is the description that will be shown on the player's track selector.
