---
layout: generic.njk
title: Freedom of Form Foundation accessibility audit
metadata:
  noRobots: true
cssComponents:
  - code
---

This is a brief overview of accessibility issues that I identified with the freedomofform.org website between 28th December 2025 and 17th January 2026.

## About this report

Issues were identified using a combination of automated and manual tests with common web browsers and assistive technologies (AT).

The audit is not intended to be completely thorough or authoritative. It serves as a starter guide to issues that exist and improvements that could be made.

The issues listed are mapped to [version 2.2 of the Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG22/), a set of accessibility criteria curated by the Web Accessibility Initiative (WAI) at the W3C. WCAG criteria are split into three ‘levels’ of compliance:

- Level A: Considered to be the bare minimum necessary for accessibility compliance.
- Level AA: An ‘acceptable’ level of compliance. This level is specifically referenced by various governments (including those of the US and UK) as their baseline for compliance with equality legislation.
- Level AAA: Maximum compliance. This is generally only considered necessary for services that explicitly cater to disabled and special needs individuals, though some aspects of Level AAA are fairly easy to achieve and provide wider user benefits.

Today, I primarily checked for compliance against Levels A and AA. This doesn’t mean that the website wouldn’t benefit from also incorporating aspects of Level AAA, just that I did not consider the majority of Level AAA criteria in the audit process.

It’s important to note that WCAG is a set of guidelines. There may be situations where technical limitations or the nature of how something is intended to work makes it impossible to make accessible. In these situations it’s recommended to list these as known issues in an accessibility statement.

Finally, I ask that you please take this report in the constructive manner it’s intended in. I’m not attempting to discredit the website or yourselves. Websites of all scales and resources can do things wrong sometimes. I also don’t expect anything to be fixed within any sort of timeframe, so don’t worry about it.

