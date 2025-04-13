---
layout: generic.njk
title: Kraaftersite accessibility audit
metadata:
  noRobots: true
cssComponents:
  - code
---

This is a brief overview of accessibility issues that I identified with the kraafter.me website on 13th April 2025.

## About this report

Issues were identified using a combination of automated and manual tests using common web browsers and assistive technologies (AT).

The audit is not intended to be completely thorough or authoritative. It is here as a starter guide to issues that exist and improvements that could be made.

The issues listed are mapped to [version 2.2 of the Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG22/), a set of accessibility criteria curated by the Web Accessibility Initiative (WAI) at the W3C. WCAG criteria are split into three ‘levels’ of compliance:

- Level A: Considered to be the bare minimum necessary for accessibility compliance.
- Level AA: An ‘acceptable’ level of compliance. This level is specifically referenced by various governments (including those of the US and UK) as their baseline for compliance with equality legislation.
- Level AAA: Maximum compliance. This is generally only considered necessary for services that explicitly cater to disabled and special needs individuals, though some aspects of Level AAA are fairly easy to achieve and provide wider user benefits.

Today, I primarily checked for compliance against levels A and AA. This doesn’t mean that the website wouldn’t benefit from also incorporating aspects of level AAA, just that I did not consider the majority of level AAA criteria in the audit process.

It’s important to note that WCAG is a set of guidelines. There may be situations where technical limitations or the nature of how something is intended to work makes it impossible to make accessible. In these situations it’s recommended to list these as known issues in an accessibility statement.

Finally, I ask that you please take this report in the constructive manner it’s intended in. I’m not attempting to discredit the website or yourself. Websites of all scales and resources can do things wrong sometimes. I also don’t expect anything to be fixed in any sort of timeframe, so don’t worry about it.

