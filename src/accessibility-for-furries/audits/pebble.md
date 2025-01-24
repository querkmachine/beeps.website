---
layout: generic.njk
title: pebble.pet accessibility audit
metadata:
  noRobots: true
cssComponents:
  - code
---

This is a brief overview of accessibility issues that I identified with the pebble.pet website on 24th and 25th January 2025.

These issues were identified using a combination of automated and manual tests using common web browsers and assistive technologies (AT).

The audit is not intended to be completely thorough or authoritative. It is here as a starter guide to issues that exist and improvements that could be made.

The issues listed are mapped to [version 2.2 of the Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG22/), a set of accessibility criteria curated by the Web Accessibility Initiative (WAI) at the W3C. WCAG criteria are split into three ‘levels’ of compliance:

- Level A: Considered to be the bare minimum necessary for accessibility compliance.
- Level AA: An ‘acceptable’ level of compliance. This level is specifically referenced by various governments (including those of the US and UK) as their baseline for compliance with equality legislation.
- Level AAA: Maximum compliance. This is generally only considered necessary for services that explicitly cater to disabled and special needs individuals, though some aspects of Level AAA are fairly easy to achieve and provide wider benefits.

Today, I primarily checked for compliance against levels A and AA. This doesn’t mean that the social signifiers tool wouldn’t benefit from also incorporating aspects of level AAA, just that I did not consider the majority of level AAA criteria in the audit process.

It’s important to note that WCAG is a set of guidelines. There may be situations where technical limitations or the nature of how something is intended to work makes it impossible to make accessible. In these situations it’s recommended to list these as known issues in an accessibility statement.

Finally, I ask that you please take this report in the constructive manner it’s intended in. I’m not attempting to discredit the website or yourself. Websites of all scales and resources can do things wrong sometimes. I also don’t expect anything to be fixed in any sort of timeframe, so don’t worry about it.

