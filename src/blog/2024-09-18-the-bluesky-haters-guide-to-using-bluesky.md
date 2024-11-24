---
title: The Bluesky hater's guide to using Bluesky
date: 2024-09-18
tags: [technology]
metadata:
  description: How to use Bluesky by actually using Mastodon and the fediverse.
interactions:
  host: chitter.xyz
  username: batbeeps
  id: "113158136167913317"
cssComponents:
  - character
---

If it wasn't obvious from some of my past posts, I don't particularly care for Bluesky.

It bugs me that the most-favoured alternative to Twitter was to recreate what Twitter was like after Twitter had already started going rotten.

It bugs me that rather than using an existing, widely standardised protocol, they opted to create their own that—for most purposes—isn't as open, and currently isn't even as good, as ActivityPub.

It bugs me that, to this day, it still lacks basic features that Mastodon has had for multiple years.

I could go on. Regardless, a critical mass of people I know and care about have chosen to use it over other alternatives, so I—begrudgingly—find myself having to use it.

But what if you could use Bluesky without _actually_ using Bluesky? 🤔

{% character character="ash", variant="thinking" %}
I say "Mastodon" a lot in this post, but what I should really say is "fediverse", as there are lots and lots and lots of federated microblogging softwares that are all compatible with one another, like Akkoma and Firefish.

I'm using Mastodon as a shorthand for all of them, given it's the most widely recognised of them.
{% endcharacter %}

## Make some app passwords

You're going to need a couple of app passwords for this.

Head over to the [app passwords](https://bsky.app/settings/app-passwords) section of Bluesky's settings and create a couple. Give them useful names and paste the passwords somewhere safe for now. You can't see them again after closing the dialog box where they appear.

## Crossposting to Bluesky

[Skymoth](https://skymoth.app/) is a tool that takes Mastodon posts and crossposts them on Bluesky. It's an easy set-and-forget way of putting things on Bluesky.

{% character character="ash", variant="alarmed" %}
...with the following caveats.

- Skymoth is limited to only sharing 'public' posts.
- It cannot update edited Mastodon posts, as Bluesky doesn't support post editing.
- Bluesky's character limit is lower than on most Mastodon instances, meaning longer posts will get split up.
- Bluesky doesn't support any text formatting, so crossposting from Mastodon instances with Markdown or HTML support probably won't work very well.
- It can only crosspost images. Bluesky didn't support video until literally last week, and it still doesn't support audio posts or polls like Mastodon does.
- Except images with transparency and animated GIFs, which Bluesky doesn't support.
- Threaded Mastodon posts won't be threaded on Bluesky.
- Content warnings from Mastodon won't appear on Bluesky.
- Custom emoji from Mastodon won't appear on Bluesky.

{% endcharacter %}

I previously used [my own script to do crossposting](https://github.com/querkmachine/m2b), but just use Skymoth, it's better.

## Taking it to the bridge

So you're posting to Bluesky. That doesn't _really_ help with keeping up with people who are using it, though.

So you'll also want to get set up with [Sky Bridge](https://skybridge.fly.dev/). Sky Bridge is a service that translates from Bluesky's AT protocol to the ActivityPub protocol used by Mastodon, allowing you to view Bluesky feeds, profiles, etc. from within a Mastodon client.

It does some subtle nice things too, like translating Bluesky's sensitive content ratings into Mastodon content warnings.

[Bluesky has actively funded Sky Bridge's development before](https://techcrunch.com/2024/04/25/bluesky-backs-a-project-that-would-let-mastodon-apps-like-ivory-work-with-its-network/), so you can be reasonably confident that they're happy with them doing this.

{% character character="ash", variant="love" %}
Sky Bridge is made by fellow British furry and nonhumanity-enjoyer [Videah](https://videah.net/), which is a sure sign of it being quality software.
{% endcharacter %}

## Wait, a Mastodon client?

Yes, a Mastodon client!

Using Sky Bridge isn't going to get you very far if you've only ever used Mastodon's web interface. What you need is a multi-account client.

If you want to stick to something browser-based, I can recommend [Phanpy](https://phanpy.social/). It's a neat, polished little client that reimplements Mastodon's single and multi-column experiences, but adds a bunch more customisation and quality of life improvements, like inline replies. And it's free!

On macOS and iOS, if you have the money, the standard setter is by far [Ivory](https://tapbots.com/ivory/), created by the developers formerly responsible for the multi-award-winning app Tweetbot, before it was savagely murdered by Elon Musk.

For Windows and Android... I have no clue.

Using a client does mean potentially sacrificing features that are specific to your Mastodon instance, if it's been customised. Your mileage may vary.

## That's pretty much it

Not much more to say there. If all went well, you should now be able to both read Bluesky, post to Bluesky, and get mentions and notifications from Bluesky—all without actually having to use Bluesky's website or a different client specific to Bluesky. Bluesky.

END.