If you have any further comments or questions about the content of this report, feel free to [contact me](https://beeps.website/contact/) through whatever means you prefer. I’m happy to try and help rectify any of the issues identified here.

### A caveat

I'm not personally familiar with how Svelte works, other than it being a framework for building progressive web apps (PWAs). Some of the testing tools I would normally use were also unable to navigate all parts of the site.

I'll provide recommendations relevant to this implementation where possible, but I might not catch everything.

## Recommendations to meet WCAG

These are issues that appear to directly violate one of the guidelines included WCAG Level A or AA.

### Use semantic HTML

Various parts of the website don't use semantic HTML, or use it slightly incorrectly.

Using the correct semantics when marking up a page is very important for assistive technology users, as it describes the structure of the page and defines the methods they use to navigate around it.

For example, if a screen reader user is looking for a specific piece of information, they will often 'jump' between elements of certain types to find it quicker.

An example journey might be to:

1. Jump to the `nav` element and listening to the options listed.
2. Once on a page that sounds relevant, jump to the `main` element.
3. Have the screen reader announce a list of the page's headings (`h1`–`h6`).
4. Jump to the heading that sounds most relevant and then begin navigating the content in order.

As you might gather, using the correct elements in the correct places is pretty important in making this journey possible!

A non-exhaustive list of semantic HTML issues I found:

- Page headings are marked up as `p` elements intead of `h1`.
- Subheadings are marked up as `p` or `a` elements instead of `h2` or lower heading levels.
- The page has two `main` elements, when only one is allowed.
- The website's header and main navigation aren't contained within a `header` element.
- The name and logo of the website does not need to be marked up as an `h1`.
- Some non-prosaic content is marked up as `p` (e.g. list dividers). These
- Navigation lists aren't marked up using list elements (`ul`, `li`).

Related WCAG criteria:

- [1.3.1 Info and Relationships (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [2.4.6 Headings and Labels (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels)
- [2.4.10 Section Headings (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/section-headings)

### Use alternative styles for links within content

Links within page content are differentiated from the surrounding text by using a different background colour.

This appearance doesn't work well for users with low colour vision, who may not be able to tell that these are links.

Consider either using an appearance that differentiates links without relying solely on colour, or using a colour that provides a minimum 3:1 contrast ratio with the page background.

There is an exception for elements that are purely navigational and the presence of links can be assumed based on context—such as the main navigation, links in the footer, and tables of contents—so changing those is at your own discretion.

Related WCAG criteria:

- [1.4.1 Use of Color (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color)
- [1.4.11 Non-text Contrast (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast)

### Add skip links to bypass repeated content

Consider adding a link to the top of each page that jumps to the main content of the page.

This helps screen reader and keyboard navigation users to jump past repeating content, like the site's name and navigation, when each page loads.

From what I can tell, Svelte (or some aspect of your implementation of it) returns the user's keyboard or screen reader focus to the top of the page when a link is used, so this is relevant even though the site is a single-page app.

Related WCAG criterion: [2.4.1 Bypass Blocks (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks)

### Disable page transitions if the user has stated a preference

Consider disabling the sliding page transition if the user has set their device to use reduced UI animation.

Significant animations can have various effects on users, from merely being distracting to triggering nausea in people with vestibular issues. This becomes more significant the larger the area being animated.

The user preference can be determined automatically using the [`prefers-reduced-motion` CSS media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) which is tied to the user's operating system preference.

You can check for the value of this media query in JavaScript by using [the `matchMedia` media](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).

```js
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduced)"
).matches;

if (!prefersReducedMotion) {
  // Enable transition code
}
```

Related WCAG criterion: [2.2.2 Pause, Stop, Hide (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide)

### Ensure elements can reflow at high zoom levels

Some elements on the page don't reflow at high zoom levels.

Higher zoom levels are used by people with low vision and motor issues to make pages content easier to see and interact with.

The main culprits here are the main navigation and the footer navigation, which remain on a single line regardless of zoom level. Update them so that they can wrap if necessary.

Related WCAG criterion: [1.4.10 Reflow (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/reflow)

### Add labels to form controls

A relatively minor one: the button HTML on the homepage is contained within a `textarea` that doesn't have an accessible label.

Form controls like `textarea` need accessible labels so that screen reader users know what the input is for, and that, in this case, it doesn't expect user input.

An accessible label can be added either by using a `label` element:

```html
<label for="html-code">Add my button to your site</label>
<textarea id="html-code">...</textarea>
```

Through use of the `aria-labelledby` attribute:

```html
<h2 id="button-code-heading">Add my button to your site</h2>
<textarea aria-labelledby="button-code-heading">...</textarea>
```

Or adding it directly to the element using the `aria-label` attribute:

```html
<textarea aria-label="Add my button to your site">...</textarea>
```

Related WCAG criteria:

- [1.3.5 Identify Input Purpose (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose)
- [2.4.6 Headings and Labels (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels)

### Don't disable form controls if you expect users to interact with them

On top of the previous point: The textarea having the `disabled` attribute renders it inert and unfocusable, preventing it from being interacted with by keyboard navigation and some assistive technologies.

You probably want to use [the `readonly` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/readonly) here, instead of `disabled`. `readonly` prevents the textarea's value from being changed, but allows for other interactions with it.

Related WCAG criterion: [2.1.1 Keyboard (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)

### Add more meaningful alternate text to gallery items

Images in the gallery currently repeat the image's URL within the image's `alt` text, rather than providing a meaningful description of the image.

This doesn't provide a useful description of the content for users who are unable to see it.

Related WCAG criterion: [1.1.1 Non-text Content (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)

## Advisory thoughts

These are other suggestions for improvement that are not necessary to meet WCAG 2.2 Level AA, but are good practices to follow to improve accessibility overall.

### Use more descriptive link text

Some links on the site have text labels that aren't descriptive of where they go.

Screen reader users don't always navigate page content sequentially, so may not have context of what these links mean.

Use text that is more descriptive of where it leads, either by incorporating more of the surrounding text or by rewriting the link's content.

Examples include:

- 'more about me over [here]' on the homepage.
- the '<<' and '>>' webring links on the homepage.

You can use the [inclusively hidden pattern](https://css-tricks.com/inclusively-hidden/) to provide links with more meaningful text without the text being visible. Be aware that this can affect how voice control users interact with it.

Related WCAG criterion: [2.4.9 Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only)

### Consider using `aria-current` to identify the page the user is currently on

You can help users orient themselves within your website by marking which link in the navigation they are currently on by adding `aria-current="page"` to the link. This can be used as a styling hook to make the current section clearer to sighted users as well.

Related WCAG criterion:

- [2.4.8 Location (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/location)

### The gallery and projects pages don't work if JavaScript is unavailable

This isn't a failure under WCAG, however some assistive technology users will not have JavaScript enabled or will be using software that doesn't support it.

Consider whether these can be rendered on the server, rather than requiring client-side JavaScript.

### Consider hiding image zoom controls when JavaScript is unavailable

Gallery items continue to display options to zoom when JavaScript is unavailable and these buttons are non-operational.

Consider hiding these controls by default and only showing them if you have detected that JavaScript is available.
