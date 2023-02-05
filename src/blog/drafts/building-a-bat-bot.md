---
title: Building a bat bot
date: 9999-01-01
tags: [web development]
draft: true
---

I recently left Twitter. The reasons why probably need little explanation for a contemporaneous reader in the know.

{% character variant="angry" %}
Musk's takeover and subsequent mistreatment of literally thousands of employees—be it emotional abuse, mass redundancies, revenge firings, withholding severance payments, overworking those who have little option but to stay—and the service as a whole—banning third-party clients, forcing arbitrary rule and feature changes, banning users who criticise him, unbanning credibly dangerous extremists—makes it pretty easy to not want to be on, both in principle and in practice.

[There's way more stuff](https://twitterisgoinggreat.com/) that I'm not even going to go into right now.
{% endcharacter %}

In short, [Mastodon is now my main short-form writing outlet](https://chitter.xyz/@batbeeps). What Mastodon didn't have though... was bat photos.

## Bats of Twitter

Twitter has a lot of accounts that post bat photos, be they for education, charity or just for bat enthusiasts like myself. Think your [Bat Conservation International](https://twitter.com/@BatConIntl), your [Bat World Sanctuary](https://twitter.com/batworld), your [Occassional Bat](https://twitter.com/OccasionalBat).

{% figure caption="Very relatable." %}

<blockquote class="twitter-tweet" data-dnt="true"><p lang="und" dir="ltr">AAAAAAAAAAAAAAAHHHHHH!!!! 🦇 <a href="https://t.co/XsUNcrvAKO">pic.twitter.com/XsUNcrvAKO</a></p>&mdash; Bats Nightly 🦇 (@BatsDaily) <a href="https://twitter.com/BatsDaily/status/1603676469766807555?ref_src=twsrc%5Etfw">December 16, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
{% endfigure %}

Having a steady stream of them little critters having a nice time throughout the day, it was lovely.

Bats aren't the only animals to get this treatment. Do you want photos of [capybaras](https://twitter.com/CapybaraHourly)? How about [fennec foxes](https://twitter.com/FennecEveryHr)? [Possums](https://twitter.com/PossumEveryHour)?

Unfortunately, [Twitter's looming API changes](https://twitter.com/TwitterDev/status/1621026986784337922) will likely see the end of these kinds of accounts, and many are yet to make the move over to the Fediverse. My stream of bats was drying up, and I was big sad.

Then I remembered that I know how to code things.

## How to code things

I have a bunch of prior experience using Mastodon's API. I'd used it before for random side projects like [Rainbow Dashboard](https://github.com/querkmachine/rainbow-dashboard), [Just One Toot](https://github.com/querkmachine/just-one-toot), and a Mastodon-based TweetDeck clone that I was working on until [someone beat me to it](https://mastodeck.com/).

Using Mastodon's API is, for the most part, actually remarkably simple: Create an access key on your account, attach it as a header to any RESTful requests you write, go. You don't even need to do the first step if it's something like accessing the public timeline. It's all remarkably... simple.

And so was writing [bat-bot](https://github.com/querkmachine/bat-bot/). To be fair, I cheated a little and used a Node wrapper around the Mastodon API, but pretty much identical functionality can probably be achieved using [JavaScript's Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) without much more code.

{% character variant="point" %}
Note to self: Refactor it to use the Fetch API.
{% endcharacter %}

All-in-all it took about 20 minutes to have a working prototype that could pick a random image, assemble metadata about it into a human-readable format, upload and post it to Mastodon. [It is _remarkably_ simple.](https://github.com/querkmachine/bat-bot/blob/main/index.js) It took longer to get my [botsin.space](https://botsin.space) registration approved.

For years, on and off, I've had a Twitter bot named [9000_beeps](https://twitter.com/9000_beeps) that took my regular tweets and remixed them into something new. This wouldn't be my first rodeo managing an automated account, which means I knew exactly what I hated about doing it: keeping it running.

Having a program that runs from now until the end of time is a pain in the ass when it comes to resource management, garbage collection and not accidentally overstepping usage limits.

My Raspberry Pi would usually die after a few weeks of running 9000_beeps, crashing from the built-up load of unrecoverable memory usage. I wanted to avoid problems like this altogether, so I instead turned to a recently made friend: GitHub Actions.

With Actions, [the posting script](https://github.com/querkmachine/bat-bot/blob/main/.github/workflows/post.yml) could be turned on once an hour, do its thing, and get turned off again. I wouldn't even need to host it, GitHub would handle everything but the actual code. We'll get back to how that went in a bit.

## Eternal gathering of the spotless bats

{% character variant="love" %}
With apologies to the [spotted bat](https://en.wikipedia.org/wiki/Spotted_bat).
{% endcharacter %}

With that done, now came the awfully time-consuming part: collating content.

I knew already from past side projects—namely my cartoon-themed placeholder image services [placeponi.es](https://placeponi.es) and [placeholder.rocks](https://placeholder.rocks)—that collating graphics is incredibly tedious.

Bat bot would be no exception.

If anything, it would be worse. For cartoons, every image would reliably be under the same copyright. Fan wikis and sites would have already collated galleries of the stuff that could be downloaded _fairly_ easily. (Unless they were on Fandom. [Screw Fandom.](http://awa.shoutwiki.com/wiki/Why_we_left))

This would not be the case here. Each photo would need individual attribution, and I couldn't just scrape online media galleries like Wikimedia Commons or the Encyclopedia of Life because I'd decided to have standards:

First, photos must depict living, healthy bats. This is a celebration of a lot of wonderful, often endangered, species. I don't want to include dead or sick bats.

Second, many photos of bats are of them being in unnatural situations, such as being inside cages, in human settlements or being held by people. Sometimes this is justified, such as when a bat is being transported, studied or is a rescue. Other times, however, this can be evidence of mistreatment or exploitation.

Where possible, I want to ensure that the bat is being handled responsibly by people who know what they're doing. This is hard to judge and impossible to be sure of, but if the photo is of a known biologist cautiously holding a bat in a darkened cave, that's a better sign than it being a person dressed like they're on holiday danging a bat from their fingers in the middle of a marketplace.

Third, I wanted to be sure I could actually use all of the images. In the wild world of animal-posting Twitter, there's usually very little regard given to proper attribution and licensing.

That's no good. I want my images to be public domain, licensed under Creative Commons, or otherwise useable under some copyleft license.

I wish that I could say I wrote some awesome code to do all that for me, but I didn't. I spent hours collating bat photos from a variety of sources, manually documenting photographers and licenses along the way.

## Teething problems

Bat bot, now renamed Hourly Bats and hosted at the imaginatively named [@batstbatsbats](https://botsin.space/@batsbatsbats) went live early the next afternoon. And it went pretty well!

Until, one hour, it just didn't post. A quick check found that the API request had timed out. Manually re-running the script posted successfully. Probably just a fluke.

There was quickly some repetition, which wasn't unexpected. The photo pool was still pretty small and mathematically there would be repeats, that's just how randomness is, but it wasn't a good initial look. I briefly pondered ways of reducing repetition, perhaps by keeping track of what had recently been posted and rerolling if a repeat was chosen, but as the bot worked via GitHub Actions and was pretty much memory-less, I quickly realised that would stray from my original desire to not have to keep an eye on the darn thing.

I figured I could live with repetition. Not as if everyone was going to see every single post anyway.

- image dimensions issue
- null???

## Conclusion

mastodon bots are easy it's nice and you should do it c:
