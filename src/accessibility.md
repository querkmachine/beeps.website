---
layout: generic.njk
title: Accessibility statement
updated: 2025-04-08
metadata:
  description: Accessibility compliance, known issues, and how to report issues.
cssComponents:
  - code
---

This accessibility statement applies to the website hosted at **beeps.website**. It does not include subdomains of that domain, my other websites, or my presence on third-party websites or services.

I want as many people as possible to be able to view and use this website. For example, that means you should be able to:

- Change colours, contrast levels and fonts using your browser or device settings.
- Zoom in up to 400% without needing to horizontally scroll to view content.
- Navigate most of the website using just a keyboard, mouse, or speech recongition software.
- Listen to most of the website using a screen reader.

If you have a disability and need advice on making your device easier to use, AbilityNet publishes [simple 'how to' guides on how to change your device settings](https://mcmw.abilitynet.org.uk/).

## Compliance status

This website aims to comply with the [Web Content Accessibility Guidelines (WCAG) version 2.2](https://www.w3.org/TR/WCAG22/), level AA standard.

## Non-accessible content

The content listed below is non-accessible for the following reasons.

### Non-compliance with the accessibility regulations

These are known areas where the website does not meet the WCAG 2.2 level AA standard.

- The borders of currently selected tabs (in tab groups) don't have a 3:1 minimum contrast ratio against the background, failing [WCAG's Use of Color criterion](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color).
- The headline of the homepage uses container query units for font sizing. When zooming in, this can prevents the headline text from increasing in size once the container is as wide as the viewport, failing [WCAG's Resize Text criterion](https://www.w3.org/WAI/WCAG22/Understanding/resize-text).

### Disproportionate burden

None.

### Content not within the scope of the accessibility regulations

Some pages feature content embedded from third-party sources, such as YouTube. As this content is hosted by a third-party, I'm unable to guarantee that it is accessible.

### Other accessibility concerns

These issues do not constitute a failure under WCAG 2.2 Level AA criteria, however may still represent a degraded experience or accessibility barrier to users.

- The bottom border of the website header isn't visible in forced colours mode.
- The about and now pages use system emoji as iconography. Not all devices are capable of rendering emoji or the full range of emoji. Additionally, these may create a confusing and overly verbose experience for screen reader users.
- The GOV.UK browser data page requires two-dimensional scrolling to view the full content of data tables. This isn't a failure under [WCAG's Reflow criterion](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html), which has an exception for data tables, but may be difficult for some users to navigate.

## Preparation of this accessibility statement

This statement was prepared on 20 March 2025. It was last reviewed and updated on {{ updated | formatDate('human') }}.

## Providing feedback

I'm always keen to improve the accessiblity of this website. If you find any problems not already listed on this page, you can [open an issue in this website's respository on GitHub](https://github.com/querkmachine/beeps.website/issues) or [contact me directly]({{ '/contact/' | url }}).
