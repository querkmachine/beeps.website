---
layout: generic.njk
title: Nova's Cyberspace accessibility audit
metadata:
  noRobots: true
cssComponents:
  - code
  - table
---

This is a brief overview of accessibility issues that I identified with the pebble.pet website on 7th May 2026.

## About this report

Issues were identified using a combination of automated and manual tests using common web browsers and assistive technologies (AT).

The audit is not intended to be completely thorough or authoritative. It is here as a starter guide to issues that exist and improvements that could be made.

The issues listed are mapped to [version 2.2 of the Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG22/), a set of accessibility criteria curated by the Web Accessibility Initiative (WAI) at the W3C. WCAG criteria are split into three ‘levels’ of compliance:

- Level A: Considered to be the bare minimum necessary for accessibility compliance.
- Level AA: An ‘acceptable’ level of compliance. This level is specifically referenced by various governments (including those of the US and UK) as their baseline for compliance with equality legislation.
- Level AAA: Maximum compliance. This is generally only considered necessary for services that explicitly cater to disabled and special needs individuals, though some aspects of Level AAA are fairly easy to achieve and provide wider benefits.

Today, I primarily checked for compliance against levels A and AA. This doesn’t mean that the website wouldn’t benefit from also incorporating aspects of level AAA, just that I did not consider the majority of level AAA criteria in the audit process.

It’s important to note that WCAG is a set of guidelines. There may be situations where technical limitations or the nature of how something is intended to work makes it impossible to make accessible. In these situations it’s recommended to list these as known issues in an accessibility statement.

Finally, I ask that you please take this report in the constructive manner it’s intended in. I’m not attempting to discredit the website or yourself. Websites of all scales and resources can do things wrong sometimes. I also don’t expect anything to be fixed in any sort of timeframe, so don’t worry about it.

