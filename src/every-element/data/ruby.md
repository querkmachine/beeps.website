---
tag: ruby
name: Ruby Annotation
category: Ruby text
spec: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-ruby-element
---

Allows for the addition of [`rt`](#rt) annotations that are presented alongside the text. This is common in East Asian typography to provide guidance for how to pronounce ideographs, though it may have other uses, such as for displaying word-by-word translations.

Browsers that support Ruby annotations will typically display the annotation in small text above the associated word. Browsers that don't will instead show the annotation afterwards. [`rp`](#rp) elements may be used to provide separating punctuation (often, parentheses) for non-supporting browsers.

<!-- prettier-ignore-start -->
```html
<p>JAXA successfully launched the <ruby lang="jp">明かり <rp>(</rp><rt>Akari</rt><rp>)</rp></ruby> satellite in February 2006.</p>
```
<!-- prettier-ignore-end -->

Has nothing to do with the Ruby programming language.
