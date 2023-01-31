---
title: Making a bat bot
date: 9999-01-01
tags: [web development]
draft: true
---

I recently left Twitter. The reasons why probably need little explanation for a contemporaneous reader in the know.

{% character variant="angry" %}
Musk's takeover and subsequent mistreatment of literally thousands of employees—be it emotional abuse, mass redundancies, revenge firings, witholding severence payments, overworking those who have little option but to stay—and the service as a whole—banning third-party clients, forcing arbitrary rule and feature changes, banning users who criticise him, unbanning credibly dangerous extremists—makes it pretty easy to not want to be on, both in principle and in practice.

[There's way more stuff](https://twitterisgoinggreat.com/) that I'm not even going to go into right now.
{% endcharacter %}

In short, [Mastodon is now my main short-form writing outlet](https://chitter.xyz/@batbeeps). What Mastodon didn't have though... was bat photos.

## Background

Twitter has a lot of accounts that post bat photos, be they for education, charity or just for bat enthusiasts like myself. Think your [Bat Conservation International](https://twitter.com/@BatConIntl), your [Bat World Sanctuary](https://twitter.com/batworld), your [Occassional Bat](https://twitter.com/OccasionalBat).

Having a steady stream throughout the day of them little critters having a nice time, it was lovely.

Unfortunately, none of these have made the move over to the Fediverse yet. My stream of bats dried up, and I was big sad.

Then I remembered that I know how to code things.

## Coding things

I have a bunch of prior experience using Mastodon's API. I'd used it before for random side projects like [Rainbow Dashboard](https://github.com/querkmachine/rainbow-dashboard), [Just One Toot](https://github.com/querkmachine/just-one-toot), and a Mastodon-based TweetDeck clone that I was working on until [someone beat me to it](https://mastodeck.com/).

Using Mastodon's API is, for the most part, actually remarkably simple: Create an access key on your account, attach it as a header to any RESTful requests you write, go. You don't even need to do the first step if it's something like accessing the public timeline. It's all remarkably... simple.

And so was writing [bat-bot](https://github.com/querkmachine/bat-bot/). To be fair, I cheated a little and used a Node wrapper around the Mastodon API, but pretty much identical functionality could be achieved using [JavaScript's Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) without much more code.

{% character variant="point" %}
Note to self: Refactor it to use the Fetch API.
{% endcharacter %}

All-in-all it took about 20 minutes to have a working prototype that could pick a random image, assemble metadata about it into a human-readable format, upload and post it to Mastodon. [It is _remarkably_ simple.](https://github.com/querkmachine/bat-bot/blob/main/index.js).
