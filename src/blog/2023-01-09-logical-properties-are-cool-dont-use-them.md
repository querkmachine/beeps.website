---
title: CSS logical properties are cool — don't use them
date: 2023-01-09
tags: [web development]
---

[Logical Properties and Values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties) is a CSS specification that aims to supplement 'physical' CSS properties and —ones that reference immutable physical directions, think like `margin-left` or `text-align: right`—with 'logical' versions that instead refer to more subjective points, like the 'start' or 'end' of something.

If this sounds familiar, that's because it's pretty much an evolution and extension of values introduced in Flexbox and Grid Layout: `justify-content: start`, `align-items: flex-end` and similar values have existed in CSS for some years now.

I've used Logical Properties and Values quite a lot already, in both personal and (at least one time) in a professional project, and I have _opinions_.

## Logical Properties are cool

The main use case for Logical Properties and Values is for localisation support. You can write your styles once and have them work for any language in any direction. Left-to-right, right-to-left and even vertically oriented scripts (like [Mongolian](https://en.wikipedia.org/wiki/Mongolian_script)) all work under the same logical system.

Whereas before you might have written CSS like this:

```css
/* Default: Left-to-right languages */
.thingy {
  display: inline-block;
  max-width: 150px;
  height: 3rem;
  margin-left: 1rem;
  border-bottom-width: 2px;
  float: left;
  text-align: right;
}

/* Overwrite some things for right-to-left languages (e.g. Arabic or Hebrew) */
[dir="rtl"] .thingy {
  margin-left: unset;
  margin-right: 1rem;
  float: right;
  text-align: left;
}
```

This isn't too fab. There's a repetition of rules needed, some rules need to be unset, and this doesn't even take into account vertically-oriented languages, which would also need the `max-width` and `height` rules to be changed.

With Logical Properties and Values, this code can be expressed just once:

```css
.thingy {
  display: inline-block;
  max-inline-size: 150px;
  block-size: 3rem;
  margin-inline-start: 1rem;
  border-block-end-width: 2px;
  float: inline-start;
  text-align: end;
}
```

"Wuh?" you might be thinking, "Where's my heights and widths and lefts and rights?"

Well, they're gone. How wide or tall an element is usually depends on something text-based. A fancy button being 200 pixels wide and 40 pixels tall makes sense for left-to-right languages, and even still works for right-to-left ones, but switch into a vertical `writing-mode` and now it's reverse—you want a button that's 40 pixels wide and 200 pixels tall instead.

To communicate these, the Logical Properties and Values spec instead uses the keywords `inline` and `block`. `inline` refers to the axis that text naturally flows in—left-to-right, right-to-left, top-to-bottom. `block` refers to the axis perpendicular to the flow of text.

Each of these axes has a `start` and an `end` which map to different physical properties, again depending on the directionality of the text.

Thus, `margin-left` becomes `margin-inline-start`, `border-bottom-width` becomes `border-block-end-width`, and `text-align: right` becomes `text-align: end`.

In most cases, it's possible to simply find-and-replace instances of top, right, bottom or left with the logical equivalent and the job's a good 'un. And thus we start entering the murkier waters of the current Logical Properties spec... there are exceptions.

## The exceptions are less cool

The `width` and `height` physical properties become `inline-size` and `block-size`, respectively. I assume just having them named `inline` and `block` would make them too easily confused with the `display` property values.

The physical positioning properties `top`, `right`, `bottom` and `left` are replaced _and_ prefixed with `inset-`, so `inset-block-start`, `inset-inline-end`, etc. Again, makes sense, if a little inconvenient.

Conversely, the `float` property's `left` and `right` values have been replaced with `inline-start` and `inline-end`. This is totally incongruous with `text-align`'s equivalent `start` and `end`, and I'm not sure why this is the case. Apparently, there are `block` floats coming at some point? Who knows.

Most egregious however are `border-radius` properties. Based on some of what I've described above, you'd expect, for example, `border-top-right-radius` to have become `border-block-start-inline-start-radius`. It's not. It's `border-start-start-radius`. I can see why they would want to keep the property names short, but the sudden need to remember the specific block-axis-then-inline-axis order when no other property explicitly requires this is a little frustrating.

## The new shorthands are really cool, though

An exciting side-effect of logical properties is the new shorthands that they make possible.

Previously, `margin-left` and `margin-right` didn't belong to any particular group. They were margins, sure, but despite both existing on the same axis, they had no real, intrinsic relation to one another.

Well, now they do. They're `margin-inline-start` and `margin-inline-end`—so, wonderfully, you can now set both of them at once with just `margin-inline`. Schweet! And of course, there's `margin-block`, and equivalent properties exist for `padding-`, `border-` and the new `inset-` group too.

Speaking of `inset`, have you ever been making one of those full-screen modals and ended up writing something like this?

```css
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
```

Well, there's a shorthand for that too now. Using `inset`, you can set all four of those at once.

```css
.overlay {
  position: fixed;
  inset: 0;
}
```

I've found myself using and appreciating these new shorthands an awful lot. They're more useful than you might expect.

## The old shorthands are... getting there?

But what about `margin`, `padding`, `border-width` and our existing shorthands?

These currently map their (up to four) values to physical equivalents: top, right, bottom, and left. We can't just take a once purely physical value order and make it mean something else entirely in a right-to-left or vertical context—that'll break existing CSS, and breaking existing CSS is no good.

For these properties, a new `logical` keyword is being introduced. This is experimental, no browsers seem to support it currently and [even the spec says it's still likely to change](https://drafts.csswg.org/css-logical/#logical-shorthand-keyword), so it's not something you can rely on just yet.

## So why not use Logical Properties and Values?

Basically: I don't think they're ready yet.

The spec is still changing quite quickly. Properties are still being added and changed (`inset-` used to be `offset-`), the `logical` shorthand is still marked as highly changeable, and support by browsers—up until recently—has been pretty piecemeal, supporting some parts of the spec but not others.

The [postcss-logical](https://www.npmjs.com/package/postcss-logical) package can alleviate some of these problems by transpiling the properties down to their physical equivalents, but this negates many of the benefits of using the logical versions in the first place, doesn't support vertical writing modes, and often ends up introducing its own issues ([here's one I reported earlier](https://github.com/csstools/postcss-logical/issues/37)).

From a more pragmatic perspective, unless you're building a site or service that is likely to be localised into multiple languages at some point, there isn't really any reason to use Logical Properties and Values. Aside from the new shorthands, logical CSS is pretty much always longer and more difficult to mentally parse than the physical equivalent.

And if you're working on the same project as someone else, well, look forward to either a lot of mentoring or a lot of code review and correction. Logical Properties and Values just aren't mainstream enough yet for many CSS developers to know how to use them—[73% of developers had never used them](https://2022.stateofcss.com/en-US/features/layout/#logical_properties) as of last year's State of CSS survey.

## Conclusion

I adore the Logical Properties and Values specification. I honestly do. Internationalisation and building a web usable by everyone is one of the areas of front-end web development that really takes my interest, and this spec does a ton of work in making that much simpler to pull off.

But it _is_ a niche need. A lot of websites are mono-lingual—and even many multi-lingual ones are entirely languages that have the same directionality. There isn't much utility in using the logical equivalents unless your audience is firmly nestled in that multi-lingual, multi-directional nook and is also all using evergreen browsers.

And, having used logical properties semi-consistently for probably around two years, I don't think it's _quite_ there yet. Close, but still a little rough around the edges in real terms. This is more down to implementations rather than the specification itself, but ultimately it's the implementations that matter.

Still, if you're a curious front-ender with some time to kill, I suggest checking Logical Properties and Values out. Who knows? You might actually need it someday.
