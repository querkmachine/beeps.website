---
preTitle: Components
title: Blog card
cssComponents:
  - table
---

{% from "src/_includes/example.njk" import kimExample %}

The blog card displays a link to a singular blog post. These are used for blog post archives and for previous–next navigation.

{{ kimExample("blog-card", "Blog card") }}

Blog cards show the publication date and last updated date. They can optionally display a label before the post title, giving context to the link.

{{ kimExample("blog-card-label", "Blog card with label") }}

## Usage

Use when:

- Displaying a standalone link to a blog post.

Don't use when:

- Linking to a blog post as part of prose.
- Linking to something other than a blog post.

### Nunjucks parameters

| Parameter  | Default | Notes                                                                  |
| :--------- | :------ | :--------------------------------------------------------------------- |
| `element`  | `li`    | The HTML element used to render the card.                              |
| `prelabel` |         | Additional text to render before the post title.                       |
| `rel`      |         | Sets a `rel` attribute on the link, used for previous–next navigation. |
