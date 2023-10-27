---
title: Introducing localisation to GOV.UK Frontend
date: 9999-01-01
tags: [web development]
---

In December 2022, we released [version 4.4 of GOV.UK Frontend](https://github.com/alphagov/govuk-frontend/releases/tag/v4.4.0), the library of coded styles and components that many of the United Kingdom's online government services are built upon.

This update introduced full-featured support for non-English languages for the first time; the first major piece of work I'd led on since I started working at the [Government Digital Service](https://www.gov.uk/government/organisations/government-digital-service) in March.

{% character variant="alarmed" %}
This blog post represents my own thoughts and experiences working on this.

I don't claim to represent the views of anyone else on the team, the civil service, or the government.
{% endcharacter %}

The UK boasts a rich blend of cultures and languages. Among the native written languages, we find English, Irish, Scots, Welsh, Gaelic, and Ulster Scots (with Cornish persisting as a second language).

In addition, the UK has sizeable historical populations of Punjabi, Urdu, Arabic, Bengali, and Gujarati users—languages rooted in regions of the former British Empire. The linguistic diversity extends further with European languages such as Polish, Romanian, Portuguese, Spanish, and Italian... and that's only the top 10 most used languages!

Collectively these make for a varied mix of alphabets, writing directionality, and grammatical structures.

Simple enough, right?

## Why do this now?

At the time this feature launched, GOV.UK had been going for over a decade. Why did we see the need to introduce better localisation support now, more than 10 years into its existence?

Well, firstly, it was never meant to be that way. The snappily-named <i>Welsh Language (Wales) Measure 2011</i> already created a statutory duty for public bodies operating in Wales to provide services in the Welsh language. GOV.UK does do this for a subset of services, but in a rather piecemeal fashion—[Welsh services are put in a big list on their own, only partially-translated page](https://www.gov.uk/cymraeg).

Before Frontend 4.4, each of these services would need to make their own fork of GOV.UK Frontend solely to be able to translate some strongs. Not an ideal situation for what is meant to be a consistent design system for government.

But the much more pressing reasons simply came from recent history.

The Brexit transition highlighted the need to be able to publish content in dozens of languages, in order to properly communicate the new customs and immigration arrangements that the UK would have with the European Union and the rest of the world.

The coronavirus pandemic also emphasised the need to be able to build new services and publish public health information at breakneck pace. Information that had to be understood and available to the widest possible swathe of the population.

{% character variant="innards" %}
With the frequently changing lockdown rules, some teams in GOV.UK were building new services and putting them live within a couple of days. Just dang.
{% endcharacter %}

At the time we were also in a period of intentional upheaval, the [GOV.UK Service Manual had already removed support for many legacy browsers like Internet Explorer](https://technology.blog.gov.uk/2022/06/16/service-manual-testing-requirement-changes-for-internet-explorer-11/) and plans were in motion for Frontend to follow suit.

For us this unlocked the ability to start refactoring and reworking Frontend on a foundational level, and introducing localisation was both timely and a great test case for how we could solve problems that cut across the entire system.

##

In the early stages of the work I did a lot of digging into existing localisation strategies. We wouldn't be the first to try and have components in multiple languages, after all.

But GOV.UK is, perhaps, a little special. Despite presenting itself as a single website—it's not. It's actually hundreds, if not thousands of websites, all operating with a shared design language under a shared brand.

This may sound a little crazy, but it's a necessity of how complex government is. No one team, no matter the size, could have the necessary resources and subject-matter knowledge to build and maintain every service for every government department.

So we don't. HMRC's services are built and ran by HMRC's tech team, the Home Office's by the Home Office's tech team, and so on for every department and unit.

_How_ they build these services is almost entirely their prerogative. They can use whatever processes or technology stack they want so long as they follow [the Service Standard](https://www.gov.uk/service-manual/service-standard).

This means we couldn't make any assumptions about the developer environment—we have no control over the server or what programming languages it might understand, and no control over the build or compilation process.

We would need to rely on client-side JavaScript for our entire implementation, whilst also [not relying on JavaScript at all](https://www.gov.uk/service-manual/technology/using-progressive-enhancement).

## Still much to do

- Complex grammars
- Language switcher component
- Right-to-left languages
