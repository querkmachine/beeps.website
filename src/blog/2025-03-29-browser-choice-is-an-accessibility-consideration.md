---
title: Browser choice is an accessibility consideration
date: 2025-03-29
tags: [technology, web development]
metadata:
  description: Let people use the browser they want, they probably have good reasons.
cssComponents:
  - callout
---

In the last couple of years, there's been a growing distaste amongst the more techy crowd towards Google Chrome and the prevalence of other Chromium project-based web browsers.

And for good reason, Chromium's Blink engine utterly _dominates_ the browser engine landscape by this point. The only thing that's stopped it being a near total monopoly is Apple's requirement to use the WebKit engine on iPhones and iPads—[a restriction that's now being legislated against in parts of the world](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu)—paving the way for Blink's market share to only grow.

Chromium is also the basis upon which [Electron apps](https://www.electronjs.org/) are built, which is already a widespread means of easily building cross-platform applications.

This has led to some folks boycotting browsers and programs that use Chromium, which is fair enough. People can boycott whatever they want for whatever reasons they want.

What bugs me (and some others, based on my Mastodon feed) is that some of these folks have also opted to ban Chromium-based browsers from accessing their websites entirely. I'm here today to say: please maybe don't?

## Chromium is kinda-sorta-technically the best browser engine

Sorry to burst your bubble, but Chromium isn't popular _just_ because it's owned by Google.

For many people, it is the fastest browser engine they have access to—[often trouncing Gecko-based browsers in benchmark tests](https://browserkid.medium.com/the-speed-test-comparing-browser-performance-in-2023-1800925cad25). It has the largest extensions ecosystem. And if they're using Google's other products anyway, the additional data sharing isn't a big deal. Browser developers frequently comment that Chromium is much easier to work with and extend than Mozilla's Gecko and Apple's WebKit.

Chromium also has the best support for web standards, I write with a wry, knowing grin. Thar be caveats here.

{% callout %}
The main reason I dislike Google's near-monopoly is the amount of influence it has given Google over web standards. It's not uncommon for Google engineers to draft entire specifications and launch them in Chrome before there has been any consensus on whether the specification is a good idea or not.

This has happened time and time again. The [draft Portals specification](https://wicg.github.io/portals/) was authored entirely by Google engineers, published in May 2019 and included in Chrome 85 in August 2020, having not received input or revisions from any other browser manufacturer.

The [draft Web Bluetooth API](https://webbluetoothcg.github.io/web-bluetooth/) is edited entirely by Chrome engineers, published March 2015, and has been in Chromium since January 2017. No other browser engine has implemented it, with Mozilla and Apple both claiming it lacks the necessary protections to maintain the privacy of users.

The same story happens over and over again. The [Web USB API](https://wicg.github.io/webusb/) (in Chromium since September 2017), [Keyboard Map](https://wicg.github.io/keyboard-map/) and [Keyboard Lock](https://wicg.github.io/keyboard-lock/) APIs (July 2018), [WebXR API](https://immersive-web.github.io/webxr/) (December 2019), [Serial API](https://wicg.github.io/serial/) (March 2021), [Idle Detection API](https://wicg.github.io/idle-detection/) (September 2021), and probably many more... all predominantly or entirely created by Google staffers, all implemented in Chromium despite a lack of input from, if not outright objections by, other browser vendors.

And this sucks for web standards, because something being included in the most popular browser means that a sizeable chunk of developers immediately treat it as widely available, and begin implementing it into things, which makes changes to the specification even harder for other vendors to .

Google isn't the only browser vendor guilty of this kind of behaviour, mind. Apple's tendency towards utmost secrecy until something has been publicly announced at an Apple Event means that their draft specifications typically aren't published until something is already in Safari's beta track too. Google just does it much more brazenly.

Some, like the [Topics API](https://patcg-individual-drafts.github.io/topics/) (formerly known as the FLoC API, or [Federated Learning of Cohorts API](https://github.com/WICG/floc))—which would have the browser itself collect information about users to share with advertisers—has so far received enough high-profile pushback to not even be implemented in Chromium.
{% endcallout %}

And this is _incredibly frustrating_, because yes, it does mean that technically Chromium is the most capable and well-supported browser engine, but Google also engineered the circumstances that put them in that position. It does bug me. A lot.

## Chromium is pretty good for accessibility, actually

Chrome's Blink engine is, generally, one of the better engines when it comes to accessibility in the first place. The accessibility tree is comprehensive and functional, without requiring much developer intervention to make it that way.

The expansive Chrome Web Store means that users can often find accessibility tools easily and more cheaply than commercial alternatives, such as using the [first-party Chrome Screen Reader](https://chromewebstore.google.com/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn) (also known as ChromeVox) instead of having to spend nearly £1000 for software like [JAWS](https://www.freedomscientific.com/products/software/jaws/), or using the relatively extensible [Dark Reader](https://chromewebstore.google.com/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh) instead of their operating system's more restrictive forced colour settings.

And, unlike operating system-based accessibility tools, Chrome extensions can be easily synchronised across multiple devices.

I don't have any particular evidence of it, but I wouldn't be surprised if Chrome's raft of hardware APIs also gives it better support for alternative hardware devices, such as Braille displays or the Xbox Adaptive Controller.

Ultimately, given Chromium's popularity in the browser market, a user is quite likely to already have a Chromium browser set up for their specific access needs. At least [72% of screen reader users use a Chromium-based browser](https://webaim.org/projects/screenreadersurvey10/#browsers). Forcing a user to change browser to access a single website or service could mean forcing them to re-learn their entire way of using a web browser.

It's not a mild inconvenience. It's not a small barrier that's trivial to step over, it's a wall.

## There isn't necessarily an alternative

If you're on an Apple-made piece of hardware, you always have Safari as an alternative. Safari is fast and fits the Apple ecosystem nicely. It generally lags behind other browsers in terms of features and support for web standards (with the previous caveats), and it lacks a comprehensive library of extensions.

Many will point to Firefox as the preferable alternative to Chrome, but Mozilla, the organisation that owns Firefox, has been subject to its own unpopular decisions lately: [laying off staff and shutting down projects](https://techcrunch.com/2024/02/13/mozilla-downsizes-as-it-refocuses-on-firefox-and-ai-read-the-memo/) while [paying their CEO millions](https://www.theregister.com/2024/01/02/mozilla_in_2024_ai_privacy/), pushing unpopular LLM-based assistants in both their [browser](https://techcrunch.com/2024/06/25/firefox-now-lets-you-choose-your-preferred-ai-chatbot-in-its-nightly-builds/) and [websites](https://github.com/mdn/yari/issues/9208), [tracking users without consent](https://www.techradar.com/computing/cyber-security/mozilla-stands-by-its-controversial-privacy-feature-but-ready-to-clear-up-confusion), and is [under investigation for internal discrimination](https://www.geekwire.com/2024/mozillas-product-chief-sues-the-firefox-maker-alleging-discrimination-after-cancer-diagnosis/).

The simple fact is that some people just don't trust modern-day Mozilla to work in their interests. Firefox may be an alternative _now_, but for how much longer?

There are minor browsers based on Firefox's Gecko engine, such as LibreWolf and Zen Browser, that are further outside of Mozilla's control and may work for some. Personally, them being restricted to desktop computers is a bit of a dealbreaker. I like using the same browser across devices, darn it.

Sometimes, the thought of changing browser is a daunting or frightening one, particularly amongst less technology savvy users. Sometimes, the user interface or features that work best for someone isn't available outside of the ecosystem of Chromium browsers. ([And yes, I'm still an Arc user.]({{ '/blog/2023-12-10-initial-experiences-using-arc-browser/' | url }}))

## Not everyone has a choice in the first place

In days of yore, corporate IT would require employees to use Internet Explorer. This practice survived a horribly long time, effectively only ending when [Microsoft forced IE into retirement in mid-2022](https://blogs.windows.com/windowsexperience/2022/06/15/internet-explorer-11-has-retired-and-is-officially-out-of-support-what-you-need-to-know/), preventing it from being used in Windows 10 and removing it completely in Windows 11.

So what does corporate IT require now? Edge, of course! Microsoft's Chromium-based replacement for IE.

Educational institutions that issue Chromebooks will naturally force users to use Chrome. Organisation issued-Android devices may have no choice but to use Chrome or Samsung Internet. As above, some may technically have the freedom to use another browser, but find that only a Chromium browser provides the user experience they want or require.

## In conclusion

I'm all for webmasters using their personal websites in whatever ways they wish; what I want to do here is highlight the unintended issues they may be creating for groups of people, and disabled people especially, in the process.

Instead, consider putting something like a nag banner instead. Bring back some of that good "Please for the love of god stop using Internet Explorer" energy the internet had back 10–15 years ago (and [make sure screen reader users can skip it](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html)).

Maybe, just maybe, don't block users entirely.
