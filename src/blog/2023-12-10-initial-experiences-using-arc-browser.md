---
title: My initial experiences using the Arc web browser
date: 2023-12-10
tags: [technology]
metadata:
  description: My thoughts on using the shiny new browser on the block.
interactions:
  host: chitter.xyz
  username: batbeeps
  id: "111557752407785137"
---

[Arc](https://arc.net/) is one of the "new generation" of web browsers that have started popping up in recent years. Like many of them, it claims to protect the privacy of the user from the evils of privacy-invading online practices. Like many of them, it claims to reinvent and revolutionise how web browsers are used.

The difference is that I think Arc actually kinda does that.

## My browsing history

I've not really been big on Google Chrome for a long time. Whilst I used it a lot (as did everyone) in the first few years when practically every other browser was lagging behind it, once they started to reach relative parity I jumped ship.

For many years I used Safari. Safari is just, by far, the fastest browser on a Mac, and naturally the most integrated with other parts of Apple's hardware and software ecosystem. I still like Safari, but even at this time, I was hopping over to Firefox if I needed to do anything serious web development work.

Firefox was noticeably slower, but it was better for what I needed. As a web developer by trade, it's a very good browser for working in. I honestly think Firefox's developer tools are better than Chrome's in many ways, though they both have their strengths, Firefox pips it when it comes to the HTML, CSS and JavaScript I spend most of my day dabbling in.

A couple of years ago, upon procuring my shiny M1 Pro Mac, I moved to use Firefox as my daily driver desktop browser full-time. And that's where I was until earlier this year.

## Bouncing off the Arc

After some time in a limited beta, Arc went free to use in July of this year. I can't recall if I'd actually heard much about it before then, but the list of features intrigued me—particularly the concepts of "Spaces" and "Boosts".

{% figure caption="This is what Arc looks like, by the way." %}
{% responsiveImage "./src/images/arc-browser.jpg", "A screenshot of the Arc browser, with the majority of the screen showing the homepage of this website. A narrow purple sidebar on the left shows a grid of buttons with icons in it with a vertical list of tabs beneath it." %}
{% endfigure %}

Spaces gave you the ability to have multiple simultaneous-but-separate profiles. I already had something like these in Firefox with the first-party [Multi-Account Containers extension](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/) and had found them invaluable to my workflows, so having a version more integrated into the browser was an intriguing concept.

Boosts is Arc's marketing term for per-website user styles. [I'm a big fan of user styles]({{ '/blog/2023-04-26-using-userstyles-in-2023/' | url }}), so again, having the function built directly into the browser, complete with a snazzy user interface, was rather appealing. Boosts also allow for custom JavaScript, which is neat, but yet to be something I've actually used.

So I gave it a try.

The first thing it did was ask me to create an account to continue.

I closed it immediately.

Giving personal information to a company I have never heard of, for a product I have no idea I'll like, is a huge no for me. I was immediately disappointed. It seems like such a slap in the face for a "privacy-conscious" browser to immediately require personal data to use.

I eventually relented a couple of days later. I could always get them to delete my information if I wanted (love you, [GDPR](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-erasure/)).

I tried it out, I clicked around a bit, I closed it and went back to Firefox.

I found Boosts to be interesting if nothing mindblowing.

I found that, despite Spaces providing a _visual_ distinction between groups of tabs, the underlying parts were ultimately still merged: sharing history, cookies and other information. This was a deal-breaker given how much I was using them in Firefox, so off I went.

{% character character="ash", variant="alarmed" %}
This would turn out to be an error on my part. Arc _did_ have separate profiles at this point in time, but they were more buried away, which is probably why I never found them.
{% endcharacter %}

Arc sat on my system, installed but unused, for the next several months. It wasn't until October, after [the Mac Address YouTube channel reviewed it](https://www.youtube.com/watch?v=aq13trnsgq4) that I decided to give the browser another go.

## Boarding the Arc

Maybe it was the useful explainer that the YouTube video had provided, maybe it was the multiple updates the browser had received in the elapsed months, or maybe it was just that I easily found the multiple profiles feature this time, but this time it stuck around.

A month later, and I think I'm here to stay.

Arc does a lot of stuff differently from other browsers. I don't agree with all of the things it does differently, but I agree with enough that I'm willing to accept the parts I don't care for so much.

