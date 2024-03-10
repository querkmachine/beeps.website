---
title: The State of the Apps
date: 9999-01-01
tags: [technology, web development]
---

A random overview of what hardware and software I use when being productive.

{% callout %}
I've linked off to websites and product pages for the things I mention here. This is just as a courtesy. They arent't affiliate links, I'm not getting squat from these.
{% endcallout %}

## The hardware

### My daily driver: MacBook Pro (M1 Pro)

My daily driver is a [14-inch M1 Pro MacBook Pro](https://support.apple.com/kb/SP854) that I have stickerbombed halfway to hell.

{% responsiveImage "./src/images/macbook-feb-2024.jpg", "A top-down photograph of a laptop that has been sticker bombed with dozens, if not hundreds, of stickers." %}

Despite being a couple of years old now, it's still crazy fast thanks to the wildly good performance of Apple Silicon. If anything, it's overkill.

Basically nothing I do in my day-to-day design and development tasks even requires the fan to turn on: I virtually always have a code editor, terminal, multiple browsers, Photoshop, Illustrator, a half dozen Electron apps and a bunch of other background and utility apps open and the fans don't even have to turn on. It's crazy.

I could probably have gotten a desktop Mac that was even more overkill for the same money, but I've really come to depend on having a laptop. I **need** to be able to move around whilst working and that's pretty hard when you're tied down to a desk.

### My keyboard: Keychron K17 Pro

A few months ago I changed from the [Keychron K6](https://www.keychron.com/products/keychron-k6-wireless-mechanical-keyboard) (which I'd originally backed on Kickstarter) to the [Keychron K17 Pro](https://www.keychron.com/products/keychron-k17-pro-alice-layout-qmk-via-wireless-custom-mechanical-keyboard).

I'm a pretty big advocate for Keychron. They do relatively affordable mechanical keyboards with good build quality, support for multiple devices over Bluetooth and—perhaps crucially for my needs—Mac keys and keyboard layouts. The newer models are basically completely reprogrammable too, which is a delight.

My main reasons for changing which Keychron I was using was that the K6 is very chunky, essentially requiring a palm rest in order to use comfortably. That wasn't ideal, so I opted for the lower profile K17 Pro. It has programmable macro buttons and a funky little dial.

Admittedly, adjusting to actually using them over the shortcuts and function keys I'm used to is taking quite a while, but otherwise I honestly have no complaints. It, like the K6 that came before it, just works great.

### My mouse: Logitech MX Master 3 for Mac

I've gone through a fair number of mice in my time, but I've currently settled on [Logitech's MX Master 3 for Mac](https://www.logitech.com/en-ae/products/mice/mx-master-3-mac-wireless-mouse.910-005696.html).

{% character character="ash", variant="thinking" %}
"A mouse just for Macs?" you might be pondering. Yeah, not really, the 'for Mac' designator just seems to mean that it doesn't come with a USB Bluetooth adaptor, because Macs don't usually need one.
{% endcharacter %}

Like the Keychron, I mostly appreciate this mouse for having a bunch of freely programmable macro buttons on it that I make heavy use of. Having a dedicated horizontal scrollwheel is also really darn useful when navigating in two-dimensional space, as you often are in image editing applications.

My one gripe with this mouse is the 'gesture button'. It's both inconveniently located, being a good 1 to 2 centimetres below where my thumb is usually resting, and difficult to press, as it's underneath the grippy rubber material on that part of the mouse. I mostly just don't use it.

### My monitor: BenQ BL2420PT Designer Monitor

I don't have major opinions about monitors. My only real requirement here was that it had colour reproduction on par with my MacBook, so having a monitor with 'designer' in the name seemed like a decent bet.

The obtusely named [BenQ BL2420PT](https://www.benq.eu/en-uk/monitor/professional/bl2420pt.html) has been doing the job for a couple of years, and I don't really have much to say about it. It does what I want and it does it without issue. It also rotates. I love a rotating monitor.

It **is** weirdly totally out of whack when it comes to Windows, however, with basically everything on the lighter end of the brightness spectrum appearing completely white. This doesn't happen with any other device plugged into it. I just put it down to Windows being Windows-y.

### Other hardware

I use a laptop stand when I do happen to be at a desk. It's [a random one off Amazon](https://www.amazon.co.uk/gp/product/B073XJM2PJ/) that I got mainly because it fits the MacBook's aesthetic. So sue me.

On my desk, I have a [UGREEN 100 watt USB-C charger](https://www.amazon.co.uk/gp/product/B08XQHMTZL/), chosen because it's powerful enough to fast charge basically every device I have, MacBook Pro included.

## The software

### My OS: macOS Sonoma

I have a MacBook, I use macOS. Simple enough. I've gone to quite a few strides to customise my experience however, starting with a [Mac configuration script](https://github.com/querkmachine/dotfiles/blob/main/macos-config.sh) that sets all of the system settings I care about on my behalf.

This includes changing Finder to always use the column layout and to default to searching within the current folder, defining my Hot Corners, removing the delay on showing and hiding the Dock, and enabling developer tools in Safari.

I still have to do some manual bits. For example, I use [Karabiner Elements](https://karabiner-elements.pqrs.org/) to remap the <kbd>Caps Lock</kbd> key to act as a hyper key for keyboard shortcuts, which I then tie into [Raycast](https://www.raycast.com/) to shortcutise things that generally would be a lot harder to make work with keyboard shortcuts.

I can do an awful lot of things on my keyboard just by pressing <kbd>Caps Lock</kbd> and some random other key.

{% character character="ash", variant="tongue" %}
I also use Karabiner for mapping my mouse buttons.

I could do this with Logitech's own software, but why install it and have something extra running all the time when Karabiner is there already?
{% endcharacter %}

macOS tends to get more flak these days for being buggier and less 'refined' feeling than it once was. I can't say my own experience agrees with that. It has been **years** since I encountered an issue using macOS, and it remains the only operating system I really trust to get out of my way when I want to get my head down and be productive.

The iPad-like settings app is ugly as sin, though.

### My code editor: Nova (feat. Sublime Text)

I've never really gotten along with the current wave of Electron-based code editors.

From nearly the start of my learning web development until about 2021, I was an avid user of [Sublime Text](https://www.sublimetext.com/). Sublime is a wonderfully simple code editor, providing basically everything you need to write code well and to write it fast, and part of that is because it's an application native to the platform it's being used on. It is **fast**.

For a long time, Sublime's speed and simplicity spoiled me. I couldn't get on with other code editors because they were slow and cumbersome. I tried Atom when that was the hot stuff, I tried Brackets, and I've tried VS Code more than once over the years. I just don't get on with them. No matter how much they've iterated, they always felt just a little too... slow. Imperceptable to others, maybe, but the fractions of a second longer everything took was always noticeable to me.

So imagine my surprise when [Nova](https://nova.app) was introduced in 2020. And guess what? It was **fast**. It's made by [Panic](https://www.panic.com/), who have an extensive pedigree in creating excellent Mac-based developer tools, so I wasn't that surprised that it was good. It was surprising that it managed to usurp Sublime as my code editor of choice.

{% character character="ash", variant="love" %}
A perhaps unsung feature of Nova is that it's extensions API is really simple. So much so that [even I made one without too much trouble](https://extensions.panic.com/extensions/querkmachine/querkmachine.RandomizeEverything/).
{% endcharacter %}

I still use Sublime somewhat frequently. It's mass text editing features, like regex-based find and replace, are just unbeatable for some scenarios.

### My terminal: iTerm 2 / Oh My Zsh / Powerlevel10k

### My browser: Arc

### Other utilities

- Bartender
- ColorSlurp
- gitmoji
- Local
