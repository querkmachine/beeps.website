---
title: "The Changelog: Mission 1"
date: 9999-01-01
tags: [meta, web development]
---

This is my personal website. Hello! This version of the website has been online for about three years, practically a record by my standards. Suffice to say that it's pretty 'finished' and set in its ways by now.

That doesn't, however, mean things are static. I still make code tweaks, additions and removals to the site all the time.

But why? Well, that's what I'm thinking of writing about in _The Changelog_. What motivates doing work that doesn't need doing? Why fix what ain't broke? What's going on inside the mind of a webbed developer during these things?

Here's a few of the things that have changed around here lately and _why_ they are.

## Added Mastodon faves, shares and comments on blog posts

Blog posts now show comments, favourites and shares from Mastodon. Kinda.

For quite a long time this site has had support for [Webmentions](https://www.w3.org/TR/webmention/), an IndieWeb specification that allows websites to tell other websites that they have been linked to. The site has been sitting and hoovering up mentions for a while, but not displaying them anywhere.

The problem I ended up finding was that **most interactions with the blog's content doesn't come from other IndieWeb websites**, it comes from social media services that don't implement Webmentions. Primarily, and perhaps unsurprisingly, through Mastodon and Cohost.

With inspo provided from [Kay Ohtie](https://coyotesin.space/) doing this exact thing, and knowing that [Mastodon's API is piss-easy to use]({{ '/blog/2023-02-07-building-a-bat-bot/#build-more-bots!' | url }}), I set about updating my Eleventy build to look at the Mastodon post associated with each blog post and to pull down metadata about it ([code here, for the curious](https://github.com/querkmachine/beeps.website/blob/84ac4dba089d197b25570ac3d477f8374d946958/src/blog/blog.11tydata.js)).

This isn't really doing the same thing as Webmentions. Looking at one interactions on a single post doesn't capture any comments on shared versions, or any comments made about it outside of that reply chain, but it's close enough that it feels like it captures the bulk of what is being said.

{% character character="ash", variant="tongue" %}
It makes the blog feel a bit less like it's shouting into a void. At least now the void can shout back.
{% endcharacter %}

I implemented my version of it a little different to Kay, principally in that I wanted all of this API nonsense to happen during the Eleventy build process and for the comments to be rendered out with the rest of the page, rather than pinging the API endpoints on individual client visits.

I do it for (what I think are) a few good reasons though:

1. **It's free caching.** I don't wanna be pinging my Mastodon instance on every page load and every spidering. It's unnecessary for data that will be largely static after a while.
2. **It maintains my control over what is displayed on my website.** There is intrinsically a time gap between someone interacting with a post and that interaction being grabbed, built and deployed. That gives me time for spam and other bad actors to be quietly dealt with before they ever get here.
3. **It helps keep things accessible.** No dynamic loading of content means no need to implement live regions or fancy announcements. Everything that will be on the page is on the page from the moment it's finished loading. It's just easier that way.
4. **I want to reduce my reliance on JavaScript.** This isn't because JavaScript is some big evil thing that should never be used, but because I want the content of pages to be easily seachable and archivable. (This will come up again later.)

There are downsides. Interaction data will only get updated when the site is redeployed, and over time there is the ability for content rot to set in, such as profile pictures that have since been deleted failing to load.

Ultimately it's not perfect. I tried to do some funky GitHub Actions stuff to cache the API responses, so that repeated rebuilds of the site in a short time span wouldn't blam Mastodon, but that hasn't worked as I intended. [Answers on a postcard, please.](https://github.com/querkmachine/beeps.website/issues/37)

## Redesigned and reworked OpenGraph images

OpenGraph images, for those not in the know, are those neat little images you get when you post a link to them on a bunch of websites and apps. OpenGraph images have also been a bit of a sticking point on this website.

Originally, images were generated based on [this method by Bernard Nijenhuis](https://bnijenhuis.nl/notes/automatically-generate-open-graph-images-in-eleventy/) where you use Eleventy to first build SVG files and then use eleventy-img to process them into JPEGs. This worked just fine in the early days when I manually performed builds and deploys from my laptop.

And then I made a continuous integration pipeline where all this stuff built and deployed itself automatically. And whoops, now my fonts don't work. Womp womp.

It turns out this process was pretty much limited to only working with locally installed fonts, a veil my webfont shall never pierce.

I've made quite a few attempts to work around this limitation for the sake of consistent branding. From the mainstream Eleventy plugins specifically for this purpose (which usually had one downside or another) to capturing the images through [Puppeteer](https://pptr.dev/) instead (worked but was painfully slow to run).

Ultimately, I said hell to that and decided to maybe stop trying to reinvent that particular whell. I copied what Eleventy creator Zach Leatherman did and [just used a goddamn online service for it](https://www.zachleat.com/web/automatic-opengraph/).

OpenGraph images are now generated from normal HTML pages ([like this one]({{ page.url + 'opengraph/' | url }})), and passed through the [Eleventy screenshot service](https://www.11ty.dev/docs/services/screenshots/), which does all of the converting, caching and webfont wrangling for me.

I don't exactly feel _proud_ about this solution, especially given I don't love handing stuff off to third-parties outside of my control (this will come up again later), but as OpenGraph images aren't particularly critical to how the website works, I'm willing to let it slide. For now.

## Improvements to third-party content embedding

Speaking of wanting to reduce reliance on JavaScript, wanting the content of pages to be easily seachable and archivable and not loving handing stuff off to third-parties outside of my control...

A few posts on this site have embedded YouTube videos, included via iframes. A few others have embedded tweets, using Twitter's JavaScript-based embedding widget.

Mmm, not a fan of those. Especially now, I can't say I trust either of those organisations to be particularly considerate with how they collect user data or particularly long-lived given their ongoing enshittification.

### Tweaks to YouTube embeds

**YouTube embeds** on this site have always, for as long as this site has existed, used the 'privacy enhanced' `nocookie` version of YouTube embeds. It doesn't exactly stop YouTube from gathering data about viewers of the embed, but it does make it much harder for them to associate that data with an existing user account.

{% figure caption="Dude, Thomas. Wanna go to the club With Olan and. Me?" %}
{% youtube "2J5tjfqbWkA", { aspectRatio: "4/3", title: "Poptart, a video by the comedy trio Balloon Shop, where rapid editing cuts are used to make the characters speak and dance in a purposefully disjointed and surreal manner. It's very inspirational." } %}
{% endfigure %}

{% character character="ash", variant="love" %}
I watch this video a lot... as in multiple times a year... for over ten years.
{% endcharacter %}

Even if you're logged in to YouTube right now, it won't know if you've watched the video embedded above, because the cookies that would normally tie embeds and YouTube together just cannot exist at the protocol level. To me, that's just good courtesy.

None of that has changed, but now embeds can have their aspect ratios changed (they were previously hardcoded as 16:9) and they have configurable labelling for accessibility purposes. Nice.

### Abolishing Twitter embeds

It's the **Twitter embeds** that I've been most wanting to just strip out entirely.

As of late I've started getting stricter with my blocking of adverts, trackers and other online guff that follows you around ([gee, I wonder why, YouTube](https://arstechnica.com/google/2023/11/youtube-tries-to-kill-ad-blockers-in-push-for-ad-dollars-premium-subs/)).

As a result, quite a lot of websites that embed tweets in them just... don't anymore. And a shocking number of those websites provide absolutely nothing as a fallback. Zilch. Nada.

That sucks. And as I removed myself from Twitter quite some time ago now, I think it's only reasonable that I do the same on my own website. Removing the widget embed code is only going to be doing people favours anyway.

Tweets now have their own shortcode where, should I actually find reason to embed one again, the entire content and context shall be provided in the post, in bog-standard boring HTML, and without tracking or analytics scripts. Huzzah.

## Wrap up

All of these changes are live now and have been applied retroactively where they can. Mastodon interaction gubbins only go back to the start of 2023, as they're configured on a post-by-post basis and it's rather time consuming.

Huh, there's actually quite a lot of posts here now.
