---
title: "Alt text: How to write it and why"
date: 9999-01-01
tags: [web development]
metadata:
  description: How to write useful alternate text, and why you should be doing it in the first place.
cssComponents:
  - code
  - blockquote
---

Alt text! Alternate text. Text that is an alternative.

Alternate text is text that describes an image, in case the image cannot be consumed in the conventional manner one would consume an image.

But you probably knew all that. All decent websites and social apps will let you write some alternate text whenever you upload an image.

This is a post about _why_ you should write alt text and _how_ to do a decent job of it.

## {% responsiveImage "./src/images/alt-text-why.png", "Graphic mimicking an image that has failed to load, displaying a 'broken image' icon and faux alt text reading 'Why you should write alt text'" %} <span class="kim-!-sr" aria-hidden="true">Why you should write alt text</span>

Alt text makes images understandable. That's it. That's the reason.

Notice I didn't say "understandable to blind people". Although alt text is an essential tool in the belt of online accessibility (and frankly, that should be reason enough), alt text is useful for so much more.

Slow or patchy internet connection? Alt text helps those users quickly gain context, even if the image cannot load properly.

Partially archived webpage with missing images? Alt text helps describe what used to be there, even though it isn't there anymore.

Want search engines to know what's in the image? Alt text is a key indicator to search engines of what an image contains, improving search engine rankings.

Image just messy, confusing or difficult to understand? Alt text can help guide a user to what they should be looking for.

Alt text benefits others and it benefits you. There's few reasons not to use it, and many reasons why you should.

### But, but... can't optical machine AI learning image recognition do that for me?

No. Bad. Stop that.

Optical image recognition is good for two things: transcribing text, and having a vaguely confident guess that the round fuzzy thing in that picture is either a cat or a pillow.

Moreover, they lack one of the most important parts of any alt text: **context**. A machine learning algorithm might be able to guess what is in the image, but it sure as hell can't tell you _why_ it's in the image.

That may sound like a weird distinction, but this is why arguments that alt text should be fixed metadata that's embedded within images, rather than provided manually when posted, don't hold water. Fixed metadata cannot provide context.

## {% responsiveImage "./src/images/alt-text-tips.png", "A parody of the Linus Tech Tips YouTube channel logo, but it instead reads 'alternate text tips'." %} <span class="kim-!-sr" aria-hidden="true">Alternate text tips</span>

A picture may say a thousand words, but you don't need to write a thousand words to write good alt text.

### 1. Provide context

Uploading a painting of a beautiful nebula? Describe the shape and colours of the nebula.

Posted a photo of a person in a busy crowdcosplaying the personification of [Spirk](https://en.wikipedia.org/wiki/Kirk/Spock)? Describe the person, not the crowd.

Found a funny meme cat pic? Explain what it is about the cat looks funny!

You, and only you, know why you're posting the image. Only you know what part of the image is important and that people should be paying attention to. Use your alt text to describe the _why_ of the image, not just what's in it.

### 2. But don't repeat yourself

Text content is the foundation of the web, and images online are almost always posted alongside text content.

Alt text does not need to repeat other, nearby text content.

### 3. And avoid _too_ much detail

Try to stick to only what is needed to understand the image. This will usually only be one or two things, and those things are what you should spend most of your words describing.

> John, my newborn son, crying whilst being held in the arms of the midwife who helped deliver him. He already has some wispy brown hair growing in.

Notice that this example doesn't go through any effort to describe the gender or appearance of the midwife, nor does it describe the appearance of delivery room. The focus of the image is on the baby John,

### 4. Include any text within the image

If the image contains text content, you should transcribe this text within in the alt text.

As per point 1, only transcribe the text that is relevant to understanding the context. If you're posting the front page of a newspaper with a funny headline, for example, you only need to transcribe the headline and not any body copy, bylines, etc.

As per point 2, if any of the text in the image is duplicated in text content nearby, you can also likely omit it.

If the text is a speech bubble, on a sign, or some other medium other than 'just text', you may want to include that detail.

> The non-standard Underground roundel at Moorgate. A diamond-shaped sign filled with red and with a dark blue rectangle crossing horizontally through its middle. The word 'Moorgate' is written in white, narrow lettering inside of the rectangle.

### 5. Describe the type of image, if it's useful

You don't need to say that the image is an image, that much is usually obvious, however it _can_ be useful to describe what kind of image it is. A photograph? An illustration? A painting? Is it a pencil sketch? A Medieval manuscript? Watercolour? A grainy Polaroid? Is it of the Art Nouveau style?

All of these things can help a user better understand what they're looking (or not looking) at.

> 'Liberty Leading the People' by Eugene Delacroix. An 19th century Romantic oil painting about the French Revolution. It depicts a woman wearing a Phrygian cap holding a rifle and raising the French flag above a field of fallen soldiers, accompanied by people of all ages and classes wielding guns and swords.

In this example, describing the era, style and medium of the painting can help a user visualise its appearance.

### 6. Consider splitting up sequences

Imagine a book where you couldn't pause in the middle of reading it, couldn't flip back a page to re-read something and couldn't flip through to look something up. A book where you're forced to read it word-for-word from the start, every single time you want to read _any_ of it.

Sucks, right?

I would recommend splitting sequences, such as comic book pages, into individual panels. Being able to provide alt text for one panel at a time is usually easier on the person writing it, and provides for a less overwhelming experience for assistive technology users who have to interact with it.

If this isn't practical or possible, or there is some aspect of the layout or composition that is important to the context, then consider doing a panel-by-panel breakdown within the alt text.

> An issue of the newspaper comic strip 'Garfield', with three panels.
>
> Panel 1: Jon Arbuckle, a human man, sits in an armchair, reading a newspaper held in one hand whilst the other fumbles against a side table.
>
> Panel 2: Jon lowers his newspaper and looks towards the viewer. A thought bubble reads: 'Now where could my pipe be?'
>
> Panel 3: Cut to Garfield, an overweight orange and black cat, who is sat on the floor contentedly smoking a wooden pipe. A speech bubble from outside of the panel exclaims 'Garfield!'

In the spirit of not repeating yourself, if there are any recurring things within a sequence — such as people, settings or items — you probably only need to describe these on their first appearance.

### 7. Use a thousand words if you have to, but try not to

There has traditionally been some old 'best practice' that alt text should be quite short, usually only 120 characters. This was supposedly based on screen readers not reading any alt text longer than 125 characters.

At least as of today, this isn't the case, and alt text can be as long as it needs to be to get the point across.

That isn't permission to ramble, however. Focus your efforts on what's needed to understand the image and its context.

## The exceptions

There are a couple of situations where alt text can usually be left out.

The first is when an image exists purely for decorative reasons, such as if you're using an image as a border or to do a funky background gradient. Those images aren't really content, so describing them is superfluous and more likely to annoy an assistive technology user rather than help them understand what's on the page.

The other is when the _entire_ equivalent to alt text is given context through nearby text, in such a way that adding alt text would just repeat information without providing additional context.

In both of these cases, the `alt` attribute should be present but left empty, to make it clear that the omission of any alt text is intentional.