The point, however, is that I think it genuinely has reinvented and revolutionised how I use my web browser.

I'm not sure how best to explain how it's changed how I work. All I can really do is explain how it's different from any browser I've ever used before.

### Profiles and Spaces

As before mentioned, a big part of my browser usage is centred around profiles—I often need multiple tabs from the same website to be open, but for each of those tabs to be logged into different accounts and be treated as separate contexts. Secondarily, I want certain websites to _always_ open under certain profiles.

Firefox's Multi-Account Containers extension does this, albeit in a slightly more manual process.

Arc takes this idea to the next level with Spaces. Each profile is not just a separate tab with a different icon or highlight colour, each profile is a new view entirely. It's still the same browser window, but in an instant, all your tabs and "bookmarks", the theme colour of the browser, your default search engine, your saved passwords, your settings, your browsing history—all of it changed in a single click or swipe.

And you can go back, and everything from before is still there. Nothing is unloaded when you switch profiles, so the experience of doing so feels seamless.

I'm not sure how this works in practice, but I can only imagine it's multiple Chromium instances all hiding in the same trenchcoat. This does have the detriment that Arc is a bit of a battery sapper, but for my workflow, this kind of functionality is a godsend.

### Tabs are temporary

Tabs close themselves if they aren't used. That might sound annoying or inconvenient, but it strangely isn't.

Arc has three 'tiers' of tabs, each of them given their own space and functionality:

**"Today" tabs** are... well, they're just around for the day. These are the ones that are automatically cleared out on a cycle you define, but which I've kept at the default 12 hours. They won't be here come the morning, and by that point, they're probably irrelevant anyway.

**Pinned tabs** are almost normal tabs, but they persist through the cleanout. Think maybe a project you're working on over multiple days. Pinned tabs do double duty as your your regular bookmarks: tabs that are pinned can be sorted into folders, and although they do automatically close themselves, they stay in the list indefinitely just waiting to be opened again.

**Favourites** appear as icons at the top of the sidebar. They are always there, never being closed or scrolled out of view. This is where I put things like Gmail, my calendar, GitHub notifications and Mastodon—basically, anything I spend a lot of my day looking at or frequently want quick access to.

This setup is... surprisingly useful. I don't have a history of tab hoarding, like many people do, as the crunched tabs at the top of the browser window would often be overwhelming, so I got into the habit of closing them out.

Arc's tab list is vertical and scrollable, so it never crunches up and never triggers that feeling of being overwhelmed. Having tabs close themselves saves me from myself and prevents my list of open pages from growing endlessly long.

### Little Arc

Little Arc is a separate web browser. It's part of Arc, but it's not Arc.

Little Arc exists for when you've been sent a link over Discord or some other app, you just wanna view that image, watch that video, or read that article, and do nothing else.

Little Arc is a web browser designed for viewing one page and then closing it. A novel idea.

Of course, you can promote it to a full tab in Arc if you want to, but as another tool in Arc's arsenal of decluttering the browser experience, it's very useful.

My only qualm with it is that it has a habit of sometimes positioning itself in places where I can't immediately see it, so I have to go and find it again.

{% character character="ash", variant="thinking" %}
This might be more of an issue with me being a heavy user of macOS's multiple desktops rather than with Arc, though.

Messengers exist on one desktop, Arc exists on another, and Little Arc struggles to choose where it should go.
{% endcharacter %}

### Automatic picture-in-picture

Lots of browsers have picture-in-picture. Arc has _automatic_ picture-in-picture.

I'm watching a YouTube video, I want to check out something in a different tab. Pop! The video is still on screen in its own little window. Delightful!

I'm in a Google Meet call, someone has linked a document in the chat, I click it. Pop! The video grid and controls move to float over my screen while I'm reading through the document. Amazing!

This is such a simple thing, but it's ludicrously useful for how simple it is.

### The developer experience

Arc has devtools. It's a Chromium-based browser, so it has the same devtools as Chrome.

But like other things, Arc takes this to another level. It doesn't _just_ have devtools, it has an entire developer mode! In developer mode, a new toolbar is displayed above the page with quicker access to tools that developers will find useful, such as network information, extensions and screenshots.

