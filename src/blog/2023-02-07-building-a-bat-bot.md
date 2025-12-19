---
title: Building a bat bot
titleAccessible: Building a bat bot
titleSvg: "2023-02-07-building-a-bat-bot.svg"
date: 2023-02-07
tags: [web development]
metadata:
  description: I built a Mastodon bot that posts hourly pictures of bats. And you can too!
interactions:
  host: chitter.xyz
  username: batbeeps
  id: "109826013960339119"
cssComponents:
  - character
  - figure
  - social-embed
---

<div class="kim-!-margin-block-end-5" role="presentation" aria-label="An illustration of a robot bat broken down into various parts, scatted across a rectangular surface. The text 'Building a bat bot' is written on the facing side of the surface.">
{% include "../images/headings/2023-02-07-building-a-bat-bot.svg" %}
</div>

I recently left Twitter. The reasons why probably need little explanation for a contemporaneous reader in the know.

{% character variant="angry" %}
Musk's takeover and subsequent mistreatment of literally thousands of employees—be it emotional abuse, mass redundancies, revenge firings, withholding severance payments, overworking those who have little option but to stay—and the service as a whole—banning third-party clients, forcing arbitrary rule and feature changes, banning users who criticise him, unbanning credibly dangerous extremists—makes it pretty easy to not want to be on, both in principle and in practice.

