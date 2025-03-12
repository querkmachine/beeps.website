---
layout: generic.njk
title: FurIT accessibility audit
metadata:
  noRobots: true
cssComponents:
  - code
---

This is a brief overview of accessibility issues that I identified with the FurIT (furit.de) website on 24th January 2025.

## About this report

Issues were identified using a combination of automated and manual tests using common web browsers and assistive technologies (AT).

The audit is not intended to be completely thorough or authoritative. It is here as a starter guide to issues that exist and improvements that could be made.

The issues listed are mapped to [version 2.2 of the Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG22/), a set of accessibility criteria curated by the Web Accessibility Initiative (WAI) at the W3C. WCAG criteria are split into three ‘levels’ of compliance:

- Level A: Considered to be the bare minimum necessary for accessibility compliance.
- Level AA: An ‘acceptable’ level of compliance. This level is specifically referenced by various governments (including those of the US and UK) as their baseline for compliance with equality legislation.
- Level AAA: Maximum compliance. This is generally only considered necessary for services that explicitly cater to disabled and special needs individuals, though some aspects of Level AAA are fairly easy to achieve and provide wider benefits.

Today, I primarily checked for compliance against levels A and AA. This doesn’t mean that the website wouldn’t benefit from also incorporating aspects of level AAA, just that I did not consider the majority of level AAA criteria in the audit process.

It’s important to note that WCAG is a set of guidelines. There may be situations where technical limitations or the nature of how something is intended to work makes it impossible to make accessible. In these situations it’s recommended to list these as known issues in an accessibility statement.

Finally, I ask that you please take this report in the constructive manner it’s intended in. I’m not attempting to discredit the website or yourself. Websites of all scales and resources can do things wrong sometimes. I also don’t expect anything to be fixed in any sort of timeframe. I'm not your boss.

If you have any further comments or questions about the content of this report, feel free to [contact me](https://beeps.website/contact/) through whatever means you prefer. I’m happy to try and help rectify any of the issues identified here.

### Caveats

The FurIT website is in German, a language that I am not fluent in (I got a D in my German A-level exam). Because of this, I was unable to test any criteria that relate to written copy and appropriate labelling. From what I can tell from Google Translate, they seem to be fine.

As it's a fairly simple, single page website, with all links leading to external sources, I also did not test for criteria relating to navigation.

## Recommendations to meet WCAG

These are issues that appear to directly violate one of the guidelines included WCAG Level A or AA.

### Increase the contrast of links and buttons

The colour used for links and buttons (`#ff697d`) doesn't meet the 4.5:1 minimum contrast ratio when used against the white background (`#ffffff`).

Currently, this has a contrast ratio of 2.8:1. WCAG Level AA expects a minimum of 4.5:1 contrast between text and its background colour. There should also be a minimum of 3:1 between interactive elements like buttons and their surroundings.

You can fix this by darkening the colour used for links and buttons to `#d53f53`, achieving a 4.5:1 contrast ratio for both links and buttons.

If you would prefer not the darken the buttons, you could retain the existing background colour and add a border that meets the 3:1 minimum instead.

Related WCAG criteria:

- [1.4.3 Contrast (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum)
- [1.4.11 Non-Text Contrast (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast)

### Increase the contrast of the "queerer" text gradient

Similar to the above, the rainbow gradient applied to the "queerer" text may make it more difficult to read for some people. The yellow and cyan colours are especially bright, meaning there isn't much contrast with the white background.

You may wish to use darker shades of these colours. Or not. I don't think it's _that_ big of a deal, in this situation.

Related WCAG criterion: [1.4.3 Contrast (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum)

## Advisories

These are other suggestions for improvement that do not necessarily violate WCAG, but are good practices to follow to improve accessibility overall.

### Consider disabling the background animation if the user has expressed a preference

Users may wish to disable animations for a variety of reasons, such as finding them overly distracting or triggering motion sickness.

Although I think the mouse-tracked background animations are unlikely to cause these issues, and doing so is not necessary to meet WCAG Level AA, you may wish to consider disabling the mouse tracking functionality if the user has disabled animation in their operating system.

This can be determined in code using the `prefers-reduced-motion` media query.

```js
// returns `true` if the user has enabled the reduced motion setting, otherwise `false`
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
```

Related WCAG criterion: [2.3.3 Animation from Interactions (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions)
