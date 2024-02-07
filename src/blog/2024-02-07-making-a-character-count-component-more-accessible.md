---
title: Making a character count component more accessible
date: 2024-02-07
tags: [web development]
metadata:
  description: A blog post I didn't write, on a website that isn't mine, but about things that I did.
---

This post is a bit of a cheat.

You should go over to this other website and read [this blog post about making accessibility improvements to a character count component](https://dav-idc.com/making-a-character-count-component-more-accessible/).

[David Cox](https://dav-idc.com/), my (now, sadly, former) colleague at the Government Digital Service has published a belated writeup of work we did together on the GOV.UK Design System's [character count component](https://design-system.service.gov.uk/components/character-count/) back in 2022, when we were looking to resolve some screen reader issues that had developed since it was first built.

This was the first piece of "real" work I was involved in after joining the Design System team at GDS, and it was definitely a major change of pace for me!

I'd always cared about accessibility (enough to coerce it into my job title at my previous role), but had rarely been afforded the time and resources to thoroughly test and iterate on a problem in multiple screen readers. And now I was doing that on a fairly complex component that I wasn't too familiar with and **definitely** couldn't break.

A lot of the development process ended up involving trying something, test to see how well it worked, and then trying something else. There's a long, long comment chain on [the pull request](https://github.com/alphagov/govuk-frontend/pull/2577) if trawling that tickles your fancy.

It would've been a lot more difficult to pull off without David's expertise! If you're looking for an accessibility specialist in Canada you should probably hire him. 😉
