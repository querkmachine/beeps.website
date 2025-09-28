---
tag: mark
name: Mark Text
category: Text semantics
spec: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-mark-element
---

A piece of text that should be highlighted because of its relevance to the current context, for example, words the user has searched for in a list of search results.

<!-- prettier-ignore-start -->
```html
<h1>Search results for "rocket"</h1>

<h2>A brief history of <mark>rocket</mark> science</h2>
<p>In the beginning, there were no <mark>rocket</mark>s. There were barely even aircraft, with flight being a domain solely restricted to nature. We wouldn't invent the basic idea of a <mark>rocket</mark> until Wan Hu strapped 47 fireworks to a chair and tried to launch himself into space. Thus, the <mark>rocket</mark> was born.</p>
```
<!-- prettier-ignore-end -->

`mark` is only to highlight content relevant to the user's current context. To highlight text as being important, use [`strong`](#strong). To emphasise text generally, use [`em`](#em).
