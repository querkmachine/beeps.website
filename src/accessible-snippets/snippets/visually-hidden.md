---
title: Visually hide content whilst making it accessible to screen readers
---

<!-- prettier-ignore-start -->
```css
.visually-hidden:not(:focus):not(:active) {
  inline-size: 1px;
  block-size: 1px;
  position: absolute;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  clip-path: inset(50%);
}

.visually-hidden::before,
.visually-hidden::after {
  content: "\00a0";
}
```
<!-- prettier-ignore-end -->

There are a lot of times you want something to not be visible on the page. In those cases, a developer might reach for the HTML `hidden` attribute or use `display: none` in CSS. However, these completely remove the element from the document flow, rendering it invisible both visually **and** to assistive technologies.

(There's also `visibility: hidden` and `opacity: 0`, which maintain the element within the document flow, but just makes it invisible.)

You don't always want to do that. Maybe you have a list of icons linking off to social media. If you don't supply text labels, or apply `display: none` to those labels, a screen reader won't get context on what the icon is or means. And that's no good.

## How it works

This is a variation on [Scott O'Hara's "visually hidden" code](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html#hiding-content-visually). It uses multiple CSS properties to reduce the element's size to 1&times;1 pixel, render it invisible and remove it from the document flow. Basically, doing `display: none` the long way round, but in a way that preserves the content for screen readers.

This example adds the `::before` and `::after` pseudo elements to ensure that there is always a space between hidden content and visible content next to it. This prevents screen readers from potentially combining words together when reading them out.

It also removes some properties from O'Hara's example that are only needed to support older browsers.

## When to use it

You need to make something not appear on the page, but still have it be read out when encountered by a screen reader.

## When not to use it

Use this cautiously! By hiding the text of interactive controls, like buttons or links, you make them harder for users of speech navigation software to use.

If something should be hidden visually and to screen readers, use the `hidden` HTML attribute or `display: none`.

If something should be invisible, but still take up space on the page, use `visibility: hidden` or `opacity: 0` in CSS.
