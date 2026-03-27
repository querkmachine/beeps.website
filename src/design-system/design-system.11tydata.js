const sectionPath = "/design-system";
const navigation = [
  {
    name: "Styles",
    items: [
      { href: `${sectionPath}/colour/`, label: "Colour" },
      { href: `${sectionPath}/spacing/`, label: "Spacing" },
      { href: `${sectionPath}/fonts/`, label: "Fonts" },
      { href: `${sectionPath}/font-sizes/`, label: "Font sizes" },
      { href: `${sectionPath}/borders/`, label: "Borders" },
      { href: `${sectionPath}/layout/`, label: "Layout" },
      { href: `${sectionPath}/icons/`, label: "Iconography" },
    ],
  },
  {
    name: "Objects",
    items: [
      { href: `${sectionPath}/headings/`, label: "Headings" },
      { href: `${sectionPath}/body-text/`, label: "Body text" },
      { href: `${sectionPath}/links/`, label: "Links" },
      { href: `${sectionPath}/lists/`, label: "Lists" },
      { href: `${sectionPath}/rules/`, label: "Rules" },
      { href: `${sectionPath}/grid/`, label: "Grid" },
      { href: `${sectionPath}/skiplink/`, label: "Skiplink" },
    ],
  },
  {
    name: "Components",
    items: [
      { href: `${sectionPath}/blockquote/`, label: "Blockquote" },
      { href: `${sectionPath}/blog-card/`, label: "Blog card" },
      { href: `${sectionPath}/button-grid/`, label: "Button grid" },
      { href: `${sectionPath}/callout/`, label: "Callout" },
    ],
  },
];

export default {
  layout: "design-system.njk",
  mastheadSection: {
    href: sectionPath + "/",
    text: "Design System",
  },
  cssComponents: ["code", "example"],
  navigation,
};