[There's way more stuff](https://twitterisgoinggreat.com/) that I'm not even going to go into right now.
{% endcharacter %}

In short, [Mastodon is now my main short-form writing outlet](https://chitter.xyz/@batbeeps). What Mastodon didn't have though... was bat photos.

## Bats of Twitter

Twitter has a lot of accounts that post bat photos, be they for education, charity or just for bat enthusiasts like myself. Think your [Bat Conservation International](https://twitter.com/@BatConIntl), your [Bat World Sanctuary](https://twitter.com/batworld), your [Occassional Bat](https://twitter.com/OccasionalBat).

{% socialEmbed host="twitter.com", username="BatsDaily", number="1603676469766807555", date="2022-12-16T09:00:39.000Z" %}
AAAAAAAAAAAAAAAHHHHHH!!!! 🦇

{% image "/images/batsdaily-screm.jpeg", "A small brown bat lays belly-down on a rock, it's head pointing upwards and mouth wide open as though screaming." %}
{% endsocialEmbed %}

Very relatable.

Having a steady stream of them little critters having a nice time throughout the day, it was lovely.

Bats aren't the only animals to get this treatment. Do you want photos of [capybaras](https://twitter.com/CapybaraHourly)? How about [fennec foxes](https://twitter.com/FennecEveryHr)? [Possums](https://twitter.com/PossumEveryHour)?

Unfortunately, [Twitter's looming API changes](https://twitter.com/TwitterDev/status/1621026986784337922) will likely see the end of these kinds of accounts, and many are yet to make the move over to the fediverse. My stream of bats was drying up, and I was big sad.

Then I remembered that I know how to code things.

## Building the bat bot

{% figure float="right" %}
{% image "/images/robat-circuits.png", "Robot bat with a door on their torso open, exposing a circuit board-like pattern." %}
{% endfigure %}

I have a bunch of prior experience using Mastodon's API. I'd used it before for random side projects like [Rainbow Dashboard](https://github.com/querkmachine/rainbow-dashboard), [Just One Toot](https://github.com/querkmachine/just-one-toot), and a Mastodon-based TweetDeck clone that I was working on until [someone beat me to it](https://mastodeck.com/).

Using Mastodon's API is, remarkably... simple.

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

### Principle 1: Living

First, photos must depict living, healthy bats. This is a celebration of a lot of wonderful, often endangered, species. I don't want to include dead or sick bats, taxidermy models, or those infected by [white-nose syndrome](https://en.wikipedia.org/wiki/White-nose_syndrome).

### Principle 2: Loved

Second, many photos of bats are of them being in unnatural situations, such as being inside cages, in human settlements or being held by people. Sometimes this is justified, such as when a bat is being transported, studied or is a rescue. Other times, however, this can be evidence of mistreatment or exploitation.

Where possible, I want to ensure that the bat is being handled responsibly by people who know what they're doing. This is hard to judge and impossible to be sure of, but if the photo is of a known biologist cautiously holding a bat in a darkened cave, that's a better sign than it being a tourist danging a bat from their fingers in the middle of a sunny marketplace.

{% character variant="wave" %}
Some of the photos I've selected show people holding wild bats with their bare hands. This used to be common even in professional circles up until about 15 years ago.

Now, you should only even consider doing this if you've been recently vaccinated for rabies. Although the chance of acquiring rabies from a bat is very small, it's not zero, and bats don't exhibit visible rabies symptoms as many other animals do.

Always wear gloves when handling bats, the thicker the better.
{% endcharacter %}

### Principle 3: Licensed

Third, I wanted to be sure I could actually use all of the images. In the wild world of animal-posting Twitter, there's usually very little regard given to proper attribution and licensing. That's no good. I want my images to be public domain, licensed under Creative Commons, or otherwise useable under some permissive license.

This, unfortunately, excluded me from using the amazing works of [Dr. Merlin Tuttle](https://www.merlintuttle.org/), probably the world's pre-eminent bat biologist and photographer. He has [a wonderful gallery](https://merlintuttle.smugmug.com/), but at $10 per image, that's an expense well outside the scope of this project.

I wish that I could say I wrote some awesome code to do all of this image gathering and data collection for me, but I didn't. I spent hours collating bat photos from a variety of sources, manually documenting photographers and licenses along the way. That's just life sometimes.

## Teething problems

Bat bot, now renamed Hourly Bats and hosted at the imaginatively named [@batstbatsbats](https://botsin.space/@batsbatsbats) went live early the next afternoon. And it went pretty well! Except...

### Problem 1: GitHub's cron queue

I'd set up my posting GitHub Action so that the posted once an hour, at the top of the hour. Technically I was sneaky, knowing that lots of people would put it at exactly the top of the hour, so I actually put it at 59 minutes past the hour to try and jump the queue. That'd show them, I thought.

It didn't show them. It turns out that cron tasks on GitHub work more like a queue. You can request that a job happens at the top of the hour, but that isn't when your code will run—that's only when your code will get added to the queue, and that queue is frequently anywhere from 10 to 35 minutes long.

There isn't a whole lot you can do about this. Maybe queue the task super early and somehow keep it running until it hits the time you actually want to post? Seems wasteful. I figured this was a minor enough problem to just ignore. Bat pictures are not time-sensitive, I just want one posted every hour or so.

### Problem 2: Unstable server, unstable API

One hour, a bat picture didn't get posted.

A quick check found that the API request had timed out. botsin.space had been under some load at the time, so a request timing out wouldn't be out of the ordinary. I re-ran the posting action manually and it worked fine, so I just call this a fluke.

If I wanted to be entirely hands-off about it, I could add something that detects if the API request failed and retries it until it succeeds, but that's one of those problems that sounds simple but is actually a rabbit hole of unexpected complexity. If I have anything misconfigured or botsin.space is having issues, I'm suddenly responsible for a Denial of Service attack on their servers, and that's generally frowned upon.

Like the cron issue, I figured a rare missed post was probably not worth the complexity and resource-related risk of trying to fix it in code.

### Problem 3: Repetition, repetition, repetition

There was quickly some repetition, which wasn't unexpected. The photo pool was still pretty small and mathematically there would be repeats, that's just how randomness is, but it wasn't a good initial look. I briefly pondered ways of reducing repetition, perhaps by keeping track of what had recently been posted and rerolling if a repeat was chosen, but as the bot worked via GitHub Actions and was pretty much memory-less, I quickly realised that would stray from my original desire to not have to keep the darn thing running constantly.

[I did make some changes](https://github.com/querkmachine/bat-bot/commit/2c944182406ba5de38c70d1fce49a510060c40e4), replacing the time-based seed with the [random npm package](https://www.npmjs.com/package/random), which promises some form of uniform distribution.

This is theoretically a 'more random' solution, but as it remains stateless, repetition is still statistically unavoidable. I figured I could live with repetition. It's not as if everyone was going to see every single post, anyway, [right?](https://pounced-on.me/@coelacanthus/109815205260778899)

### Problem 4: The undocumented zone

Another issue occurred the next day where an image was rejected by the API because it was too large. Unusually, this wasn't because of filesize, but because of the image's 'physical' dimensions. In this case, the image was 5184&times;3456 pixels in size.

This was a bit weird, as Mastodon's API docs make no mention of any such limitation, and the more 'user-friendly' user guide [only mentions the default configuration's 8 megabyte filesize limit](https://docs.joinmastodon.org/user/posting/#media).

It turns out that Mastodon _does_ have a limitation on the dimensions of uploaded images, [the (hardcoded!) `MAX_MATRIX_LIMIT` setting](https://github.com/mastodon/mastodon/blob/main/app/models/concerns/attachmentable.rb#L8), which is simply the pixel area of the image: width multiplied by height.

The limit is 16,777,216 pixels. My rejected bat photo was 17,915,904 pixels. Heck.

Mastodon resizes all uploaded imagery to 1920&times;1080, so shrinking down the source images wouldn't have a tangible effect on the bot's output anyway. I did that.

Still, this is an interesting omission in Mastodon's developer documentation. Someone should fix that.

### Problem 5: null

I wouldn't expect that passing the `null` keyword as a value to an API would actually post the word 'null', but apparently, Mastodon's API does that. Pass an empty string instead. Now you know.

## Build more bots!

I don't really have a conclusion to this, but if I were to scrounge one from the depths of literary consciousness, it would be a call to action to build more cool, useful and creative Mastodon bots.

Mastodon's API is just... really easy to use. You don't need to do any jumping through authorisation hoops to get an access token, the usage limits tend to be quite liberal, there's no paywall, and there's no need to even register an account if you're dealing entirely with public data.

(That said: There is an unwritten rule in the fediverse that content scrapers are not welcome. Many Mastodon users value their privacy and [don't take kindly to their posts being copied](https://fossacademic.tech/2022/10/18/notesOnNobreEtAl.html) without explicit permission.)

{% character variant="angry" %}
That doesn't mean Mastodon's developer experience is _all_ good, either. As noted, the documentation is sometimes lacking, and I've previously had a very hard time getting [the streaming aspects](https://docs.joinmastodon.org/methods/streaming/) of it to work at all.

The docs say to use it with an `Authorization` header, but neither the WebSocket nor EventSource specifications—the two main ways of interacting with streaming APIs in client JavaScript—support adding headers to requests.

It boggles my mind how anyone is supposed to work that one out by themselves.
{% endcharacter %}

Still, Mastodon is simple enough for all manner of fun little side-projects and it's certainly a nice place to do that kinda thing. Dare I say, often nicer than Twitter ever was.

Anyway, go code cool shit.
