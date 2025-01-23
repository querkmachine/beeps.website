---
layout: generic.njk
title: Accessible snippets
metadata:
  description: Little bits of code to help do things accessibly.
---

<ul>
{% for post in collections.snippets %}
<li><a class="kimLink" href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>
