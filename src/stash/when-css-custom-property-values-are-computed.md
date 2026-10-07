---
title: Controlling when CSS custom property values are computed
href: https://jakearchibald.com/2026/css-custom-property-compute-time/
date: 2026-10-07
---

About using `@property` to 'fix' the value of a custom property at the point that it's set, so that it isn't reevaluated for child elements (sort of like a constant). Useful for `sibling-index()` and `sibling-count()` functions that would return different values otherwise. Kinda next level stuff?