If you have any further comments or questions about the content of this report, feel free to [contact me](https://beeps.website/contact/) through whatever means you prefer. I’m happy to try and help rectify any of the issues identified here.

## Recommendations to meet WCAG

These are issues that appear to directly violate one of the guidelines included in WCAG Level A or AA.

### Simplify the main navigation

The website's main navigation generally suffers from being quite complex and difficult to use, even without involving assistive technologies (I was confused by it more than once!)

I'm going to break down the specific issues I encountered below, but I think this might be an area where starting over and building anew, possibly rethinking the content hierarchy at the same time, may be in order.

#### Don't use hover gestures to expose new layers of navigation

Hover gestures are not available to users who use screen readers, keyboard navigation, voice control software, touchscreens, or switch controls, to navigate.

They may also be difficult to use for users with motor issues, who may not be able to reliably move a cursor from a specific navigation item to the sub-navigation that appears without hovering over an adjacent item.

Ideally, subsequent levels of navigation should only be shown on an explicit gesture, such as a click or tap.

I recognise this introduces some complexity as the top-level navigation items are themselves links. In this situation, I would suggest:

1. Split each top-level navigation option into a separate link and button, with the button exposing the second-level navigation when clicked. This could additionally still operate on hover, but the separate button allows other assistive technologies to access the second-level as well.
2. Replace the top-level navigation items with buttons. When clicked, display links to both the landing page and the second-level navigation items.
3. Abandon showing second-level navigation as part of the initial navigation and require users to visit the landing page of each section to access further levels of navigation.

This also applies to the second-level dropdowns that appear on some pages, described in the following section.

Related criteria:

- [1.4.13 Content on Hover or Focus (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html)
- [2.1.1 Keyboard (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)

#### Allow assistive technologies to access second-level navigation dropdowns

On pages nested deeper in the site hierarchy, some navigation elements are moved behind inaccessible dropdowns in the second-level navigation. These dropdowns are created entirely using `<div>` elements, rendering them unfocusable and inoperable by some assistive technologies, including screen readers, keyboard navigation and voice control software.

These dropdowns should be implemented using `<button>` elements, or alternatively `<details>`/`<summary>` elements, so that assistive technologies are able to use them.

Not all screen readers or voice control software properly support `<details>`/`<summary>`, so `<button>` elements are probably the best option here.

Related criteria:

- [1.4.13 Content on Hover or Focus (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html)
- [2.1.1 Keyboard (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)

#### Consolidate in-page table of contents functionality

Interacting with the in-page table of contents on certain pages updates the contents of the navigation at the top of the page with the child headings of that section. These changes are not announced to assistive technology users and are not placed in a location where a non-sighted user is likely to encounter them.

Consider changing this functionality so that child headings are listed within the same table of contents, directly following the item that displays them to the user. This makes it simple for users to find the added navigation items.

The change of state can be communicated to assistive technologies by use of the `aria-controls` and `aria-expanded` HTML attributes, with the latter being toggled depending on whether the child headings are visible or not.

Alternatively, make the child headings always be visible and forego the need for buttons or JavaScript functionality.

Related criterion: [1.3.1 Info and Relationships (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)

### Use a consistent focus outline

Some interactive elements on the page do not use the typical focus outline when navigated to using a keyboard.

The majority of elements use the browser's default focus style, which exempts them from the WCAG's criteria regarding focus size and appearance, but there are still issues with some of these elements that are described in advisory thoughts later in this report.

I found the following elements to not have any visible focus outline:

- The search button in the header.
- The input field on the search results page.
- Images in search results.
- The member cards on the 'People' page and other pages that list team members.
- The text 'Close' button that appears on some modals.
- The 'back to top' button that appears on longer pages.
- The link cards (starting with 'Systems anatomy') on the homepage and research page.

I found the following elements to not use the same focus outline as other elements:

- The close button on modals.
- The input field on the search modal.
- Social media links.

Related criterion: [2.4.7 Focus Visible (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)

### Add alternative text to images

Various images throughout the website are missing alternative text. Notably, this includes the Foundation logo in the header and the display pictures of team members.

Add alternative text using the `alt` attribute. I've previously written a blog post about [how to write good quality alt text](https://beeps.website/blog/2024-12-02-alt-text/).

Related criterion: [1.1.1 Non-text Content (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)

### Provide text alternatives to user interface components

Some user interface components lack text alternatives, making it not possible for screen readers to announce their presence.

This is most prominently the case with the link to open the search modal. It is also true of the link cards (starting with 'Systems anatomy') on the research page.

Text alternatives can be provided in a few ways:

1. Add [inclusively hidden text](https://css-tricks.com/inclusively-hidden/) within the link.
2. Add an `aria-label` attribute to the link.
3. Add an `aria-labelledby` attribute to the link, which connects to the `id` of an element containing the accessible label.
4. Add a `title` attribute to the link.

Related WCAG criteria:

- [2.4.4 Link Purpose (In Context) (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)
- [4.1.2 Name, Role, Value (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

### Update link appearance to be distinguishable from text

Links are distinguished from body content by the use of a blue link colour. This isn't ideal for users with colour blindness or other low vision issues, who may find it difficult to tell links and surrounding text apart from one another.

This can be done in one of two ways:

1. Changing the colour of links so that they have a minimum contrast ratio of 3:1 when compared to body text. Currently, this is 2.6:1 (comparing #0496ea to #4a4e57).
2. Applying an additional visual cue, such as an underline, to links.

Related criterion: [1.4.1 Use of Color (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)

### Update link colour to provide adequate contrast

The link colour is currently too light to meet the minimum contrast ratios described by WCAG.

This makes it more difficult for users with low vision to discern links from the background, with link text potentially being harder to read or appearing to fade into the background.

This can also affect users with good vision in some circumstances, such as if they're tired or there is glare due to bright ambient light.

Link text should have a minimum contrast ratio of 4.5:1 compared to the background. Currently this is 3.2:1 (comparing #0496ea to #ffffff).

Related criterion: [1.4.3 Contrast (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

### Update footer text colour to provide adequate contrast

The text in the footer is currently too dark to meet the minimum contrast ratios described by WCAG.

Text should have a minimum contrast ratio of 4.5:1 compared to the background. Currently this is 3.71:1 (comparing #777c81 to #1d242d).

Related criterion: [1.4.3 Contrast (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

### Update appearance of buttons and text inputs to provide adequate contrast

User interface components in various parts of the site do not have adequate contrast with the page background to meet the minimum 3:1 contrast ratio required by WCAG.

The 'Read more' button that appears on some pages has a semi-transparent grey background (in practice, this comes to #f6f7f8) with a grey border (#e1e1e1). Both of these colours fail to meet the minimum contrast ratio against a white background, at 1.07:1 and 1.31:1, respectively.

The search input also uses a grey border (#e1e1e1), which has a 1.31:1 contrast ratio against the white background.

Either the border or backgrounds (probably the borders) of these components should be updated to have a minimum 3:1 contrast ratio.

Related criterion: [1.4.11 Non-text Contrast (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)

### Provide captions or transcripts for video content

There's some videos hosted on YouTube included within the site's content.

Like images must have alternate text, audiovisual content is expected to have a text alternative available, typically in the form of captions—which would be included in the YouTube videos—or transcripts, which could be included as part of the site's content.

WCAG Level AA also expects audio description to be available for prerecorded video content with the intent of letting non-sighted users understand visual context, but this criterion can also be met by supplying the equivalent information in a transcript, so a transcript is likely the better option.

Related criteria:

- [1.2.2 Captions (Prerecorded) (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html)
- [1.2.3 Audio Description or Media Alternative (Prerecorded) (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html)
- [1.2.5 Audio Description (Prerecorded) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html)

## Advisory thoughts

These are other suggestions for improvement that are not necessary to meet WCAG 2.2 Level AA, but are
good practices to follow to improve accessibility overall.

### Consider providing newsletters in a non-PDF format

Although possible, PDF documents are, unfortunately, _annoyingly_ difficult to make accessible, especially with regards to ensuring that content is semantically tagged and blocks of text are announced by screen readers in the correct order.

PDFs also do not respect user preferences with for features like user styles and text scaling, so it's best to provide an HTML equivalent of the newsletter's content, if not avoiding PDFs entirely.

See [Adobe's guidance on creating accessible PDF documents](https://blog.adobe.com/en/publish/2022/11/29/the-complete-checklist-to-pdf-accessibility).

### Consider using a custom focus style

The majority of interactive elements currently use the browser's default focus style when they receive keyboard focus. This excuses the site from many focus-style related issues, however, improvements could still be made.

For example, I found that the default outline was being 'clipped' on some elements, particularly in the primary navigation, so that the focus outline was not fully visible.

Creating a custom focus style and applying it consistently across interactive elements may resolve this problem.

Related criterion: [2.4.11 Focus Not Obscured (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)

### Consider reducing the width of text content

Presently, text content is displayed at 16 pixels and spans the entire width of each page (1180 pixels at maximum width). This creates a line length that is approximately 165 characters long.

Long lines of text can be difficult to read as they require the eyes to move more, increasing eye strain and making it more likely that a reader will lose track of their place in long pieces of prose. This is true for all users, but particularly benefits users who are dyslexic, have some cognitive disabilities, or who aren't fluent in English.

Many UX studies have found that the ideal line length for prose is around 50–75 characters, and WCAG mandates having 80 or fewer characters per line for compliance at Level AAA.

This can be resolved by either reducing the width of the content area (by adding a persistant sidebar, for example) or by increasing the font size.

Related criterion: [1.4.8 Visual Presentation (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html)

### Fix styles being loaded late in the page rendering process

Currently, several stylesheets are loaded after the page has begun rendering content. This leads to the page being partially rendered in one appearance, before needing to update to its final appearance later in the loading process. This is bad for general performance, and creates an unpredictable experience for users on slower internet connections.

This created a few issues for me while testing whilst I happened to be on a train. All of these issues were rectified upon waiting for all styles to load and render (assuming they did), but this could take up to 30 seconds whilst I was.

- When opening one of the cards on the People page, the semi-transparent grey backdrop appears _on top_ of the modal, rendering it difficult to read and impossible to interact with.
- The logo and navigation elements at the top of the page would move around as I was attempting to click them.

Looking at network traffic, some pages were loading as many as 83 stylesheets. On the People page, which is a relatively image heavy page, stylesheets made up 43% of all network requests that the page was making. That's a bit much!

Consolidating stylesheets together and loading them prior to rendering the page would likely boost performance and reduce the jumpiness of content as it's being loaded.

### Publish an accessibility statement

Adding an accessibility statement to your website makes it clear what standards you're trying to meet and where you're knowingly failing to meet that standard, or are unable to meet it for some reason.

The statement can also provide resources for users with accessibility needs, informing them how they can adapt content to their needs, report accessibility issues that you don't currently know about, or to request your content in a different format.

See [How to write an accessibility statement](https://www.makethingsaccessible.com/guides/how-to-write-an-accessibility-statement/) for guidance, though keep in mind that some aspects of this is specific to UK legal frameworks. You may want to adapt this for the specific provisions of the Americans with Disabilities Act.
