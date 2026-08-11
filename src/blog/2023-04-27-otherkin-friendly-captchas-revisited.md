---
title: Otherkin-friendly CAPTCHAs, revisited
date: 2023-04-27
updated: 2026-08-05
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

{% from "src/_macros/jump-link.njk" import kimJumpLink %}

{% image "/images/robot-captcha.png", "A fake screenshot of a checkbox-type CAPTCHA, with the text reading 'I am a robot' and the box checked." %}

{% callout %}
This is an updated version of [a blog post by mavica](https://maple.pet/blog/fighting-otherkin-erasure-from-captchas). All credit for this idea belongs to byte.
{% endcallout %}

For some reason, CAPTCHAs have a bit of a thing for telling the user they are human. I mean, it's literally in the name: "Completely Automated Public Turing (test to tell) Computers and **Humans** Apart". CAPTCHA.

[I reject that label.]({{ '/about/nonhuman/' | url }}) I am not human. Stop telling me that my ability to click a box, type some letters, or know what a traffic light is automatically makes me human. I'm pretty sure a capable machine learning algorithm or a decently intelligent vole could do the same things.

In [yesterday's post about userstyles]({{ '/blog/2023-04-26-using-userstyles-in-2023/' | url }}), I made note that I use them to replace the text on CAPTCHAs with identity-affirming equivalents—erasing that unnecessary little microaggression from my day.

Perhaps unsurprisingly, I know a lot of folks who feel the same way and have asked how to do it, so here's the userstyle code I use, adapted from [the code by mavica](https://maple.pet/blog/fighting-otherkin-erasure-from-captchas). Replace the text with something more appropriate to your species or form!

<p class="kimBody">{{ kimJumpLink({
  href: "https://gist.github.com/querkmachine/8e34d68d5f1626387fcaf103ff1d6e08/raw/otherkin-friendly-captchas.user.css",
  text: "View and install user style"
}) }}</p>

Apply the code according to [your browser's requirements]({{ '/blog/2023-04-26-using-userstyles-in-2023/' | url }}). You can see if it's worked by going to the [reCAPTCHA demo](https://google.com/recaptcha/api2/demo) or [hCaptcha demo](https://accounts.hcaptcha.com/demo) pages.

If there are other CAPTCHA systems that aren't included yet, let me know! I'll try and update this style to account for them.

Thanks again to [mavica](https://maple.pet). Why not check out bytes [Netizen link cache](https://links.netizen.club)? It makes me wanna make some 88&times;31 pixel buttons.

## Caveats

A few caveats:

- Cloudflare has started making versions of their CAPTCHA that use shadow roots—tl;dr, parts of the webpage which are isolated from the rest of the page. User styles are unable to affect things in shadow roots, so this style cannot override them.
- ALTCHA is a self-hosted CAPTCHA that can be heavily customised by the website implementing it. Although the userstyle _should_ still override the text, it won't look seamless in all instances.

## Updates

- 2026-08-05: Quick lil ALTCHA fix. This is now hosted as a GitHub Gist. If your user style manager supports it, [clicking this link will install the style](https://gist.github.com/querkmachine/8e34d68d5f1626387fcaf103ff1d6e08/raw/5ed59e305b178cd7823d0ec915a1bafddcc91a40/otherkin-friendly-captchas.user.css) and allow future updates to be applied automatically without you having to come back here.
- 2023-12-12: Updated to add [Friendly Captcha](https://friendlycaptcha.com/) support and restructure the code a little.
- 2024-05-17: Code updated to account for updates to Cloudflare Turnstile. Thanks to rk for helping identify the changes.
- 2025-04-29: Updated to account for changes to Friendly Captcha.
- 2025-05-09: Added [ALTCHA](https://altcha.org/) support and caveats section.
- 2025-08-09: Updated caveats with more information about why the userstyle doesn't always work with Cloudflare Turnstile.
