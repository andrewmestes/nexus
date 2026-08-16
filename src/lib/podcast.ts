/**
 * Nexus Church Planting Podcast episode data, hosted by Andrew Estes.
 * Captured 2026-08-14 from the same show's presentation on visionclarity.org/podcast/
 * (same YouTube playlist, same Apple show ID 1838803043) plus the numbered-episode
 * detail already live on nexus.us. Static — no feed to poll (see BRIEF.md re: Riverside).
 */

export type FeaturedEpisode = {
  youtubeId: string;
  title: string;
  duration: string;
  description: string;
  appleUrl: string;
};

export type ArchiveEpisode = {
  youtubeId?: string;
  title: string;
  duration?: string;
  date?: string;
  description?: string;
  appleUrl?: string;
  /** Local thumbnail fallback for episodes without a known YouTube ID. */
  image?: string;
};

export const FEATURED_EPISODES: FeaturedEpisode[] = [
  {
    youtubeId: "1TaB1nctoqI",
    title: "Future Church With Will Mancini",
    duration: "1:03:19",
    description:
      "Will Mancini, founder of Auxano and author of Church Unique and Future Church, unpacks the biggest shift facing the North American church: moving from the upper room to the lower room.",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/future-church-with-will-mancini/id1838803043",
  },
  {
    youtubeId: "5d51u_OUuqY",
    title: "Canoeing The Mountains With Tod Bolsinger",
    duration: "53:50",
    description:
      "Tod Bolsinger, author of Canoeing the Mountains, joins Andrew to talk about leading a church through uncharted territory. Drawing on Lewis and Clark, he shows what it takes to lead when the map runs out.",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/canoeing-the-mountains-with-tod-bolsinger/id1838803043",
  },
  {
    youtubeId: "9YB0leA8gFA",
    title: "Church Plantology: The Art and Science of Planting Churches with Peyton Jones",
    duration: "58:38",
    description:
      "Peyton Jones, author of Church Plantology, on planting churches the way the New Testament actually describes it — first-century crews versus solo-planter burnout.",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/church-plantology-the-art-and-science-of/id1838803043",
  },
  {
    youtubeId: "ef3x-G9aNsY",
    title: "Ordinary Discipleship with Jessie Cruickshank",
    duration: "1:03:28",
    description:
      "Jessie Cruickshank, author of Ordinary Discipleship and a Harvard-trained neuroeducator, shows how the brain actually changes and why discipleship has to work with it, not against it.",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/ordinary-discipleship-with-jessie-cruickshank/id1838803043",
  },
  {
    youtubeId: "9yQzBXbTmrY",
    title: "The Care of Souls With Dr. Harold Senkbeil",
    duration: "55:41",
    description:
      "Dr. Harold Senkbeil, author of The Care of Souls, on the pastor's oldest craft: attending to real people the way a shepherd attends the flock.",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/the-care-of-souls-with-dr-harold-senkbeil/id1838803043",
  },
];

