---
title: Otherkin-friendly CAPTCHAs, revisited
date: 2023-04-27
updated: 2025-08-09
tags: [self-identity, web development]
metadata:
  description: Using userstyles to make CAPTCHAs more respectful of non-human identities.
interactions:
  host: chitter.xyz
  username: batbeeps
  id: "110272578792454801"
cssComponents:
  - callout
  - code
---

{% responsiveImage "./src/images/robot-captcha.png", "A fake screenshot of a checkbox-type CAPTCHA, with the text reading 'I am a robot' and the box checked." %}

{% callout %}
This is an updated version of [a blog post by mavica](https://maple.pet/blog/fighting-otherkin-erasure-from-captchas). All credit for this idea belongs to byte.
{% endcallout %}

For some reason, CAPTCHAs have a bit of a thing for telling the user they are human. I mean, it's literally in the name: "Completely Automated Public Turing (test to tell) Computers and **Humans** Apart". CAPTCHA.

[I reject that label.]({{ '/about/nonhuman/' | url }}) I am not human. Stop telling me that my ability to click a box, type some letters, or know what a traffic light is automatically makes me human. I'm pretty sure a capable machine learning algorithm or a decently intelligent vole could do the same things.

In [yesterday's post about userstyles]({{ '/blog/2023-04-26-using-userstyles-in-2023/' | url }}), I made note that I use them to replace the text on CAPTCHAs with identity-affirming equivalents—erasing that unnecessary little microaggression from my day.

Perhaps unsurprisingly, I know a lot of folks who feel the same way and have asked how to do it, so here's the userstyle code I use, adapted from [the code by mavica](https://maple.pet/blog/fighting-otherkin-erasure-from-captchas). Replace the text with something more appropriate to your species or form!

<!-- prettier-ignore-start -->
```css
/**
 * Override the text of CAPTCHAs. Don't be rude to robots.
 * Originally by mavica: https://maple.pet/
 * Updated by beeps: https://beeps.website/
 * 
 * Covers:
 * (1) Google reCAPTCHA
 * (2) hCaptcha
 * (3) Cloudflare Turnstile
 * (4) Microsoft CAPTCHA
 * (5) Friendly Captcha
 * (6) ALTCHA
 */
 
/* 1 */ #recaptcha-anchor-label,
/* 2 */ body > div#anchor > div.label-container > label-td > label-tc > div#label,
/* 3 */ div#content div#challenge-stage div.cb-c label.cb-lb span.cb-lb-t,
/* 4 */ #root > .box > .box > p[data-theme="home.instructions"],
/* 5 */ .text:is([data-loc="t_ready"], [data-loc="t_completed"]),
/* 6 */ label[for="altcha_checkbox"] {
  font-size: 0 !important;
  line-height: 0 !important;
}

/* 1 */ #recaptcha-anchor-label::before,
/* 2 */ body > div#anchor > div.label-container > label-td > label-tc > div#label::before,
/* 3 */ div#content div#challenge-stage div.cb-c label.cb-lb span.cb-lb-t::before,
/* 4 */ #root > .box > .box > p[data-theme="home.instructions"]::before,
/* 5 */ .text:is([data-loc="t_ready"], [data-loc="t_completed"])::before,
/* 6 */ label[for="altcha_checkbox"]::before {
  font-size: 14px;
  line-height: 1.2;
}

/* 1 */ #recaptcha-anchor-label::before,
/* 2 */ body > div#anchor > div.label-container > label-td > label-tc > div#label::before,
/* 3 */ div#content div#challenge-stage div.cb-c label.cb-lb span.cb-lb-t::before,
/* 5 */ .text[data-loc="t_ready"]::before,
/* 6 */ label[for="altcha_checkbox"]::before {
  /* Message that usually appears next to a challenge. */
  content: "I'm a robot";
}

/* 4 */ #root > .box > .box > p[data-theme="home.instructions"]::before {
  /* Message that usually appears before a challenge. */
  content: "Prove you are a robot.";
}

/* 5 */ .text[data-loc="t_completed"]::before {
  /* Message that usually appears after completing a challenge. */
  content: "You're a robot!";
 }
```
<!-- prettier-ignore-end -->

Apply the code according to [your browser's requirements]({{ '/blog/2023-04-26-using-userstyles-in-2023/' | url }}). You can see if it's worked by going to the [reCAPTCHA demo](https://google.com/recaptcha/api2/demo) or [hCaptcha demo](https://accounts.hcaptcha.com/demo) pages.

If there are other CAPTCHA systems that aren't included yet, let me know! I'll try and update this style to account for them.

Thanks again to [mavica](https://maple.pet). Why not check out bytes [Netizen link cache](https://links.netizen.club)? It makes me wanna make some 88&times;31 pixel buttons.

## Caveats

A few caveats:

- Cloudflare has started making versions of their CAPTCHA that use shadow roots—tl;dr, parts of the webpage which are isolated from the rest of the page. User styles are unable to affect things in shadow roots, so this style cannot override them.
- ALTCHA is a self-hosted CAPTCHA that can be heavily customised by the user. Although the userstyle _should_ still override the text, it won't look seamless in all instances.

## Updates

- 2023-12-12: Updated to add [Friendly Captcha](https://friendlycaptcha.com/) support and restructure the code a little.
- 2024-05-17: Code updated to account for updates to Cloudflare Turnstile. Thanks to rk for helping identify the changes.
- 2025-04-29: Updated to account for changes to Friendly Captcha.
- 2025-05-09: Added [ALTCHA](https://altcha.org/) support and caveats section.
- 2025-08-09: Updated caveats with more information about why the userstyle doesn't always work with Cloudflare Turnstile.
