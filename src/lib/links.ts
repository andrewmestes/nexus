/**
 * External destinations used across the site.
 * Captured from the live Church Co site 2026-08-13 — these are the real IDs, keep them in sync.
 */

// Planning Center / Church Center. These stay on PCO after the migration.
export const PCO = {
  /** "Get Started" / church-planting interest form */
  interestForm:
    "https://nexuschurchplanting.churchcenter.com/people/forms/138466?open-in-church-center-modal=true",
  /** "Join Our Email List" newsletter signup */
  emailList:
    "https://nexuschurchplanting.churchcenter.com/people/forms/240520?open-in-church-center-modal=true",
  /** Untangled cohort signup */
  untangledCohort:
    "https://nexuschurchplanting.churchcenter.com/people/forms/795608?open-in-church-center-modal=true",
  giving: "https://nexuschurchplanting.churchcenter.com/giving",
  registrations: "https://nexuschurchplanting.churchcenter.com/registrations",
  /** ThinkNEXT event registration */
  thinkNextEvent:
    "https://nexuschurchplanting.churchcenter.com/registrations/events/3413434",
  /** Nexus Leadership Institute registration category */
  nliCategory:
    "https://nexuschurchplanting.churchcenter.com/registrations/events/category/91161",
} as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/nexuschurchplanting/",
  instagram: "https://www.instagram.com/nexus_church_planting/",
  linkedin: "https://www.linkedin.com/company/nexus-church-planting-leader-care/",
  youtube: "https://www.youtube.com/channel/UCd5AMLFOOTjdiQ8wiwMW51Q",
} as const;

export const PODCAST = {
  apple:
    "https://podcasts.apple.com/us/podcast/nexus-church-planting-podcast/id1838803043",
  spotify: "https://open.spotify.com/show/0RU4eEarNZWO1cQ6r85MuS",
  /**
   * Church Co currently renders the podcast page from this YouTube playlist feed.
   * Replaced by the Riverside RSS feed once that migration happens.
   */
  legacyYoutubePlaylistFeed:
    "https://www.youtube.com/feeds/videos.xml?playlist_id=PL2M5iu3MSJfgd5ezEL0x6-MibBwqXggnd",
} as const;

/** Andrew Estes' discovery-call booking link (The Clarity Project) */
export const TIDYCAL_DISCOVERY = "https://tidycal.com/andrew-estes/discovery-call";

export const VISION_CLARITY = {
  home: "https://www.visionclarity.org/",
  funnelFusion: "https://www.visionclarity.org/funnel-fusion",
  godDreams: "https://www.visionclarity.org/god-dreams",
  younique: "https://www.visionclarity.org/younique",
  teamLeadership: "https://www.visionclarity.org/team-leadership",
} as const;

export const CONTACT = {
  email: "info@nexus.us",
  addressLine1: "4100 W. Eldorado Pkwy Ste 100 #318",
  addressLine2: "McKinney, TX 75070-4530",
  orgName: "Nexus Church Planting & Leader Care",
} as const;
