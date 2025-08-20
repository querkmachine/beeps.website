---
layout: generic.njk
title: Cool links
updated: 2025-08-09
metadata:
  description: Cool sites on the information cyber highway that I like.
cssComponents:
  - character
  - button-grid
---

{% from "src/_includes/88x31-button.njk" import kim88x31Button %}

I am remiss that [websites these days don't just link to cool things anymore]({{ '/blog/2023-11-27-buttons/' | url }}). Of course, when I wrote that article, this website didn't do that either, so let's right that wrong.

Here's some lesser known neat webbed sites I like.

{% character character="ash", variant="alarmed" %}
I'm not responsible for the content of any of these sites, which might change at any time without me noticing. I feel like I shouldn't need to clarify that.
{% endcharacter %}

Last updated: {{ updated | formatDate('human') }}

## Friends, acquaintances, and personal sites I just find quite neat

Personal websites are _the bomb_. In an era where so much self-expression has moved to social media, having a website that is entirely your own is almost like an act of individual defiance. There are no Linktrees or Squarespaces here.

Here's some websites belonging to people I am at least vaguely familiar with, because they deserve some link love. (And yes, quite a lot of them are furries.)

<div class="kimButtonGrid">
{%- for i in buttons.friendsitesButtons %}{{- kim88x31Button(i) -}}{%- endfor %}
</div>

<ul class="kimList kimList-bulleted kimList-columns">
  {%- for i in buttons.friendsites %}
  <li><a class="kimLink" href="{{ i.url }}">{{ i.alt }}</a></li>
  {%- endfor %}
</ul>

## Neat, niche YouTube channels

These channels are neat, and most of them don't even have a million subscribers, which is somehow not a lot these days.

- [Auto Schenanigans](https://www.youtube.com/@AutoShenanigans) has a bloke drive around the UK and sardonically tell you things about roads and petrol. He's kinda like one of those train YouTubers but for motorways.
- [Benjamin Partridge](https://www.youtube.com/@beefanddairynetwork9273) is known for several of comedy podcasts, but for some reason his YouTube channel consists almost entirely of Magnum ice cream reviews.
- [Chain Bear](https://www.youtube.com/@chainbear) makes video essays about Formula 1 and motorsport, usually to explain some piece of technology or weird application of the rules. They're pretty calming, and proved quite useful when I was first getting into F1.
- [Eddache](https://www.youtube.com/@eddache) makes animated video essays about animation. Also sometimes non-animated things.
- [FUNKe](https://www.youtube.com/@FUNKe) makes cool, animated video essays about video games (and somehow the band Weezer without ever actually making a video _about_ Weezer). I can't say I play games (or Weezer) enough to really get it, but the presentation style is da bomb y'all.
- [The Infinite Review](https://www.youtube.com/@TheInfiniteReview) seeks to make a review about everything in the universe ever. It might take a while.
- [Jago Hazzard](https://www.youtube.com/@JagoHazzard) has a bloke train around London and sardonically tell you things about railway lines and rolling stock. He's kinda like one of those car YouTubers but for the London Underground.
- [Junkball](https://www.youtube.com/@JunkBallMedia) makes video essays about stupid things in _Star Trek_ and if that doesn't sell you then there's probably nothing here for you.
- [Linus Boman](https://www.youtube.com/@LinusBoman) makes videos about design and typography, ranging from history lessons to conceptual redesigns. Videos don't come often, but they're always exceptionally well produced and presented.
- [Marcel Vos](https://www.youtube.com/@MarcelVos) explains and breaks the RollerCoaster Tycoon games of my youth.
- [Mr V's Garage](https://www.youtube.com/@MrVsGarage) makes a heady mix of extremely-over-the-top-elaborate videos (as well as general news and info) about formula racing.
- [Noodle](https://www.youtube.com/@noodlefunny), like FUNKe, makes hella enjoyable animated video essays about video games (and sometimes other things).
- [Planet Clue](https://www.youtube.com/@planetclue) makes deep dive essays into technology and game franchises from the 90s and 2000s.
- [Shadok](https://www.youtube.com/@shadokwastaken) is an animator who makes funny little videos. They also make the LOVEWEB series of animated video essays about internet culture.
- [Squirrels at the Window](https://www.youtube.com/@Squirrels_at_the_window). It's just squirrels. We like squirrels.

## Blogroll

Blogs that I actively keep tabs on and read at least some quantity of the posts.

- [Adam Silver](https://adamsilver.io/) quite literally wrote [the book on form design](https://formdesignpatterns.com/) and his blog is one of the first places I tend to look when wondering how best to word a question or structure a form.
- [Adrian Roselli](https://adrianroselli.com/) is a specialist in web accessibility, unafraid of doing deep dives into the nitty-gritty and loudly calling out the failures of major corporations alike. Truly an inspiration.
- [Dhole Moments](https://soatok.blog/) mostly writes about cryptography, technology, the furry fandom, and all the ways those things frequently intersect.
- [Food is Stupid](https://foodisstupid.substack.com/). This blog is cursed. This food is cursed. None of you are without sin. (Half the posts are behind a paywall, such is the business of blogging, but the rest of them are still excellent.)
- [Xe Iaso](https://xeiaso.net/) writes about all sorts of software things that I barely understand but find interesting anyway. Also where I stole the idea of having character callouts in blog posts, though my reasons are far less Socratic.

## Other neat spots

Miscellany, &c.

- [The Cutting Room Floor](https://tcrf.net/) documents all the parts of video games that made it into the files but didn't make it into the final game. It's a fascinating insight into how popular games were developed and refined.
- [Every Noise at Once](https://everynoise.com/) is a journey through the history of music genres all the way from Russian choir to 'deep deep tech house', all of them with example clips and a huge array of artist information and statistics.
- _[Meet Me In The Woods](https://mmitwcomic.neocities.org/)_ is a sci-fi mystery webcomic. It's also indirectly the source material for [my fursona]({{ '/about/furry/' | url }}). I'm totally not biased.
- _[Out-of-Placers](https://valsalia.com/comic/out-of-placers/)_ is a fantasy webcomic about coming to terms with change. It features lots of fun and thought-out speculative biology. (Be aware that it can get sorta not safe for work at times.)
- _[Pipe Up!](https://pipeup.thecomicseries.com/)_, a webcomic about a rabbit hosting [a plural system]({{ '/about/olive/' | url }}) and how they handle their usual front going missing.

## My dumb links

Some other webbed sites of mine that might be of interest.

- [GOV.UK Browser Data]({{ '/govuk-browser-data/' | url }}) — collected browser and operating system analytics from the GOV.UK website
- [Twitter archive](//tweets.beeps.website) — archive of my Twitter posts from before I left the site
- [placeholder.rocks](//placeholder.rocks/) — _Steven Universe_ placeholder image generator
- [placeponi.es](//placeponi.es/) — _My Little Pony_ placeholder image generator

### Character playlists

I've had a lot of [furry] characters and fursonas over the years, many of them with fairly distinct personalities and interests, and with that comes distinct music taste!

For some years I've curated music into playlists based on which of my critters would most like them. They're public on Apple Music for other's curiosity and enjoyment.

- [Alexander's playlist](https://music.apple.com/gb/playlist/character-playlist-alexander/pl.u-V9D77e9t10Ro5k) — electronic, dance
- [Ash's playlist](https://music.apple.com/gb/playlist/character-playlist-ash/pl.u-JPAZzKNuWvm7gA) — alternative pop and rock
- [Emy's playlist](https://music.apple.com/gb/playlist/character-playlist-emy/pl.u-38oWWgetg1vRp8) — electronic, classic rock
- [Grey's playlist](https://music.apple.com/gb/playlist/character-playlist-grey/pl.u-mJy81mPsBKb87M) — alternative and classic rock, hip-hop
- [Kim's playlist](https://music.apple.com/gb/playlist/character-playlist-kim/pl.u-9N9LXAdT7DjRq0) — pop, R&B
- [Meredith's playlist](https://music.apple.com/gb/playlist/character-playlist-meredith/pl.u-9N9LLpyT7DjRq0) — 4'33" by John Cage
- [Tori's playlist](https://music.apple.com/gb/playlist/character-playlist-tori/pl.u-DdANNBoTlAjpZx) — indie and alternative rock

### Spreadsheets of random things

I like to spreadsheet some very random things. Don't even ask why, I don't know.

- [My Pokémon card collection](https://docs.google.com/spreadsheets/d/1ksxzmEJv55HA5d_OF7WboRJAq6RvJn8TmNY8t9rDSxs)
- [Rating various energy drinks out of 10](https://docs.google.com/spreadsheets/d/1pwVmU1uGuxEN8s0UAMVPwaGSYMn2DXYG8fjk5oIurIM)
- [Every piece of Apple hardware I've ever owned](https://docs.google.com/spreadsheets/d/1aXLbc45k2r6z4pXtMruZZfrdYmOhrCvPk7NFYaSRpf4)
- [Recurring _Star Trek_ character appearances and the in-universe series chronology](https://docs.google.com/spreadsheets/d/1imQVy6udrv9muzmet7poyVhM2tTdosbbOFwpPfZqLmI)

## Buttons

These are largely sourced from [the 88x31 GIF Collection](https://cyber.dabamos.de/88x31/), [the 88x31 Archive](https://hellnet.work/8831/) and [Yesterweb's buttons page](https://yesterweb.org/graphics/buttons).

<div class="kimButtonGrid">
{%- for i in buttons.random %}{{- kim88x31Button(i) -}}{%- endfor %}
</div>

## Linking back to this website

Use any of these buttons, if you so desire. You can acquire these buttons programatically via the [.well-known/button schema](https://codeberg.org/LunarEclipse/well-known-button).

<div class="kimButtonGrid">
{%- for i in buttons.beeps %}{{- kim88x31Button(i) -}}{%- endfor %}
</div>
