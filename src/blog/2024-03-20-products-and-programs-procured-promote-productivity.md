---
title: The products and programs I've procured to promote productivity
date: 2024-03-20
tags: [technology, web development]
metadata:
  description: The hardware and software I use for getting shit done.
interactions:
  host: chitter.xyz
  username: batbeeps
  id: "112129183724123641"
cssComponents:
  - callout
  - figure
  - character
  - code
---

I've used computers for a long time. Shocking, I know. Moreover, I've used computers **to be productive** for a long time, and I like to think I've curated a pretty refined set of tools to optimise how I do stuff, do it well, and do it fast.

Maybe that interests you! If so, this is a blog post for you.

And if not... [please enjoy this new Longest Johns track](https://www.youtube.com/watch?v=VuHq1dF1YeU). I'm currently addicted to the jovial, communal vibes it exudes.

{% callout %}
I've included links to websites and product pages for the things I mention here. They arent't affiliate links and I'm providing them as a courtesy so you can get more info if you're interested. I'm not getting peanuts from these.
{% endcallout %}

## The hardware

### My daily driver: MacBook Pro (M1 Pro)

My daily driver is a [14-inch M1 Pro MacBook Pro](https://support.apple.com/kb/SP854) that I have stickerbombed halfway to hell.

{% figure caption="<a href=\"https://www.redbubble.com/people/querkmachine/shop\">I actually created some of these stickers!</a> I really should get back into designing random merch." %}
{% image "/images/macbook-feb-2024.jpg", "A top-down photograph of a laptop that has been sticker bombed with dozens, if not hundreds, of stickers." %}
{% endfigure %}

Despite being a couple of years old now, it's still crazy fast thanks to the wildly good performance of Apple Silicon. If anything, it's overkill.

Basically nothing I do in my day-to-day design and development tasks even requires the fan to turn on: I virtually always have a code editor, terminal, multiple browsers, Photoshop, Illustrator, a half dozen Electron apps and a bunch of other background and utility apps open and the fans don't even have to turn on. It's crazy.

I could probably have gotten a desktop Mac that was even more overkill for the same money, but I've really come to depend on having a laptop. I **need** to be able to move around whilst working and that's pretty hard when you're tied down to a desk.

### My keyboard: Keychron K17 Pro

A few months ago I changed from the [Keychron K6](https://www.keychron.com/products/keychron-k6-wireless-mechanical-keyboard) (which I'd originally backed on Kickstarter) to the [Keychron K17 Pro](https://www.keychron.com/products/keychron-k17-pro-alice-layout-qmk-via-wireless-custom-mechanical-keyboard).

I'm a pretty big advocate for Keychron. They do relatively affordable mechanical keyboards with good build quality, support for multiple devices over Bluetooth and—perhaps crucially for my needs—Mac keys and keyboard layouts. The newer models are basically completely reprogrammable too, which is a delight.

My main motivation for changing which Keychron I was using was that the K6 is _very_ chunky, essentially requiring a palm rest to use it comfortably. Good for some, but not ideal for me, so I opted to replace it with the lower-profile K17 Pro. It has programmable macro buttons and a funky little dial. It's neat.

Admittedly, adjusting to actually using them over the shortcuts and function keys I'm used to is taking quite a while, but otherwise, I honestly have no complaints. Just like the K6 that came before it, it just works great.

### My mouse: Logitech MX Master 3 for Mac

I've gone through a fair number of mice in my time, but I've currently settled on [Logitech's MX Master 3 for Mac](https://www.logitech.com/en-ae/products/mice/mx-master-3-mac-wireless-mouse.910-005696.html).

{% character character="ash", variant="thinking" %}
"A mouse just for Macs?" you might be pondering. Yeah, not really, the 'for Mac' designator just seems to mean that it doesn't come with a USB Bluetooth adaptor because Macs don't usually need one.
{% endcharacter %}

Like the Keychron, I mostly appreciate this mouse for having a bunch of freely programmable macro buttons on it that I make heavy use of. Having a dedicated horizontal scroll wheel is also really darn useful when navigating in two-dimensional space, as you often are in image editing applications.

My one gripe with this mouse is the 'gesture button'. It's inconveniently located, being a good 1 to 2 centimetres below where my thumb is usually resting, and difficult to press, as it's underneath the grippy rubber material on that part of the mouse. I mostly just don't use it.

### My monitor: BenQ BL2420PT Designer Monitor

I don't have major opinions about monitors. My only real requirement here was that it had colour reproduction on par with my MacBook, so having a monitor with 'designer' in the name seemed like a decent bet.

The obtusely named [BenQ BL2420PT](https://www.benq.eu/en-uk/monitor/professional/bl2420pt.html) has been doing the job for a couple of years, and I don't really have much to say about it. It does what I want and it does it without issue. It also rotates. I love a rotating monitor.

It **is** weirdly totally out of whack when it comes to Windows, however, with basically everything on the lighter end of the brightness spectrum appearing completely white. This doesn't happen with any other device plugged into it. I just put it down to Windows being Windows-y.

### Other hardware

I use a laptop stand when I do happen to be at a desk. It's [a random one off Amazon](https://www.amazon.co.uk/gp/product/B073XJM2PJ/) that I got mainly because it fits the MacBook's aesthetic. So sue me.

On my desk, I have a [UGREEN 100 watt USB-C charger](https://www.amazon.co.uk/gp/product/B08XQHMTZL/), chosen because it's powerful enough to fast charge basically every device I have, MacBook Pro included.

## The software

### My OS: macOS

I have a MacBook, I use macOS. Simple enough. I've gone to quite a few strides to customise my experience however, starting with a [Mac configuration script](https://github.com/querkmachine/dotfiles/blob/main/macos-config.sh) that sets all of the system settings I care about on my behalf.

This includes changing Finder to always use the column layout and to default to searching within the current folder, defining my Hot Corners, removing the delay on showing and hiding the Dock, and enabling developer tools in Safari.

I still have to do some manual bits. For example, I use [Karabiner Elements](https://karabiner-elements.pqrs.org/) [free] to remap the <kbd>Caps Lock</kbd> key to act as a hyper key for keyboard shortcuts. I can do an awful lot of things on my keyboard just by pressing <kbd>Caps Lock</kbd> and some random other key.

{% character character="ash", variant="tongue" %}
I also use Karabiner for mapping my mouse buttons.

I could do this with Logitech's own software, but why install it and have something extra running all the time when Karabiner is there already?
{% endcharacter %}

macOS tends to get more flak these days for being buggier and less 'refined' feeling than it once was. I can't say my own experience agrees with that. It has been **years** since I encountered an issue using macOS, and it remains the only operating system I really trust to get out of my way when I want to get my head down and be productive.

The iPad-like settings app is ugly as sin, though.

### My code editor: Nova (feat. Sublime Text)

I've never really gotten along with the current wave of Electron-based code editors.

From nearly the start of my learning web development until about 2021, I was an avid user of [Sublime Text](https://www.sublimetext.com/) [all features free, payment optional]. Sublime is a wonderfully simple code editor, providing basically everything you need to write code well and to write it fast, and part of that is because it's an application native to the platform it's being used on. It is **fast**.

For a long time, Sublime's speed and simplicity spoiled me. I couldn't get on with other code editors because they were slow and cumbersome. I tried Atom when that was the hot stuff, I tried Brackets, and I've tried VS Code more than once over the years. I just don't get on with them. No matter how much they've iterated, they always felt just a little too... slow.

Imperceptible to others, maybe, but the fractions of a second longer everything took was always noticeable to me.

So imagine my surprise when [Nova](https://nova.app) [paid, subscription required for updates after the first year] was introduced in 2020.

{% figure caption="Writing this very blog post in Nova. How meta." %}
{% image "/images/nova.png", "A screenshot of a code editor. The top has a list of tabs. The main part of it shows the current blog post, as it is being authored in Markdown. The left shows a sidebar with a long list of files in it of various types. The bottom shows a terminal prompt, with information about the site being built." %}
{% endfigure %}

And guess what? It was **fast**. It's made by [Panic](https://www.panic.com/), who have an extensive pedigree in creating excellent developer tools for Mac and iOS, so I wasn't that surprised that it was good. It was surprising that it managed to usurp Sublime as my code editor of choice.

{% character character="ash", variant="love" %}
A perhaps unsung feature of Nova is that its extensions API is ludicrously simple. So much so that [even I made one without too much trouble](https://extensions.panic.com/extensions/querkmachine/querkmachine.RandomizeEverything/).
{% endcharacter %}

I still use Sublime somewhat frequently. It's bulk text editing features, like regex-based find and replace, are just unbeatable for some situations.

### My terminal: iTerm, Zsh & Powerlevel10k

Nova has a terminal built right into it, so why do I still use [iTerm 2](https://iterm2.com/) [free]? I'll be honest, probably just because I've used it for so long. It's been 12 years since I started using it, and I've never had a compelling reason to change away.

It can be bound to a global hotkey, which is useful. It has split panes, which is useful. It's crazy configurable in ways I've never used and probably never will, which is useful in a sense.

{% figure caption="I have iTerm remain permanently docked to the top half of my screen and focusable with a quick keypress." %}
{% image "/images/iterm.png", "A screenshot of a terminal app. The top has a list of tabs. The left half shows the output of the 'neofetch' command, which has returned various pieces of system hardware and software information next to an ASCII representation of the Apple logo. The right shows the text of the current page as returned by the 'cat' command. The bottom of the window includes more system details, including battery level, CPU usage and network utilisation." %}
{% endfigure %}

A much more conscious choice is my use of Zsh. Zsh (or Z shell, when it's been naughty) is the default on macOS these days, but I've been using it for a fair while longer than that. It's got some useful features going for it that Bash doesn't (File globbing! In-prompt information! Command history!), whilst still being Bash-like enough basically anything that works in Bash will usually also work in Zsh.

[Oh My Zsh](https://ohmyz.sh/) [free] enhances Zsh even more by adding a plugin ecosystem on top of it. I pretty much just use this to add autocompletion support for various tools.

I use [Powerlevel10k](https://github.com/romkatv/powerlevel10k) [free] for my terminal theme. You wouldn't expect a theme to be that notable, but p10k really leverages a lot of the features that Zsh has, but in an incredibly user-friendly and aesthetically pleasing way. You can really make Zsh shine with it.

### My browser: Arc

I wrote [a whole blog post just about Arc]({{ '/blog/2023-12-10-initial-experiences-using-arc-browser/' | url }}) [free] relatively recently. I'm not gonna bother reiterating everything in there, just go read that if you're interested.

My views on it now are mostly the same as they were then. For better or worse, they've gone harder into using finger-quotes 'AI' (rather, large language models) in more recent product development decisions, particularly in the new mobile app.

The founder/senior leaders have started spouting what I will _generously_ call 'big tech bullshit' a lot more, as if Arc is functionally a replacement for search engines or websites themselves, which I'm certainly not too keen on, but until that starts affecting the quality of the actual product, I'm just going to pretend they don't exist.

### Lightning round

Can I live without [Raycast](https://www.raycast.com/) [free with premium tiers]? Probably. Would I be anywhere as productive? Probably not. An extensible, customisable keyboard launcher that can be pulled up multiple times a minute is a must-have for me. On top of that, it provides clipboard history, window management, file search, text expansion, and so much more. Hot tip: Raycast works really well with the hyper key concept I mentioned alongside Karabiner-Elements earlier!

{% figure caption="Having a dictionary and thesaurus you can open in less than a second is really helpful when writing blog posts." %}
{% image "/images/raycast.png", "A screenshot of A white, somewhat glossy window, which is showing the dictionary definitions and synonyms for the words 'productivity'." %}
{% endfigure %}

I think [1Password](https://1password.com/) [paid subscription] is probably the best password manager in the world. It does pretty much everything I can imagine ever wanting a password manager to do and it does it with the level of refinement that you expect of top-tier Mac software.

My MacBook has a notch. I personally don't mind the notch all that much—you do just kinda forget it's there after the first couple of hours—but what isn't so fun is the loss of menu bar space. [Bartender](https://www.macbartender.com/Bartender5/) [paid] lets you remove the system menu items you never use, modify the spacing between icons, or just hide them entirely until you want them, they have an update, or permanently.

Now that some menu bar space has been freed up, get [MeetingBar](https://meetingbar.app/) [free]. Calendar notifications are easy to miss; a clock at the top of the screen constantly counting down to your next meeting is not. Then it's just one click and you're in.

---

This was by no means an exhaustive list of the hardware and software I use. I've tried to keep things focused very much on the fundamentals of my set-up and the tools I've honed in the pursuit of productivity. It's certainly not a list of everything you'll see me using day-to-day.

I also excluded listing terminal utilities outside of Oh My Zsh and Powerlevel10k, but I use quite a lot of those too! Terminal fans may want to delve into [my dotfiles repo on GitHub](https://github.com/querkmachine/dotfiles) to see what I'm doing in that space.

Are there any tools you find indispensable for productivity and development? I'm always open to testing out new things, so I'd be interested to hear about them! [Hit up my Mastodon](https://chitter.xyz/@batbeeps) with any recommendations.
