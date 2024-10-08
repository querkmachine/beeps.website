---
title: Browser choice is an accessibility consideration
date: 9999-01-01
tags: [technology, web development]
metadata:
  description: Maybe just let people use the tools they want?
---

In the last couple of years, there's been a growing distaste amongst the more techy crowd towards Google Chrome and the prevalence of other Chromium project-based web browsers.

And for good reason, Chromium's Blink engine utterly _dominates_ the browser engine landscape by this point. The only thing that's stopped it being a near total monopoly is Apple's requirement to use the WebKit engine on iPhones and iPads—[a restriction which is now being legislated against in parts of the world](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu)—paving the way for Blink's market share to only grow.

Chromium is also the basis upon which [Electron apps](https://www.electronjs.org/) are built, which is an already widespread means of easily building cross-platform applications.

This has led to some folks boycotting Chromium, which is fair enough. People can boycott whatever they want for whatever reasons they want.

What kinda bugs me (and others, based on my Mastodon feed) is that some of these folks have also opted to ban Chromium-based browsers from accessing their websites.

{% character character="ash", variant="pensive" %}
I'm all for webmasters using their personal websites in whatever ways they wish; what I want to do here is highlight the unintended issues they may be creating for vulnerable and disabled people in the process.
{% endcharacter %}

## Chromium is kinda-sorta-technically the best browser engine

Sorry to burst your bubble, but Chromium isn't popular only because of Google.

For many people, it is the fastest browser engine they have access to—[often trouncing Gecko-based browsers in benchmark tests](https://browserkid.medium.com/the-speed-test-comparing-browser-performance-in-2023-1800925cad25). It has the largest extensions ecosystem. And if they're using Google's other products anyway, the additional data sharing isn't a big deal. Browser developers frequently comment that Chromium is much easier to work with and extend than Mozilla's Gecko and Apple's WebKit.

Chromium also has the best support for web standards, I write with a wry, knowing grin.

Thar be caveats here.

Another reason to dislike Google's near-monopoly is the amount of influence it has given Google over web standards. It is not uncommon for Google to draft entire specifications and launch them in Chrome before there has been any consensus on whether the specification is a good idea or not.

This has happened time and time again. The [draft Portals specification](https://wicg.github.io/portals/) was authored entirely by Google engineers, published in May 2019 and included in Chrome 85 in August 2020, having not received input or revisions from any other browser manufacturer.

The [draft Web Bluetooth API](https://webbluetoothcg.github.io/web-bluetooth/) is edited entirely by Chrome engineers, published March 2015, and has been in Chromium since January 2017. No other browser engine has implemented it, with Mozilla and Apple both claiming it lacks necessary protections of user privacy.

The same story happens over and over again. The [Web USB API](https://wicg.github.io/webusb/) (in Chromium since September 2017), [Keyboard Map](https://wicg.github.io/keyboard-map/) and [Keyboard Lock](https://wicg.github.io/keyboard-lock/) APIs (July 2018), [WebXR API](https://immersive-web.github.io/webxr/) (December 2019), [Serial API](https://wicg.github.io/serial/) (March 2021), [Idle Detection API](https://wicg.github.io/idle-detection/) (September 2021), and probably many more... all predominantly or entirely created by Google staffers, all implemented in Chromium despite a lack of input, if not outright objections by, Mozilla and Apple.

{% character character="ash", variant="alarmed" %}
Google isn't the only browser vendor guilty of this kind of behaviour, mind. Apple's tendency towards utmost secrecy until something has been publicly announced at an Apple Event means that their draft specifications typically aren't published until something is already in Safari's beta track.
{% endcharacter %}

Some, like the [Topics API](https://patcg-individual-drafts.github.io/topics/) (formerly known as the FLoC API, or [Federated Learning of Cohorts API](https://github.com/WICG/floc))—which would have the browser itself collect information about users to share with advertisers—has so far received enough high-profile pushback to not even be implemented in Chromium.

I can't use anything but Chrome to configure my Keychron keyboard, because the tool is written as a web application and it's the only browser that has the APIs to interface with it.

And this is _incredibly frustrating_, because yes, it does mean that technically Chromium is the most capable browser engine, and the only one that can work for some people's needs as a result, but they also engineered the circumstances that put them in that position by refusing to collaborate with other organisations before just doing it. It bugs me. A lot.

## Browser choice is important for accessibility

- Chrome is probably the only browser that works with braille displays?
- Chrome's extension library means there are lots of accessibility tools available for it
- Chrome is generally one of the better browsers for accessibility in the first place
- If a user already has Chrome set up for their needs, forcing them to switch browser is a massive hurdle

## There isn't necessarily an alternative

If you're on an Apple-made piece of hardware, you always have Safari as an alternative. Safari is fast and fits the Apple ecosystem nicely. It generally lags behind other browsers in terms of features and support for web standards (with the previous caveats), and it lacks a comprehensive library of extensions.

Many will point to Firefox as the preferable alternative to Chrome, but Mozilla, the organisation that owns Firefox, has been subject to its own unpopular decisions lately: [laying off staff and shutting down projects](https://techcrunch.com/2024/02/13/mozilla-downsizes-as-it-refocuses-on-firefox-and-ai-read-the-memo/) whilst [paying giving their CEO millions](https://www.theregister.com/2024/01/02/mozilla_in_2024_ai_privacy/), pushing unpopular LLM-based assistants in both their [browser](https://techcrunch.com/2024/06/25/firefox-now-lets-you-choose-your-preferred-ai-chatbot-in-its-nightly-builds/) and [websites](https://github.com/mdn/yari/issues/9208), [tracking users without consent](https://www.techradar.com/computing/cyber-security/mozilla-stands-by-its-controversial-privacy-feature-but-ready-to-clear-up-confusion), and is [under investigation for internal discrimination](https://www.geekwire.com/2024/mozillas-product-chief-sues-the-firefox-maker-alleging-discrimination-after-cancer-diagnosis/).

The simple fact is that some people just don't trust modern-day Mozilla to work in their interests. Firefox may be an alternative _now_, but for how much longer?

There are minor browsers based on Firefox's Gecko engine, such as LibreWolf and Zen Browser, that are further outside of Mozilla's control and may work for some.

Personally, them being limited to desktop computers only is a bit of a dealbreaker. I like having my stuff syncronised between devices, darn it.

## Not everyone has a choice in the first place

In days of yore, corporate IT would require employees to use Internet Explorer. This practice survived a horribly long time, effectively only ending when [Microsoft forced IE into retirement in mid-2022](https://blogs.windows.com/windowsexperience/2022/06/15/internet-explorer-11-has-retired-and-is-officially-out-of-support-what-you-need-to-know/), preventing it from being used in Windows 10 and removing it completely in Windows 11.

So what does corporate IT require now? Edge, of course! Microsoft's Chromium-based replacement to IE.

Educational institutions that issue Chromebooks will naturally force users to use Chrome. Organisation issued Android devices may have no choice but to use Chrome or Samsung Internet. As above, some may technically have freedom to use another browser, but find that only a Chromium one provides the user experience they want or require.
