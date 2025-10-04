---
layout: generic.njk
title: Frontend code snippets
metadata:
  description: Little bits of code to help do things kinda-sorta nicely.
---

A collection of frontend code snippets that aim to be usefully generic, whilst also being highly accessible and well documented. Hopefully.

<ul class="kimList kimList-spaced">
{% for post in collections.snippets %}
<li>
  <strong><a class="kimLink" href="{{ post.url }}">{{ post.data.title }}</a></strong>
  {%- if post.data.metadata.description %}
    {% markdown %}
      {{ post.data.metadata.description }}
    {% endmarkdown %}
  {%- endif %}
</li>
{% endfor %}
</ul>