If you have any further comments or questions about the content of this report, feel free to [contact me](https://beeps.website/contact/) through whatever means you prefer. I’m happy to try and help rectify any of the issues identified here.

## Recommendations to meet WCAG

These are direct viola

### Use semantic elements to identify parts of the page

Use semantic HTML to mark up different regions of the page. Doing so helps assistive technologies make sense of the page’s structure, which can assist users in many ways.

For example, enabling a customisable ‘reader mode’, which can help users with vision issues or dyslexia.

Presently, the entire content of the page is contained within a `<main>` element. This isn’t strictly correct, as the `<main>` element is only intended to surround the main (unique) content of a page, and not repeated parts of the user interface.

The navigation and footer should also be `<nav>` and `<footer>` elements, respectively. Currently they are `<div>` elements.

In the blog section’s landing page, each individual post can be wrapped in an `<article>` element to help indicate that each of them is a separate piece of content and not intended to be perceived as one whole.

There are a few other places where more semantic HTML could be used as well, such as on the dates and mood block in blog posts.

Related WCAG criterion: [1.3.1 Info and relationships (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)

### Provide alternate text for images

The homepage images and linked buttons (or stamps) on the homepage lack alternative (“alt”) text.

I notice that they do have filled `title` attributes already, however, some screen readers do not announce titles automatically and require user intervention to be announced instead, so using `alt` is preferred.

Note that the lack of alt text doesn’t prevent a screen reader from announcing an image either, rather it will announce the image’s file name or a generic string like “Unlabeled image”, increasing the verbosity of announcements and introducing significant repetition in the lists of buttons.

Duplicating the title text into the `alt` attribute will probably suffice here.

```html
<a class="aboutStampIndCont" href="https://beeps.website/" title="beeps">
  <img class="aboutStamp" src="../resources/links/beepsnew.gif" alt="beeps" />
</a>
```

Related WCAG criterion: [1.1.1 Non-text content (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)

### Mark icons as being presentational

Icons in the main navigation, social media links on the homepage, and for presentation purposes (like the double forward slash motif) are announced by screen readers, despite being presentational elements.

As these icons are all supplementary to the adjacent text content, there isn’t any benefit to screen readers announcing them. Adding `role="presentation"` informs screen readers that the element can be ignored.

```html
<img
  src="./resources/main/icons/cloud.svg"
  class="sidebarButtonIcon"
  role="presentation"
/>
```

Related WCAG criterion: [1.1.1 Non-text content (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html

### Avoid using headings for presentational purposes

On the homepage, the introductory list of information (pronouns, etc.) are each written as `h2` elements.

Heading elements are intended to demarcate the beginning of a new block of content, and this is how they are presented by assistive technologies.

In this instance, using an unordered list (`ul`) with multiple list items (`li`) would be more appropriate, with the needed styles copied from the `h2` to the CSS class name.

Related WCAG criteria:

- [2.4.6 Headings and labels (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)
- [2.4.10 Section headings (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/section-headings.html)

### Don’t have multiple `h1` elements on a page

On the homepage, the main heading is split across two adjacent `h1` elements with slightly different styling.

Pages should only have a single `h1` element that acts as the title for the entire page.

These should be combined together.

```html
<h1 class="pebbleTitle">
  <div class="pebbleSubTitle">hi! i'm</div>
  pebble!
</h1>
```

Although WCAG does not strictly require there to be a single `h1`, as the `h1` is the heading that precursors all other headings on the page, it is considered best practice to only have one.

Related WCAG criterion: [1.3.1 Info and relationships (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)

### Consider adding bypass links (“skiplinks”)

Bypass links (also known as skiplinks) are links hidden at the very top of a page that allows a user of keyboard navigation to bypass repetitive parts of a webpage, such as the header and main navigation, and jump immediately to the main content of the page.

These links are typically rendered invisibly until they receive keyboard focus, using a method like [inclusively hidden](https://css-tricks.com/inclusively-hidden/)).

Consider introducing bypass links to accommodate those users.

Related WCAG criterion: [2.4.1 Bypass blocks (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html)

### Change the menu toggle link to be a button

Currently, the ‘button’ to toggle the navigation on narrow screens is actually a link with a voided `href` attribute, giving it functionality more similar to a `<button type=“button”>` element.

This isn’t ideal as assistive technologies will announce links and buttons differently.

Screen readers often summarise pages into various filtered lists—such as a list of links, list of headings, list of form controls, etc.—so that users can jump to relevant content sooner.

The keyboard navigation methods are also different between a button and a link. Buttons can be activated by pressing the <kbd>Space</kbd> bar, whilst links cannot.

Ideally, change this link to be a `<button>` element instead. Barring the need to change some CSS, this looks like it should be fairly simple in your current implementation.

```html
<button
  type="button"
  title="menu"
  id="menuButton"
  class="indexHeaderButtonContainer"
  onclick="homePageMenu()"
>
  […]
</button>
```

This also applies to the themes menu present in the navigation on other pages.

Related WCAG criteria:

- [1.3.1 Info and relationships (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [4.1.2 Name, role, value (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

### Fix keyboard focus leaving the screen when navigating past the main navigation

On pages other than the homepage, keyboard focus will leave the screen after navigating past the menu toggle button without opening it. This is seemingly because it has moved focus to the navigation links, which are not visible on the screen.

You can fix this using JavaScript to add the [`inert` HTML attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert) and `aria-hidden=“true”` to the navigation menu when it isn’t visible. This instructs the browser and assistive technologies to ignore the navigation, without having to visually hide it.

Although this layout is intended for mobile use, this issue is still relevant as the mobile layout is used for desktop users with narrow browser windows or high zoom levels.

Related WCAG criterion: [2.4.7 Focus visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)

### Use ARIA attributes to inform assistive technologies of the navigation’s state

Currently, the only feedback provided when opening or closing the mobile navigation menu is visual—the navigation menu visually changing.

This doesn’t help users with low vision know that activating the toggle has worked, nor whether activating it again would work to open or close the menu.

Use JavaScript to provide feedback to the user through the addition and alteration of ARIA attributes.

For a reduced example, a toggle and menu might look like this initially (menu closed):

```html
<button type="button" id="nav-toggle" aria-controls="nav" aria-expanded="false">
  Menu
</button>

<nav id="nav" aria-hidden="true" inert>[…]</nav>
```

And like this when the menu is open:

```html
<button type="button" id="nav-toggle" aria-controls="nav" aria-expanded="true">
  Menu
</button>

<nav id="nav">[…]</nav>
```

Because the menu is only initially hidden on mobile, you’ll also want to conditionally add and remove these attributes in response to changes in browser window size.

Related WCAG criterion: [4.1.2 Name, role, value (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

### Increase the contrast of text in the footer

Due to the reduced opacity, the copyright text in the footer is too low contrast to meet minimum contrast requirements.

WCAG Level AA expects a minimum of 4.5:1 contrast between the text and background colour.

Currently, this hovers at around 2.0:1 in dark theme and 1.6:1 in the light theme.

You can fix this by changing the opacity from 0.3 to at least 0.5 in the dark theme and 0.8 in the light theme.

Related WCAG criterion: [1.4.3 Contrast (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

### Reduce the size of underlines in forced color modes

In forced colour modes (also known as high-contrast modes) the text of links becomes difficult to read, as the overlapping underline/background becomes the same colour as the link text.

You can fix this by using the [`forced-colors` media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors) to reset the appearance of underlines when a forced colour mode is active.

```css
@media (forced-colors: active) {
  a {
    text-decoration-thickness: 1px;
    text-underline-offset: 0;
  }
}
```

Related WCAG criterion: [1.4.3 Contrast (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

### Consider disabling some animations if the user has stated a preference

Consider disabling some of the various interface animations if the user has reduced motion enabled.

Significant animations can have various effects on users, from merely being distracting to triggering nausea in people with vestibular issues. This becomes more significant the larger the area being animated.

The only place on the site that I think might benefit from this is the initial homepage elements that animate in when the page is first loaded. Other animations, like hover effects and the navigation slide in, are probably small enough to not cause an issue even for people with vestibular issues.

The user preference can be determined automatically using the [`prefers-reduced-motion` CSS media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion). Existing animations can be disabled by setting `animation-duration` or `transition-duration` to `0s`.

Related WCAG criteria:

- [2.2.2 Pause, Stop, Hide (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide), for the homepage animations
- [2.3.3 Animation from Inteactions (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions), for other animations

### Consider showing the date on gallery thumbnails upfront

Currently, the date for a piece of artwork is only displayed when hovering over the artwork.

Naturally, this doesn’t really work in contexts where hovering isn’t possible, such as when using a touch screen, keyboard navigation, or alternative cursor hardware such as switch controls.

Consider showing this information upfront, without requiring a hover interaction.

Related WCAG criteria:

- [1.4.13 Content on Hover or Focus (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus)
- [2.1.1 Keyboard (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)

## Advisory thoughts

### Use of `title` attributes

I noticed that you use the `title` attribute in various locations around the site.

Whilst this isn’t a WCAG issue, or even really much of a problem, there are some concerns with how usable `title` tooltips actually are.

Notably, they do not respect user settings such as forced (high contrast) colour modes, changes to font size, and changes to zoom level. Some screen readers also do not readily announce them without additional user intervention.

Although they are likely still beneficial to sighted users in places where context may not be immediately obvious, such as the homepage stamps, it is usually preferable to use plain text, `aria-label` (on permitted elements), or `alt` text (on images).

### A keyboard navigation bug with the homepage version of the mobile menu toggle

Whilst testing, I found that the version of the menu toggle used on the homepage has an unusual quirk when navigating with the keyboard.

When using the <kbd>Tab</kbd> key to navigate through elements on the page (<kbd>⇧ Shift</kbd> and <kbd>Tab</kbd>, to go backwards), rather than keyboard focus moving past the toggle, it instead began to visually cycle through the navigation items _within_ the toggle button.

I think this is related to the issue about keyboard focus leaving the screen mentioned previously, and may also be resolved by fixing that issue.

### Consider adding a `title` attribute to the embedded social feed on the homepage

As iframes are embedded documents, assistive technologies sometimes cannot provide information about them prior to the user entering them. This means the user is unable to get context of what is in the frame beforehand.

As other attributes are disallowed in this context, it is considered good practice to add a `title` attribute to the iframe with a brief description of what it contains.
