const environment = process.env.ENVIRONMENT;

module.exports = function () {
  return {
    name: "beeps",
    blogName: "beeps' blog",
    authorName: "beeps",
    authorEmail: "hi@berly.kim",
    twitterUsername: "@batbeeps",
    domain: environment === "prod" ? "https://beeps.website" : "",
    environment,
    relMe: [
      "https://chitter.xyz/@batbeeps",
      "https://twitter.com/batbeeps",
      "https://github.com/querkmachine",
    ],
    footerLinks: [
      { href: "/about/", text: "About beeps" },
      { href: "/now/", text: "beeps NOW!" },
      { href: "/ash/", text: "Ash the amphimorpho" },
      { href: "/brand/", text: "beeps' brand" },
      { href: "/contact/", text: "Contact beeps" },
    ],
    legalLinks: [
      { href: "/links/", text: "Cool links" },
      { href: "/colophon/", text: "Colophon" },
      { href: "/privacy/", text: "Cookies and privacy" },
      {
        href: "/feed.xml",
        text: "RSS feed",
        attributes: {
          rel: "alternate",
          type: "application/rss+xml",
        },
      },
    ],
  };
};
