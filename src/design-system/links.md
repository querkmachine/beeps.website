---
preTitle: Objects
title: Links
---

{% from "src/_includes/example.njk" import kimExample %}

Links come in a couple of flavours. Obviously, there's the bog standard, underlined link. This is used in the overwhelming majority of places, and should always be used for links embedded in prose, where the underline helps differentiate it from the surrounding text.

{{ kimExample("typography-link", "Regular link") }}

'Plain' links lack the initial underline, but gain one on hover. It's intended for places where the surrounding visual context is usually enough to tell that it's a link, making the underline less useful.

{{ kimExample("typography-link-plain", "Plain link") }}

## 'Jump' links

'Jump' links are for calls to action, and are more prominently styled to make them stand out. They should stand by themselves and not appear in the middle of prose.

{{ kimExample("typography-link-jump", "Jump link") }}

## Image links

For the circumstance where an image is the only content of a link, without any visible text to accompany it, there's a special image link class. All this does is change the focus style so that it remains pleasantly legible for the folks who need it.

{{ kimExample("typography-link-image", "Image link") }}
