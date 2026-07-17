---
layout: generic.njk
title: Homepage history
updated: 2026-07-17
metadata:
  description: A visual record of this website's many redesigns, via the homepage.
---

A visual record of this website's many redesigns, via screenshots of the homepage.

{% set dates = [
  "2022-03",
  "2022-06",
  "2022-08",
  "2022-09",
  "2022-12",
  "2023-03",
  "2023-08",
  "2024-01",
  "2024-02",
  "2024-08",
  "2024-10",
  "2024-12",
  "2025-02",
  "2025-08",
  "2025-10",
  "2025-12",
  "2026-01",
  "2026-05",
  "2026-06"
] %}

{%- for date in dates %}

## {{ date }}

{% image "/images/design-history/" + date + ".png", "" %}
{%- endfor%}
