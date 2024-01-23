---
title: "The Changelog: Interactions, OpenGraph, and the curse of third-party code"
date: 2024-01-23
tags: [meta, web development]
metadata:
  description: The first in a potential series where I talk about updating and maintaining this very website.
interactions:
  host: chitter.xyz
  username: batbeeps
  id: "111804875011370844"
---

This is my personal website. Hello! This version of the website has been online for about three years, which is practically a record by my standards. Suffice to say that it's pretty "finished" and set in its ways by now.

That doesn't, however, mean things are static. I still make code tweaks, additions, and removals to the site all the time.

But why? Well, that's what I'm thinking of writing about in _The Changelog_: What motivates doing work that doesn't need doing? Why fix what ain't broke? What's going on inside the mind of a web developer doing these things?

For your delictation, a few thoughts on things that have changed around here recently and why they happened.

## Added Mastodon faves, shares and comments on blog posts

Blog posts now display comments, favourites and shares from Mastodon below them. At least, kinda.

For quite a long time this site has had support for [Webmentions](https://www.w3.org/TR/webmention/), an IndieWeb specification that allows websites to tell other websites that they have been linked to. The site has been sitting and hoovering up mentions for a while, but not displaying them anywhere.

The problem I ended up finding was that **most interactions with the blog's content doesn't come from other IndieWeb websites**, they come from social media services that don't implement Webmentions. Primarily, and perhaps unsurprisingly, Mastodon and Cohost.

With inspo provided from [Kay Ohtie](https://coyotesin.space/) doing this exact thing, and knowing that [Mastodon's API is piss-easy to use]({{ '/blog/2023-02-07-building-a-bat-bot/#build-more-bots!' | url }}), I set about updating my Eleventy build to look at the Mastodon post associated with each blog post and to pull down metadata about it. [Mastodon code here, for the curious.](https://github.com/querkmachine/beeps.website/blob/84ac4dba089d197b25570ac3d477f8374d946958/src/blog/blog.11tydata.js)

This isn't really doing the same thing as Webmentions. Looking at one interactions on a single post doesn't capture any comments on shared versions, or any comments made about it outside of that reply chain, but it's close enough that it feels like it captures the bulk of what is being said.

{% character character="ash", variant="tongue" %}
It makes the blog feel a bit less like it's shouting into a void. At least now the void can shout back.
{% endcharacter %}

I implemented my version of it a little differently to Kay, mainly because I wanted all of this API-related nonsense to happen during the Eleventy build process. I also wanted the comments to be rendered out with the rest of the page, rather than pinging the API endpoints on individual client visits and dynamically populating them.

I do it for (what I think are) a few good reasons though:

1. **It's free caching.** I don't wanna be pinging my Mastodon instance on every page load and every spidering. It's unnecessary for data that will be largely static after a while.
2. **It maintains my control over what is displayed on my website.** There is intrinsically a time gap between someone interacting with a post and that interaction being grabbed, built and deployed. That gives me time for spam and other bad actors to be quietly dealt with before they ever get here.
3. **It helps keep things accessible.** No dynamic loading of content means no need to implement live regions or fancy announcements. Everything that will be on the page is on the page from the moment it's finished loading. It's just easier that way.
4. **I want to reduce my reliance on JavaScript.** This isn't because JavaScript is some big evil thing that should never be used, but because I want the content of pages to be easily seachable and archivable. (This will come up again later.)

There are downsides. Interaction data will only get updated when the site is redeployed, and over time there is the potential for content rot to set in, such as profile pictures that have since been deleted failing to load.

Ultimately, it's not perfect. I tried to implement some funky GitHub Actions stuff to cache the API responses, so that repeated rebuilds of the site in a short time span wouldn't blam Mastodon, but that hasn't worked as I intended. [Answers on a postcard, please.](https://github.com/querkmachine/beeps.website/issues/37)

## Redesigned and reworked OpenGraph images

OpenGraph images, for those who aren't familiar, are those neat little images that appear when you share a link on a bunch of websites and apps. OpenGraph images have also been a bit of a sticking point on this website.

When first implemented, images were generated based on [this method by Bernard Nijenhuis](https://bnijenhuis.nl/notes/automatically-generate-open-graph-images-in-eleventy/) where you use Eleventy to first generate SVG files and then use eleventy-img to convert them into JPEGs.

This worked just fine in the early days when I manually performed builds and deploys from my laptop. And then I made a continuous integration pipeline where all this stuff built and deployed itself automatically. And whoops, now my fonts don't work. Womp womp.

It turns out this method was limited to only working with locally installed fonts, a cursed veil my webfont shall never pierce.

I've made quite a few attempts to work around this limitation for the sake of consistent branding. From trying various mainstream Eleventy plugins made specifically for this purpose (which usually had one downside or another) to capturing the images through [Puppeteer](https://pptr.dev/) instead (worked but was painfully slow to run).

Ultimately, I said hell to that and decided to stop trying to reinvent that particular wheel. I copied what Eleventy creator Zach Leatherman did and [just used an online service to do it](https://www.zachleat.com/web/automatic-opengraph/).

{% set ogHtmlPage = (page.url + 'opengraph/') | absoluteUrl(site.domain) %}
{% set ogImage = ogHtmlPage | urlizeOpenGraphImage %}

OpenGraph images are now generated from normal HTML pages ([like this one]({{ ogHtmlPage }})), and passed through the [Eleventy screenshot service](https://www.11ty.dev/docs/services/screenshots/), which handles all of the converting, caching and webfont wrangling for me, spitting out [a lovely image]({{ ogImage }}).

I don't exactly feel _proud_ about this solution, especially given that I don't love handing stuff off to third-parties outside of my control (this will come up again later). However, as OpenGraph images aren't particularly critical to how the website works, I'm willing to let it slide. For now.

## Improvements to third-party content embedding

Speaking of wanting to reduce reliance on JavaScript, wanting the content of pages to be easily seachable and archivable and not loving handing stuff off to third-parties outside of my control...

A few posts on this site have embedded YouTube videos, included via iframes. A few other posts have embedded tweets, using Twitter's JavaScript-based embedding widget.

Mmm, not a fan of those! Especially now, I can't say I trust either of those organisations to be particularly considerate with how they collect user data or be particularly long-lived given their ongoing enshittification.

### Tweaks to YouTube embeds

**YouTube embeds** on this site have always, for as long as this site has existed, used the 'privacy-enhanced' `nocookie` version of YouTube embeds. It doesn't exactly stop YouTube from gathering data about viewers of the embed, but it does make it much harder for them to associate that data with an existing user account.

{% figure caption="Dude, Thomas. Wanna go to the club With Olan and. Me?" %}
{% youtube "2J5tjfqbWkA", { aspectRatio: "4/3", title: "Poptart, a video by the comedy trio Balloon Shop, where rapid editing cuts are used to make the characters speak and dance in a purposefully disjointed and surreal manner. It's very inspirational." } %}
{% endfigure %}

{% character character="ash", variant="love" %}
I watch this video a lot... as in multiple times a year... for over ten years.
{% endcharacter %}

Even if you're logged in to YouTube right now, it won't know if you've watched the video embedded above, because the cookies that would normally tie embedded players and YouTube together just cannot exist at the protocol level. To me, that's just good courtesy.

None of that has changed, but now embeds can have their aspect ratios changed (they were previously hardcoded as 16:9), and they have configurable labelling for accessibility purposes. Nice. [YouTube shortcode on GitHub.](https://github.com/querkmachine/beeps.website/blob/c5059b18fa7c130f08e70bc325587418602baa51/config/shortcodes/youtube.js)

### Abolishing Twitter embeds

It's the **Twitter embeds** that I've been most wanting to just strip out entirely.

As of late, I've started getting stricter with my blocking of adverts, trackers and other online guff that follows you around ([gee, I wonder why, YouTube](https://arstechnica.com/google/2023/11/youtube-tries-to-kill-ad-blockers-in-push-for-ad-dollars-premium-subs/)).

As a result, quite a lot of the websites I visit that previously had embedded tweets in them just... don't anymore. Be it Auntie Beeb or The Verge, being uncoupled from Twitter's widgets means gaping holes left in articles. And a shocking number of those websites provide absolutely nothing as a fallback. Zilch. Nada.

That sucks. Since I removed myself from Twitter quite some time ago now, I think it's only reasonable that I do the same on my own website. Removing the widget embed code is only going to be doing people favours anyway.

Tweets now have their own shortcode where, should I actually find a reason to embed one again, the entire content and context will be provided in the post, in bog-standard boring HTML, and without tracking or analytics scripts. Huzzah. [Twitter "embed" shortcode on GitHub.](https://github.com/querkmachine/beeps.website/blob/b62be1c0e6274369ecd43514ccd18d91900f707c/config/shortcodes/twitter.js)

## Wrap up

All of these changes are live now and have been applied retroactively to old posts where appropriate.

Mastodon interaction gubbins only go back to the start of 2023, as they're configured on a post-by-post basis and it's rather time consuming to dig through my entire History of Posting&trade; to dig up the associated toots.

Well. We're done here. Go away.
