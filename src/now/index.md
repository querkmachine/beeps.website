---
layout: generic.njk
title: beeps NOW!
updated: 2024-09-30
metadata:
  description: What I'm up to at the moment
---

{% block head %}

<style>.page-api-feed { list-style-type: none; padding-inline: 0; } .page-api-feed li { border-block-end: 1px solid var(--color-furniture); padding-block: var(--space-2); } .page-api-feed img { float: inline-start; margin-block-end: 0; margin-inline-end: var(--space-1); }</style>

{% endblock %}

A "now" page is [a conceptual accompaniment to an about page](https://nownownow.com/about). While an about page can tell you about my background and my identity, it doesn't tell you about what I'm currently doing or what I currently care about. Thus, this.

Last updated: {{ updated | formatDate('human') }}

## Now

I'm working as a frontend developer on the [GOV.UK Design System](https://design-system.service.gov.uk/) team, currently resolving issues on the Design System website itself following an external accessibility audit and contributing to [REDACTED] work.

I'm also assisting with updates to the [WCAG Primer](https://alphagov.github.io/wcag-primer/).

We're most of the way through [The Year of Order]({{ '/blog/yearly-theme/' | url }}), during which I'm trying to get my various shits together. This has most recently manifested as reorganising and stocking up my kitchen.

I'm taking a bit of a break from traveling, having recently made multiple business and leisure trips to London, Exeter and Liverpool in the last couple of months.

Lately, I've been jamming out to [_SMILE! :D_](https://album.link/gb/i/1740856393) by Porter Robinson, rewatching _Star Trek: Enterprise_ alongside [_The Greatest Generation_ podcast](https://maximumfun.org/podcasts/greatest-generation/), and playing far too much [Factorio](https://www.factorio.com/).

### Listening

{{ lastfmFeed | safe }}

### Watching

{{ traktFeed | safe }}

## Recently

At work, I lead development and release of the new [service navigation component](https://design-system.service.gov.uk/components/service-navigation/) and [password input component](https://design-system.service.gov.uk/components/password-input/). I also helped run [Design System Day 2024](https://design-system.service.gov.uk/community/design-system-day-2024/).

I recently took some time off work to complete my 33rd orbit around the sun, time that ultimately was mostly used to work on side projects, including:

- Adding newly commissioned artwork to this very website.
- Finishing the initial version of the [BristolFurs website](https://bristolfurs.co.uk).
- Building the [Amphimorpho Webring](https://noodle-r.ing/) and the underlying Eleventy boilerplate project, [eleventy-webring](https://github.com/querkmachine/eleventy-webring).

I recently paid a visit to the [F1 Exhibition](https://f1exhibition.com/london/) and the London Podcast Festival, where I watched [_The Beef and Dairy Network Podcast_](https://maximumfun.org/podcasts/beef-and-dairy-network/) for the first time and [_The Greatest Generation_](https://maximumfun.org/podcasts/greatest-generation/) for the second.

## Soon

I'm looking forward to the upcoming Public Service Broadcasting album, [_The Last Flight_](https://album.link/i/1748134573).

My partners and I have been pondering which furry conventions we're going to attend in the coming year, with [NordicFuzzCon](https://nordicfuzzcon.org/) looking pretty likely.

I'll be porting this website over to using [Eleventy 3.0 and ESM](https://www.11ty.dev/blog/canary-eleventy-v3/) in the near future.