If you have any further comments or questions about the content of this report, feel free to [contact me](https://beeps.website/contact/) through whatever means you prefer. I’m happy to try and help rectify any of the issues identified here.

## And a note...

The design of your website, in particular, makes it quite challenging to audit.

The faux-desktop environment design of the majority of pages enforces a few layout and code choices that are not best suited for a web environment. Similarly, the differing layout of the blog and guestbook pages meant that I was effectively having to carry out two audits bundled together in a trenchcoat.

As a result, this audit may not go into as depth as I normally like to aim for. Hopefully it's still helpful in helping you to meet your accessibility goals.

## Recommendations to meet WCAG

### Use semantic HTML

The majority of your content exists in `div` elements without headings or other semantic grouping.

This makes it harder for automated tools, such as assistive software, from understanding the structure and content of the page, in turn making it harder for users of that software from navigating the content.

Simple changes could include:

- Surrounding the main content of each page in a `main` element.
- Changing the main navigation of each page to be wrapped in a `nav` element.
- Changing the titles of each window into `h2` elements.
- Wrapping each individual blog post in `article` elements.

Related WCAG criteria:

- [1.3.1 Info and relationships (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships)
- [2.4.1 Bypass blocks (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks)

### Provide alternate text for images

A number of images across all sections of the website lack alternative text (also known as 'alt text').

I notice that some images (notably the buttons) have `title` attributes, however, some screen readers do not announce titles automatically and require user intervention to be announced, so using `alt` is preferred.

A lack of alt text doesn’t prevent a screen reader from announcing an image, instead causing it to announce the image’s file name or a generic string like "Unlabeled image", resulting in a lot of noise for screen reader users.

Additionally, the alt text of some images that do feature it is incorrect.

Related WCAG criterion: [1.1.1 Non-Text Content (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)

### Provide alternate text for graphical links

Some links on the website don't have any text content describing their purpose. This is most obvious on the webring links on the homepage, where the content of a link is often only an arrow character.

Assistive technologies such as screen readers and speech control systems are unable to read or navigate to these links.

Update these links to include visible text, or use `aria-label` to add invisible labels, for example:

```html
<a href="https://example.com" aria-label="Next website in the Green Day webring"
  >→</a
>
```

Related WCAG criterion: [2.4.4 Link purpose (in context) (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context)

### Mark icons as being presentational

Icons in the main navigation are announced by screen readers, despite being presentational elements.

As these icons are supplementary to the text content next to them, there isn’t any benefit to screen readers announcing them. Adding `role="presentation"` informs screen readers that the element can be safely ignored.

Related WCAG criterion: [1.1.1 Non-Text Content (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)

### Use consistent navigation across all pages

WCAG really values pages on a website looking and behaving consistently with one another. Having different navigation depending on the section of the website being viewed can disorient users and make it difficult to find their way around.

Although the main navigation is mostly the same between pages, the wording of the art link is different on some pages. Updating all instances to be the same would be useful for meeting the criterion.

The differing designs of the navigation between pages does not strictly breach WCAG guidelines, but I wouldn't consider it ideal either.

Related WCAG criterion: [3.2.3 Consistent navigation (level AA)](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation)

### Hide decorative buttons from assistive technologies (aka, the buttons, they do nothing)

On the Windows 7 styled pages, each 'window' includes faux minimise, maximise and close buttons. These buttons are coded as actual `button` HTML elements, which means they're exposed to assistive technologies as functional buttons when, in fact, they don't do anything.

You can hide these elements from assistive technologies whilst still keeping them visible by adding the `aria-hidden` HTML attribute to the buttons or their wrapping element.

The buttons should not be `button` elements either, as this causes them to be acknowledged by keyboard navigation and voice control software.

If you're unable to change the element (it looks like the CSS library you're using requires them to be `button` elements and have particular `aria-label` values), you can override the `role` and `tabindex` instead.

All together, those changes would look something like this:

```html
<div class="title-bar-controls hovered" aria-hidden="true">
  <button aria-label="Close" role="presentation" tabindex="-1"></button>
</div>
```

Related WCAG criteria:

- [1.3.1 Info and relationships (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [2.1.1 Keyboard (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)
- [2.6.4 Headings and labels (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels)

### Avoid automatically scrolling content

The list of buttons and text in the footer of the homeage scrolls automatically in a marquee fashion. Whilst the buttons can be paused by hovering over them, the text in the footer has no mechanism to pause it.

Content only being visible for a short period of time can make it inaccessible to users who have problems reading (such as dyslexia or low literacy) or moving quickly to interact with links (such as those with physical motor issues).

Constant movement of content can also be very distracting or unpleasant with some forms of neurodiversity.

Ideally, alter the design of these sections so that the content is not animated without user intervention.

Related WCAG criteria:

- [2.2.2 Pause, stop, hide (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide)

### Use a more visible keyboard focus style

The focus style introduced by the Windows 7 CSS library is not easily visible on a number of elements. This style is most commonly used when navigating pages using a keyboard, which users may do if they're unable to dextrously operate a mouse or trackpad.

Additionally, the current focus style can often disappear from view due to focusable content scrolling or being overlapped by other elements.

Having a prominent and visible focus style is beneficial as it makes it easier for these users to locate themselves on a page.

Related WCAG criteria:

- [2.4.7 Focus visible (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible)
- [2.4.11 Focus not obscured (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum)

### Make things responsive

I'm going to keep this brief, as I can see that it's already on your to-do list, but updating the design to be able to adapt to narrower screens would prevent content from overlapping one another and allow low vision users to zoom the page without obscuring information.

Related WCAG criteria:

- [1.4.10 Reflow (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/reflow)
- [2.4.11 Focus not obscured (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum)

### Use relative units for font sizes

Text content currently use pixel (`px`) values for determining font size. Pixel units are 'absolute' in CSS, which means that they're unable to be resized by assistive technologies or the font scaling options in web browsers.

Using relative units, such as `em`, `rem`, or percentages (`%`) can be resized and should be used for text content in most situations.

Related WCAG criterion: [1.4.4 Resize text (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/resize-text)

### Increase the size or spacing of links

Parts of the homepage include some quite small links, including the Green Day webring arrows and contact links in the sidebar.

These links are all 14 pixels in height and appear very close to another link. This to be too little area for a link to be easy to click on without accidentally clicking on something else, particularly for users with motor issues such as hand tremors.

Ideally increase the size of these links or, alternatively, increase the empty space around them, to a minimum of 24 pixels.

Related WCAG criterion: [2.5.8 Target size (minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum)

### Add language to pages that are missing them

Most pages lack a page language definition on the `html` element.

```html
<html lang="en">
  ...
</html>
```

This is needed so that screen reader software knows what language to announce the page in.

Related WCAG criterion: [3.1.1 Language of page (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page)

## Advisory thoughts

### Don't have multiple `h1` elements on a page

Pages should only have a single `h1` element that acts as the title for the entire page.

Many pages have two `h1` elements, with one of them seemingly being used as a wrapper for the Webneko code. This should probably be changed to another element, like a `div`.

Although WCAG does not strictly require there to be a single `h1`, as the `h1` is the heading that precursors all other headings on the page, it is considered best practice to only have one.

Related WCAG criteria:

- [1.3.1 Info and relationships (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [2.4.6 Headings and labels (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels)
