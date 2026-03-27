---
preTitle: Objects
title: Lists
---

{% from "src/_includes/example.njk" import kimExample %}

Lists are used for showing lots of consecutive things in an ordered manner. That's it. Jazz hands.

Lists generally warrant having some text or a heading introducing what the list is of. A list by itself is just a bit confusing.

## Plain lists

For when something is a list but it doesn't need a visual indicator against each item, like navigation lists.

{{ kimExample("lists-plain", "Plain list") }}

All other lists on this page are based on the plain list.

## Lists with numbers

For lists that expect the content to be read or followed in a certain order, like step-by-step instructions.

{{ kimExample("lists-numbered", "Numbered list") }}

## Lists with bullet points

For lists where the order of the items doesn't functionally matter, it's just a braindump of stuff, like an assortment of cheeses.

{{ kimExample("lists-bulleted", "Bullet point list") }}

## Lists with lots of text

If list items contain a lot of information, such as entire paragraphs of text, adding some extra spacing between the items can help maintain readability.

{{ kimExample("lists-spaced", "List with extra space between items") }}