export const ARCHIVE_EPISODES: ArchiveEpisode[] = [
  {
    youtubeId: "vYBpTC9D9dc",
    title: "18 Matthew Efird | Practical Support for Grieving Families",
    date: "2026-07-29",
    description:
      "In this heartfelt interview, Matthew Efird shares his profound journey through the loss of his son Noah, offering insights on grief, faith, and how to support others in their darkest moments.",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/nexus-church-planting-podcast/id1838803043",
    image: "/img/YouTube-Thumbnail-Podcast-Matthew-Efird__landscape__.webp",
  },
  {
    youtubeId: "dXdcKxDLnvo",
    title: "17 John Honold & Tom Wymore | Being and Making Disciples",
    duration: "1:01:34",
    date: "2026-06-29",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/17-john-honold-tom-wymore-being-and-making-disciples/id1838803043",
    image: "/img/YouTube-Thumbnail-Podcast-John-Honold__landscape__.webp",
  },
  {
    youtubeId: "Jd7eDxN2Ayw",
    title: "16 Jesse Crawford | Funding the Vision Through Support Raising",
    duration: "47:18",
    date: "2026-06-09",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/16-jesse-crawford-funding-the-vision-through-support/id1838803043",
    image: "/img/YouTube-Thumbnail-Podcast-Jesse-Crawford__landscape__.webp",
  },
  {
    youtubeId: "ikCUHkEHwiE",
    title: "15 Sean Thomé | Developing a Prayer Strategy",
    duration: "56:20",
    date: "2026-05-20",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/15-sean-thom%C3%A9-developing-a-prayer-strategy/id1838803043",
  },
  {
    youtubeId: "MazX4gkCKAU",
    title: "Clint Burns, Phil Claycomb, & John Honold | ThinkNEXT Session 7",
    duration: "1:33:33",
    date: "2026-03-17",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/13-clint-burns-phil-claycomb-john-honold-thinknext/id1838803043",
  },
  {
    youtubeId: "8SYUAR1EjIc",
    title: "Brady Sticker | ThinkNEXT ChurchCandy.com Sponsor Highlight",
    duration: "38:23",
    date: "2026-03-17",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/14-brady-sticker-thinknext-churchcandy-com-sponsor/id1838803043",
  },
  {
    youtubeId: "uMMOoGxKklk",
    title: "Andrew Estes | ThinkNEXT Session 6",
    duration: "24:35",
    date: "2026-03-17",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/12-andrew-estes-thinknext-session-6/id1838803043",
  },
  {
    youtubeId: "ndTnrwUG2Ko",
    title: "ThinkNEXT Session 5 (Roy Moran)",
    duration: "1:05:29",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/11-roy-moran-thinknext-session-5/id1838803043",
  },
  {
    youtubeId: "SGn-1E8c28w",
    title: "ThinkNEXT Session 4 (Rowlie Hutton)",
    duration: "24:11",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/10-rowlie-hutton-thinknext-session-4/id1838803043",
  },
  {
    youtubeId: "tKaOLP2iBqw",
    title: "ThinkNEXT Session 3 (Roy Moran)",
    duration: "39:06",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/11-roy-moran-thinknext-session-5/id1838803043",
  },
  {
    youtubeId: "x2EheFWGcoE",
    title: "ThinkNEXT Session 2 (Roy Moran)",
    duration: "1:03:45",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/11-roy-moran-thinknext-session-5/id1838803043",
  },
  {
    youtubeId: "JOMOR-MMQns",
    title: "Phil Claycomb & Roy Moran | ThinkNEXT Session 1",
    duration: "1:10:56",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/07-phil-claycomb-roy-moran-thinknext-session-1/id1838803043",
  },
  {
    youtubeId: "ArMl_6bVKqs",
    title: "06 Alan Briggs | Demystifying Sabbaticals",
    duration: "49:09",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/06-alan-briggs-demystifying-sabbaticals/id1838803043",
  },
  {
    youtubeId: "y608BbbjbG8",
    title: "05 Phil & Barb Claycomb | Celebrating 20 Years of Nexus Church Planting",
    duration: "1:00:00",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/05-phil-barb-claycomb-celebrating-20-years-of-nexus/id1838803043",
  },
  {
    youtubeId: "g1miQU-97tM",
    title: "04 Drew Depler | Unlocking Generosity in Your Church",
    duration: "56:28",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/04-drew-depler-unlocking-generosity-in-your-church/id1838803043",
  },
  {
    youtubeId: "ghlpGqhZJlA",
    title: "03 Jacob Hoyer | Embracing a Missional Mindset",
    duration: "56:49",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/03-jacob-hoyer-embracing-a-missional-mindset/id1838803043",
  },
  {
    youtubeId: "YX861T6YGWo",
    title: "02 Joey McGlaughlin | Developing a Reproducible Disciple-Making Pathway",
    duration: "56:36",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/02-joey-mcglaughlin-developing-a-reproducible/id1838803043",
  },
  {
    youtubeId: "KEZEJo7EyxU",
    title: "01 Brady Sticker | Connecting with Unchurched People Through ChurchCandy.com",
    duration: "52:11",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/01-brady-sticker-connecting-with-unchurched-people/id1838803043",
  },
  {
    youtubeId: "nL10fBRmiJY",
    title: "Global Discipleship Principles That Apply in the West with Cory Hartman",
    duration: "1:00:27",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/global-discipleship-principles-that-apply-in-the-west/id1838803043",
  },
  {
    youtubeId: "mzNNxJx8jRA",
    title:
      "Beyond High Performance: Unlocking the Full Potential of Your Ministry Team with Joseph King Barkley",
    duration: "1:00:08",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/beyond-high-performance-with-joseph-king-barkley/id1838803043",
  },
  {
    youtubeId: "n_24BLSRIS8",
    title: "The Value of Your Brand with Alex Holt",
    duration: "58:37",
    appleUrl: "https://podcasts.apple.com/us/podcast/the-value-of-your-brand-with-alex-holt/id1838803043",
  },
  {
    youtubeId: "tiMZ_KyFIWs",
    title: "Hybrid Church Revisited: A Decade of Insights into Disciple Making Movements with Roy Moran",
    duration: "1:00:32",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/hybrid-church-revisited-a-decade-of-insights/id1838803043",
  },
  {
    youtubeId: "4U4hvuhw93o",
    title: "Building a Tent-Making Pathway for Church Planting with Joshua Brown",
    duration: "58:26",
  },
  {
    youtubeId: "sNRnRmPdMEg",
    title: "The Master Leader: 12 Ways to Lead Like Jesus with Mark Moore",
    duration: "1:01:42",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/the-master-leader-12-ways-to-lead-like-jesus-with-mark-moore/id1838803043",
  },
  {
    youtubeId: "ZyeWMaHxSW0",
    title:
      "Online Church is NOT the Answer Beyond Just Streaming Church to Hybrid Disciple Making - Jay Kranda",
    duration: "1:03:25",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/online-church-is-not-the-answer-beyond-just-streaming/id1838803043",
  },
  {
    youtubeId: "OQM69NdEhm4",
    title: "Tim Foot - Building Remarkable Teams",
    duration: "47:40",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/building-remarkable-teams-with-tim-foot/id1838803043",
  },
  {
    youtubeId: "d9s1waauwi4",
    title: "Working Genius and Church Leadership with Kerry Snyder",
    duration: "1:01:12",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/working-genius-and-church-leadership-with-kerry-snyder/id1838803043",
  },
  {
    youtubeId: "2m6UeNBMWe8",
    title: "The Discipleship Gospel: The Gospel You Preach Determines the Disciples You Make",
    duration: "1:02:31",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/the-discipleship-gospel-the-gospel-you-preach/id1838803043",
  },
  {
    youtubeId: "9VPlTPc53Vw",
    title: "Unleashing Disciple-Making DNA",
    duration: "59:14",
    appleUrl: "https://podcasts.apple.com/us/podcast/unleashing-disciple-making-dna/id1838803043",
  },
  {
    youtubeId: "bpG31J_INeI",
    title: "Facebook Prayer Ads with Chris Abbott",
    duration: "59:30",
  },
  {
    youtubeId: "a2pUMV3WYVE",
    title: "Becoming A Disciple-Making Training Center with Dave Rhodes",
    duration: "1:00:06",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/becoming-a-disciple-making-training-center-with/id1838803043",
  },
  {
    youtubeId: "xmrYwVR1LXA",
    title: "Designing Multi-Use Buildings with The Solomon Foundation",
    duration: "1:00:24",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/designing-multi-use-buildings-with-the-solomon-foundation/id1838803043",
  },
  {
    youtubeId: "aoSH3YkfByo",
    title: "Building Stronger Children's Ministries with Craig Wilson",
    duration: "1:01:53",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/building-stronger-childrens-ministries-with-craig-wilson/id1838803043",
  },
  {
    youtubeId: "rcUSF3y63ZQ",
    title: "Intentional Churches with Doug Parks",
    duration: "57:15",
    appleUrl: "https://podcasts.apple.com/us/podcast/intentional-churches-with-doug-parks/id1838803043",
  },
  {
    youtubeId: "ibIrrV1xY6c",
    title: "Igniting Multiplication with Josh Howard",
    duration: "58:35",
    appleUrl: "https://podcasts.apple.com/us/podcast/igniting-multiplication-with-josh-howard/id1838803043",
  },
  {
    youtubeId: "la55kVtQjDA",
    title: "Prioritizing Your Digital Presence with Ryan Wakefield",
    duration: "1:11:35",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/prioritizing-your-digital-presence-with-ryan-wakefield/id1838803043",
  },
  {
    youtubeId: "lXciMr8akLE",
    title: "Developing A Leadership Pipeline With Mac Lake",
    duration: "58:24",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/developing-a-leadership-pipeline-with-mac-lake/id1838803043",
  },
];