The tab is rendered with a black and yellow dashed outline, which makes it stick out a bit more, and the fully qualified URL (normally a bit hidden away) is shown instead.

Also all of this turns on automatically when you're on localhost.

This is also fairly minor—none of this makes actual development easier—but it's another thing that makes Arc feel like it's had a little more care put into it than other browser vendors might aim for.

### The command palette

Maybe just another developer brain thing, but Arc lets you do basically everything through a command palette. New tabs, searching, browser history, extensions, and other commands: all searchable and usable from one place.

{% figure caption="Arc's command palette lets you do almost anything just from your keyboard." %}
{% responsiveImage "./src/images/arc-browser-commands.jpg", "A screenshot of the Arc browser's command palette. A search field has searched for 'developer', bringing up a list with one open tab, the option to search for 'developer', a history entry for Google Developers, and the options to toggle developer mode and open developer tools." %}
{% endfigure %}

As someone who already uses [Raycast](https://www.raycast.com/) to do an awful lot of my computing, having single points of access like this is a huge deal for me.

### Boosts

Despite being one of my original draws to Arc, I've not actually used the Boosts feature that much. I ported over some user styles from my Firefox install, but otherwise, it's not seen much use and I have found more downfalls with it than originally anticipated.

Still, my Wikipedia articles are purple and pink, so who's really winning here?

### Lightning round

[Integrations](https://arc.net/integrations) (also named Previews) let you view certain information without even opening the webpage involved. Just by hovering over their respective tabs, I can preview my unread emails in Gmail or open pull requests on GitHub. It's a neat little time saver.

I hope it gets extended to support RSS feeds at some point, essentially expanding that functionality to a huge number of websites without needing specialised API access.

Split View lets you put multiple tabs together into groups, similar to the feature in Safari on iPads, without having to have multiple Arc windows open. It's not something I do super frequently, but it comes in very handy when it does.

The Air Traffic Control feature lets you specify that certain websites should always open in certain spaces and profiles. Very useful for my extended use of profiles.

**You can customise every single keyboard shortcut.** How many browsers let you do that?!

## Sinking the Arc

It's not all sunflowers and rainbows. There are some things that do bug me about Arc, and I would be remiss to not mention some of those too.

### The account requirement is weird and unnecessary

The thing that made me bounce off Arc the very first time I opened it. I'm not sure why this browser requires an account at all.

Most, if not all, of the syncing between devices that Arc does happens over iCloud anyway, so I'm really not sure why this is a thing. It's just one of those little things that makes me doubt the veracity of the browser's claims of user privacy.

### It's built on Chromium

This is maybe just a me-thing, but the near total domination that Chromium has over the browser market sucks. Almost every single browser available now uses the Chromium engine, with the only significant outliers being Safari and Firefox.

Google, the stewards of the project, have in recent times made some pretty user-hostile decisions in recent times, from [nerfing ad-blocking software](https://www.theverge.com/2023/11/16/23964509/google-manifest-v3-rollout-ad-blockers) to [adding browser-level user tracking for advertising purposes](https://arstechnica.com/gadgets/2023/09/googles-widely-opposed-ad-platform-the-privacy-sandbox-launches-in-chrome/) to [trying to add DRM for websites](https://en.wikipedia.org/wiki/Web_Environment_Integrity).

Arc's team have promised to reverse some of these changes in their fork of Chromium, but generally speaking, Chromium is not a thing I particularly want to support going forward. I'd love it if Arc transitioned to an alternative renderer, like Gecko or WebKit, but I'm not optimistic about that happening.

### Bookmarks aren't really a thing

I mentioned in [the tabs section](#tabs-are-temporary) that pinned tabs kinda do double duty as bookmarks, because Arc doesn't have bookmarks.

Whilst I understand this within Arc's philosophy that virtually all of your web usage should be transient, sometimes I just have webpages that I access rarely enough to not want them pinned, but important enough that I don't want to lose track of them.

At the moment I don't think Arc really has an answer for this middle ground of important but infrequent stuff.

Even if those pages just got stuffed somewhere in the macOS menu bar, I would find that an improvement over the stacks of folders I currently keep in my pinned tabs.

### It's doing that whole AI thing

Like (too) many organisations, Arc has jumped aboard the AI train.

{% character character="ash", variant="pensive" %}
No, it's not "real AI" and is just another large language model based on ChatGPT, but I'm going to call it AI here because everyone else does.
{% endcharacter %}

What I respect about their implementation is that they haven't just taken ChatGPT and stuffed it in a sidebar. The AI tools are much more specific and nuanced.

{% figure float="right", caption="AI summaries are actually quite useful if you're just looking to get the gist of something." %}
{% responsiveImage "./src/images/arc-browser-ai-summary.jpg", "A screenshot of a search results page, with the Arc browser summarising an article about the mobile version of itself into a single sentence and list of themed bullet points." %}
{% endfigure %}

I actually quite appreciate the ability to get a summary of a link's content without having to open it. It once again plays to Arc's philosophy of webpages being transient and is a novel way of avoiding clickbait and meandering articles.

I _really_ like the way that Arc will automatically rename files you download to give them sensible names, instead of being jumbles of letters and numbers. (At least, when it works.)

But the other stuff that Arc does with AI is a bit of a mess. Smart tab renaming often just gives me uselessly generic tab names. Hijacking the in-page search function for AI answers is also more often frustrating than it is useful.

At the very least, Arc lets you pick and choose which AI functions you want to have enabled, rather than it being all-or-nothing.

### Mobile Arc makes some choices

Arc has a mobile app too. I've largely ignored mentioning it in my review here because, frankly, I just don't use it.

Arc on mobile phones makes some similarly interesting choices over how it's used, and one of these is that it doesn't have tabs. You can only have one webpage open at a time.

Whilst I can kinda see how this aligns with the Arc philosophy, I think this takes the idea of transitory browsing too far into impractical territory. There are apparently thoughts about changing this design decision floating around, but they're yet to happen. I'll probably revisit it if they do.

### Windows? Android?

Arc is currently a macOS and iOS-only browser, and very much leans into the design and development approaches of Apple's platforms.

As someone who is overwhelmingly a user of Apple's hardware, software and services ecosystem, this works fine for me, but I can imagine it not being for everyone.

There is a Windows version of Arc in development currently, using the same Swift codebase running with a translation layer for the Windows operating system.

I'm hesitant about whether the (currently) Apple-based approaches will transpose well into the Windows ecosystem, and whether this Swift translation layer will noticeably slow things down. Either way, despite promises that it won't be a second-class citizen, it still feels like Windows users might be getting the shorter end of the stick in this transaction.

## Conclusion

If it wasn't obvious enough already, Arc is built around a very specific philosophy for how a web browser should work. Principally, the vast majority of web pages are things that you'll only interact with temporarily before it should leave both your mind and your browser.

That's fine if you vibe with that philosophy (and I think I do), but probably won't work for you if you don't.

Arc is still in very active development, with a new version of it being released roughly every one to two weeks.

On the one paw, this is exciting! Arc is a new shiny thing, and that the new shiny thing delivers new shiny things on such a frequent cadence is exciting, to say the least. The team do a decently good job of writing useful update notes to highlight everything new.

On the other, this means stuff changes a lot. Sometimes for the better, sometimes not.

{% character character="ash", variant="happy" %}
Earlier in this post I mentioned that I thought Arc didn't have profiles when I first tried it because I couldn't find them. Well now they're part of the onboarding flow, so finding them is easy. Hurray!
{% endcharacter %}

A recent controversial decision amongst the Arc community (or at least [the r/ArcBrowser subreddit](https://www.reddit.com/r/ArcBrowser/)) was the removal of a dedicated button for quickly accessing extensions and split view, the former being moved inside of a more generic site settings toolbar, the latter not having a button at all, instead being activated through dragging gestures.

To their credit, the folks who make Arc responded quickly, justifying their reasons and subsequent releases have made those aspects easier to access again, without just reversing the initial removal. They've generally proven to be quite responsive to outcries like that, and have a delightful habit of showing off unreleased prototype features to garner initial feedback.

This post definitely reads like it's meant to big up Arc to some suspicious degree, even to me. But I am sincere in my belief that Arc is—at least at this time and in this place—a significantly different approach to how a web browser should be used, and the changes it makes are largely for the better.

I don't doubt that Arc won't be for everyone, but if you can get on board with the specific philosophies it's designed around, you might just find it revolutionary.
