const environment = process.env.ENVIRONMENT;

export default function () {
  return {
    name: "beeps",
    blogName: "beeps' blog",
    blogDescription: "The inane ramblings of beeps.",
    authorName: "beeps",
    authorEmail: "hi@berly.kim",
    twitterUsername: "@batbeeps",
    mastodonUsername: "@beeps@social.beeps.gay",
    domain: "https://beeps.website",
    environment,
    relMe: [
      "https://chitter.xyz/@batbeeps",
      "https://social.beeps.gay/@beeps",
      "https://bsky.app/profile/beeps.gay",
      "https://twitter.com/batbeeps",
      "https://github.com/querkmachine",
    ],
    navigationLinks: [
      {
        heading: "More beeping",
        items: [
          { href: "/blog/", text: "Blog" },
          { href: "/now/", text: "NOW!" },
          { href: "/about/", text: "About beeps" },
          { href: "/contact/", text: "Contact" },
        ],
      },
      {
        heading: "Other stuff",
        items: [
          { href: "/ash/", text: "Ash the amphimorpho" },
          { href: "/brand/", text: "beeps brand" },
          { href: "/links/", text: "Cool links and friendsites" },
          { href: "/govuk-browser-data/", text: "GOV.UK browser data" },
        ],
      },
    ],
    footerLinks: [
      { href: "/colophon/", text: "Colophon" },
      {
        href: "/feed.xml",
        text: "Blog RSS feed",
        attributes: {
          rel: "alternate",
          type: "application/atom+xml",
        },
      },
      { href: "/privacy/", text: "Cookies and privacy" },
    ],
  };
}
