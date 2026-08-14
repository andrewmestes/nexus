export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV: NavItem[] = [
  {
    label: "Plant",
    href: "/church-planter-pathway",
    children: [
      { label: "Church Planter Pathway", href: "/church-planter-pathway" },
      { label: "Assessment", href: "/assessment" },
      { label: "Training", href: "/training" },
      { label: "Coaching", href: "/coaching" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Church-Planting Wives", href: "/untangled" },
  { label: "Podcast", href: "/podcast" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Training Resources", href: "/resources" },
      { label: "The Clarity Project", href: "/the-clarity-project" },
      { label: "The Bonhoeffer Project", href: "/bonhoeffer" },
    ],
  },
  { label: "Nexus Leadership Institute", href: "/leadership-institute" },
  { label: "Partner With Us", href: "/partner-with-us" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Donate", href: "/donate" },
];

export { PCO } from "./links";
