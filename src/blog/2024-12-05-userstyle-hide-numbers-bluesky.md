---
title: A userstyle to hide the numbers on Bluesky
date: 2024-12-05
updated: 2026-08-05
tags: [web development]
metadata:
  description: Free yourself from the tyranny of subconsciously tying your self-worth to a bunch of digits.
interactions:
  host: social.beeps.gay
  username: beeps
  id: "113600811275036821"
cssComponents:
  - code
---

{% from "src/_macros/jump-link.njk" import kimJumpLink %}

Yeah, I'm going off about Bluesky, [again]({{ '/blog/2024-09-18-the-bluesky-haters-guide-to-using-bluesky/' | url }}).

Having spent some time on Cohost, the [sadly departed social networking site]({{ '/blog/2024-09-12-in-memory-of-cohost/' | url }}) that purposefully didn't display engagement statistics for anything and finding that _much healthier_ for my state of mind, I had ended up making a user style for Bluesky that did the same thing.

If you're not sure how to use a user style, check out [my blog post on user stylesheets from 2023]({{ '/blog/2023-04-26-using-userstyles-in-2023/' | url }}).

<p class="kimBody">{{ kimJumpLink({
  href: "https://gist.github.com/querkmachine/7de31af8c7b0324ae310a4ab97a33ec6/raw/hide-bluesky-stats.user.css",
  text: "View and install user style"
}) }}</p>

This code is provided as-is ~~and is unlikely to receive future updates~~.

~~Personally, I've stopped using Bluesky entirely. If you still want to see my online rambles over there, follow the bridged fediverse account instead.~~

Update: Never mind, I've ended up [back on Bluesky again](https://bsky.app/profile/beeps.gay).

## Updates

- 2026-08-05: This is now hosted as a GitHub Gist. If your user style manager supports it, [clicking this link will install the style](https://gist.github.com/querkmachine/7de31af8c7b0324ae310a4ab97a33ec6/raw/536da53426a51176f7543061cf4228e29743b06b/hide-bluesky-stats.user.css) and allow future updates to be applied automatically without you having to come back here.
- 2025-06-03: Updated to also remove follower and following counts on the popups that appear when hovering over a user name.
