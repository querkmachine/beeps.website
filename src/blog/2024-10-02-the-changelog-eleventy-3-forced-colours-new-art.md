---
title: "The Changelog: Upgrading to Eleventy 3, an artwork overhaul, and forced colour fixes"
date: 2024-10-02
tags: [web development, meta]
metadata:
  description: Updating to Eleventy 3, fixing some accessibility issues, and new art!
---

This website's been a flurry of activity lately, but unlike [the last Changelog]({{ '/blog/2024-03-06-the-changelog-dark-mode-redesign-building-utopia/' | url }}) the changes have been largely invisible to the average user.

Still, what happens behind the scenes is almost as important as what happens on the stage, so it's still worth talking about. It's about the _process_.

## New content!

I'm starting with content just because that's quick and easy.

I've added a [now page]({{ '/now/' | url }}) that provides a brief overview of just what I'm up to. This isn't a new idea (it's [nearly nine years old, in fact](https://sive.rs/nowff)), but it's a handy tool for anyone who doesn't follow any of my (increasingly few) social media presences.

The [homepage footer lists webrings]({{ '/#webrings' | url }}) now! I've wanted to add webrings to this site for a long time as part of [my lamentations about websites not having links anymore]({{ '/blog/2023-11-27-buttons/' | url }}), but I never quite figured how to do it without cluttering up the footer of every page. The solution? Just put them on the homepage, stupid.

[GOV.UK browser data]({{ '/govuk-browser-data/' | url }}), which I previously only posted on Mastodon, now has a much more comprehensive home here too.

## Eleventy 3!

The third major release of [Eleventy](https://11ty.dev), the static-site generator that this site is built on, came out just yesterday.

Inconveniently (or maybe conveniently?), it did so the day after I had upgraded everything to the canary release of Eleventy 3. As Eleventy 3 added native support for ESM (short for ECMAScript Modules, somehow), I took the time to convert everything from CommonJS to ESM-style JavaScript in the process.

What's the benefit of doing that? Heck if I know, but ESM seems to be the direction that the JavaScript ecosystem has been moving towards in recent years, and I suppose it does seem a little bit neater.

[Here's the Eleventy 3 upgrade's pull request](https://github.com/querkmachine/beeps.website/pull/82) if you want to see a lot of slightly rewritten JavaScript.

With Eleventy 3 comes some other useful features, such as being able to use [virtual templates](https://www.11ty.dev/docs/virtual-templates/) and the Eleventy 3 RSS plugin to [massively simplify my dodgy RSS feed generation](https://github.com/querkmachine/beeps.website/commit/291216b62b28c59e2d887e6458e74a0d1f661f7e).

## Artwork overhaul!

It was over a year ago now that I wrote about [the change of my primary fursona]({{ '/blog/2023-08-27-the-next-generation/' | url }}) from a robot bat to a wiggly alien noodle shapeshifter thing, and the site finally got updated to reflect that.

The homepage, footer, 404 page and social sharing images have all been updated with new, bespoke artwork commissioned from the very awesome [TuxedoDragon](https://tuxedodragon.art).

All of it's so good! And full of a bunch of little Easter eggs and references too!

I had some real paw-wringing moments over how big I could make them before having to worry about loading times.

{% figure caption="Before and after comparison of the homepage images and layout." %}
{% imageDiffer "./src/images/homepage-images-before.jpg", "The old homepage, with images featuring a minimalist robot bat waving and using a jetpack. The footer has a collage of various robot bats. Blog posts are presented in a vertical list.", "./src/images/homepage-images-after.jpg", "Afterwards, the top image is of an amphimoprpho wearing a black denim jacket sitting and shooting a peace sign. The blog posts are presented horizontally with an image of an amphimorpho focusing on a stickerbombed laptop. The footer has an amphimorpho popping out of it and smiling." %}
{% endfigure %}

The blog post list and footer both got little redesigns at the same time, the latter complete with a little paw bouncing animation. It's totally unnecessary, but I love it.

{% character character="ash", variant="blushing" %}
At the same time, the collection of character callout headshots was expanded with some new variants commissioned from [Caius Nocturne](https://nocturne.works/).
{% endcharacter %}

All of that work is included in [the 'Retire Emy' pull request](https://github.com/querkmachine/beeps.website/pull/42).

## Forced colour fixes!

Those who know me know that I care about online accessibility more than the average person. After all, what kind of world would create an infinite pool of knowledge and interconnection and then lock people out of it for having bad eyesight or poor motor control?

A shitty world, is the answer.

I _always_ try to build this website according to the best practices I've learned through my work, research and training, but I'm also not a corporation, and I don't have the resources for any of the stuff I build to be externally audited. In short, stuff slips by me sometimes.

And more recently that stuff has been forced colour modes. Forced colour modes are... modes that forcibly recolour parts of websites.

{% character character="ash", variant="happy" %}
Forced colour mode may sometimes be called "high contrast mode", but this is really a misnomer.

Although commonly used to enforce higher contrast colour combinations, forced colour modes are also used to create _less_ contrasting combinations, as too much contrast can cause eye strain and migraines in some people.
{% endcharacter %}

I'd never actually tested this website in a forced colour mode before, and [I found quite a few issues](https://github.com/querkmachine/beeps.website/issues/85) upon doing so.

{% character character="ash", variant="alarmed" %}
In Chromium browsers, you can emulate forced colours by going opening dev tools and clicking the '⋮' (three dots) menu, then navigating to 'More tools' → 'Rendering' → and scrolling down to 'Emulate CSS media feature forced-colors'.

If you're on Windows 10 or 11, you can activate forced colour modes under the 'Ease of Access' settings

macOS's colour modes work differently and don't 'bubble' down to to webpages. As far as I'm aware, using Chromium is the only way to test forced colours on macOS, but I'm very open to being wrong about this.
{% endcharacter %}

The [`forced-color-adjust` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/forced-color-adjust) and [system colour keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/system-color) are your friends here.

The [`forced-colors` media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors) allows you to make more specific customisations if forced colours are being used. For example, I use it to turn off the 'spotty' homepage background.

[Here's all the forced colour fixes](https://github.com/querkmachine/beeps.website/compare/1519c71a7e116ed6dfbe9fea9a1eb2bf7a6944d5..7ffd155cdef753ca38136a5ec0423935b17fb457) for your perusal.

I haven't quite squashed all of the accessibility bugs I found just yet, but I'm working on it!

## The one that got away

There was one bug reported to me this month by Tobi (hi!) that links become difficult to read when they're highlighted. Not a world-ending issue by any means, but I know some people like to highlight what they're currently reading to help them keep track of where they are on a page, so it's worth a look.

{% figure caption="Well that's not ideal." %}
{% responsiveImage "./src/images/link-highlight-bug.png", "A block of the homepage text highlighted, now appearing as white text against a pale green backing. Links appear in bright green, with the bottom half of each link obscured by a bright green box." %}
{% endfigure %}

It turns out that my usually semi-sorta-transparent 'thicc' underlines are forcibly recoloured when text is highlighted. That should be an easy fix, right? It says right on [the MDN page for `::selection`](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection) that you can recolour `text-decoration` (which includes underlines) when text is selected. Should be easy-peasy!

It's neither easy nor peasy.

Despite being part of [the relevant CSS specification](https://www.w3.org/TR/2015/WD-css-pseudo-4-20150115/#highlight-styling) since at least 2015, no browser engine has actually implemented the ability to alter _anything_ except for the `color` and `background-color` when text has been selected.

Actually, that's a lie. You can also set `text-decoration: none` to remove the highlight effect entirely. 🤦

Here's the open bugs reports for it for [Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=1612598) and [Safari](https://bugs.webkit.org/show_bug.cgi?id=233927) if you want to gently harass them to get on with it. [Chromium](https://issues.chromium.org/issues/352379284) _had_ one open, which was closed as irreproducible, which obviously shows they didn't even try.

Not sure what I'm gonna do with that other than potentially re-implement it some other way (back to `box-shadow`?), but it'd sure be nice if browsers just met the spec on this one.
