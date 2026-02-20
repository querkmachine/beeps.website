const environment = process.env.ENVIRONMENT;

export default function () {
  return {
    name: "beeps",
    blogName: "beeps’ blog",
    blogDescription: "The inane ramblings of beeps.",
    stashName: "The stash",
    stashDescription:
      "A collated collection of resources and reading about website design and development.",
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
    navigation: [
      {
        heading: "Beeping",
        links: [
          {
            href: "/blog/",
            text: "Blog",
            description:
              "Aimless whitterings about life, web development, and other stuff.",
          },
          {
            href: "/now/",
            text: "beeps NOW!",
            description: "Stuff I've been up to recently.",
          },
          {
            href: "/about/",
            text: "About beeps",
            description: "Everything about me. Like, everything.",
          },
          {
            href: "/made-by-beeps/",
            text: "Made by beeps",
            description: "I have too many side projects.",
          },
        ],
      },
      {
        heading: "Web development",
        links: [
          {
            href: "/accessibility-for-furries/",
            text: "Accessibility for furries",
            description: "Free web accessibility audits for the fandom.",
          },
          {
            href: "/stash/",
            text: "The stash",
            description: "Collated links about website design and development.",
          },
          {
            href: "/govuk-browser-data/",
            text: "GOV.UK browser data",
            description:
              "Monthly analytics data from one of the UK's busiest websites.",
          },
        ],
      },
      {
        heading: "And more",
        links: [
          {
            href: "/ash/",
            text: "Ash the amphimorpho",
            description: "Reference sheet and lore for my fursona.",
            classes: "kimNavigation_link-ash",
          },
          {
            href: "/links/",
            html: "Cool links &amp; friend sites",
            description: "Neat peeps and neat things.",
          },
          {
            href: "/contact/",
            text: "Contact",
            description: "Get in touch! Or don't. It's a free internet.",
          },
        ],
      },
    ],
    footerLinks: [
      {
        heading: "About this website",
        links: [
          { href: "/brand/", text: "beeps' brand" },
          { href: "/colophon/", text: "Colophon" },
          { href: "/customise/", text: "Customise CSS" },
        ],
      },
      {
        heading: "Legal gubbins",
        links: [
          { href: "/accessibility/", text: "Accessibility statement" },
          { href: "/ai-policy/", text: "AI policy" },
          { href: "/privacy/", text: "Cookies and privacy" },
        ],
      },
      {
        heading: "Handy clickables",
        links: [
          {
            href: "/feed.xml",
            text: "Blog RSS feed",
            icon: "rss",
            attributes: {
              rel: "alternate",
              type: "application/atom+xml",
            },
          },
          {
            href: "/stash/feed.xml",
            text: "Stash RSS feed",
            icon: "rss",
            attributes: {
              rel: "alternate",
              type: "application/atom+xml",
            },
          },
          { href: "#top", text: "Back to top", icon: "arrow-n" },
        ],
      },
    ],
  };
}
