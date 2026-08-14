export type Episode = {
  number: number;
  title: string;
  date: string;
  description: string;
  image?: string;
};

/**
 * TEMPORARY seed data captured from the live Church Co site, 2026-08-13.
 * Church Co renders this list client-side from a YouTube playlist feed —
 * it is NOT in this repo's control today.
 *
 * Once podcast hosting moves to Riverside (see BRIEF.md), replace this
 * function with a server-side fetch + parse of Riverside's RSS feed and
 * delete EPISODES below. The <EpisodeList /> component in
 * src/app/podcast/page.tsx doesn't need to change — it just needs the same
 * Episode[] shape back.
 */
export async function getEpisodes(): Promise<Episode[]> {
  return EPISODES;
}

const EPISODES: Episode[] = [
  {
    number: 18,
    title: "Matthew Efird | Practical Support for Grieving Families",
    date: "2026-07-29",
    description:
      "In this heartfelt interview, Matthew Efird shares his profound journey through the loss of his son Noah, offering insights on grief, faith, and how to support others in their darkest moments.",
    image: "/img/YouTube-Thumbnail-Podcast-Matthew-Efird__landscape__.webp",
  },
  {
    number: 17,
    title: "John Honold & Tom Wymore | Being and Making Disciples",
    date: "2026-06-29",
    description:
      "Andrew sits down with John Honold and Tom Wymore — two longtime practitioners behind the book Be. Go. Make. Disciples: The Jesus Way — to talk honestly about what it really takes to make disciples who make disciples.",
    image: "/img/YouTube-Thumbnail-Podcast-John-Honold__landscape__.webp",
  },
  {
    number: 16,
    title: "Jesse Crawford | Funding the Vision Through Support Raising",
    date: "2026-06-09",
    description:
      "Jesse Crawford shares his journey in church planting, focusing on fundraising strategies, overcoming fears, and building partnerships for kingdom work.",
    image: "/img/YouTube-Thumbnail-Podcast-Jesse-Crawford__landscape__.webp",
  },
  {
    number: 15,
    title: "Sean Thomé | Developing a Prayer Strategy",
    date: "2026-05-20",
    description:
      "Andrew Estes sits down with Sean Thomé, Executive Director of Expand Network, to talk about what it looks like to lead a church or ministry from a place of dependence on God.",
  },
  {
    number: 14,
    title: "Brady Sticker | ThinkNEXT ChurchCandy.com Sponsor Highlight",
    date: "2026-03-17",
    description:
      "This bonus session from ThinkNEXT 2026 features Brady Sticker from ChurchCandy.com, bringing practical insight into digital outreach and church growth.",
  },
  {
    number: 13,
    title: "Clint Burns, Phil Claycomb, & John Honold | ThinkNEXT Session 7",
    date: "2026-03-17",
    description:
      "This final session from ThinkNEXT 2026 begins with a devotional from Clint Burns, then Phil Claycomb and John Honold lead into a powerful teaching on The Antioch Church and what it means for the future of church planting and multiplication.",
  },
  {
    number: 12,
    title: "Andrew Estes | ThinkNEXT Session 6",
    date: "2026-03-17",
    description:
      "Andrew Estes shares a leadership challenge around risk, faith, and stepping into what God is calling you to next — \"running with scissors.\"",
  },
];
