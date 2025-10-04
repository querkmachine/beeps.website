---
title: Visually hidden
updated: 2025-10-04
metadata:
  description: Hide text whilst still making it accessible to screen readers.
---

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

```html
<a href="/change-email">
  Update
  <span class="visually-hidden">your email address</span>
</a>
```

There are a lot of times you want something to not be visible on the page. In those cases, a developer might reach for the HTML `hidden` attribute or use `display: none` in CSS. These completely remove the element from the document flow, rendering it invisible both visually **and** to assistive technologies.

There's also `visibility: hidden` and `opacity: 0`, which keeps the element within the document flow, but just makes it invisible, still taking up space on the page.

Sometimes you don't want either of these. Maybe you have a list of identical looking links that all lead to different places. A visual user may be able to determine what they do based on their surrounding context, but a screen reader won't necessarily know that.

If you don't add text labels providing more context, or those labels are removed from the document flow, a screen reader won't get context on what the link does or where it goes, and that's no good.

## When to use it

You need to have text not appear on the page, but still have it be read out when encountered by a screen reader.

For example, when trying to meet [WCAG's link purpose criteria](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html) you will want links to contain unique descriptive text. Single terms like "edit" or "delete" are usually insufficient to describe what a link does, but adding fuller descriptions can clutter the interface for visual users.

## When not to use it

Use this cautiously! By hiding the text of interactive controls, like buttons or links, you can make them harder for users of speech navigation software to use.

If something _should_ be hidden both visually and to screen readers, such as a closed panel, use the `hidden` HTML attribute or `display: none`.

If something should be invisible, but still take up space on the page, use `visibility: hidden` or `opacity: 0` in CSS.

## Background

This is a variation on [Scott O'Hara's "visually hidden" code](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html#hiding-content-visually). It uses multiple CSS properties to reduce the element's size to 1&times;1 pixel, render it invisible and remove it from the page's layout. Basically, doing `display: none` the long way round and in a way that preserves the content for screen readers.

This example expands upon O'Hara's by adding the `::before` and `::after` pseudo elements to ensure that there is always a space between hidden content and visible content next to it. This prevents screen readers from potentially combining words together when reading them out (e.g. "Updateyour email address")

It also removes some properties from O'Hara's example that are only needed to support older browsers.
