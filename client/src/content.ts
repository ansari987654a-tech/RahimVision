export type SocialLink = {
  label: string;
  icon: "youtube" | "instagram" | "linkedin";
  href: string;
};

export type Certificate = {
  title: string;
  organization: string;
  date: string;
  image: string;
  href: string;
};

export type ToolGroup = {
  name: string;
  tools: string[];
};

export const creator = {
  name: "Mohd Rahim Ansari",
  shortName: "MOHD RAHIM ANSARI",
  role: "YouTube content creator",
  introduction:
    "I’m Mohd Rahim Ansari, a YouTube content creator sharing videos, Shorts, and ideas through RahimVision.",
  channel: {
    name: "RahimVision",
    handle: "@OfficialRahimVision",
    url: "https://www.youtube.com/@OfficialRahimVision",
    channelId: "UCbh4k_Xj_OS_pWG0NXsCYRA",
    uploadsPlaylistId: "UUbh4k_Xj_OS_pWG0NXsCYRA",
    avatarUrl: "https://yt3.googleusercontent.com/6qgSBLEPecYEJqO8IZbnx4Z_J0NVKvAlkKaNh8RVJc04BepGKZgcrJtG6kMVhRZa3LAcEOvz=s900-c-k-c0x00ffffff-no-rj",
    niche: "Niche not provided",
    experience: "Experience details not provided",
    about:
      "This portfolio brings together my YouTube channel and its uploads. Personal interests and additional experience details can be added when supplied.",
  },
  emailHref: "",
  socialLinks: [
    { label: "YouTube", icon: "youtube", href: "https://www.youtube.com/@OfficialRahimVision" },
    { label: "Instagram", icon: "instagram", href: "" },
    { label: "LinkedIn", icon: "linkedin", href: "" },
  ] satisfies SocialLink[],
};

export const experienceHighlights = [
  {
    number: "01",
    title: "Video editing",
    detail: "Add verified editing strengths, formats, or project experience here.",
  },
  {
    number: "02",
    title: "Animation",
    detail: "Add the animation or visual-effects experience you want to highlight.",
  },
  {
    number: "03",
    title: "YouTube Shorts",
    detail: "Add the short-form work and creation experience you want to feature.",
  },
];

export const skills = [
  "Video Editing",
  "Animation",
  "Storytelling",
  "Script Writing",
  "Thumbnail Design",
  "Voiceover",
  "YouTube SEO",
];

export const certificates: Certificate[] = [];

export const channelStats = [
  { label: "Subscribers", value: "15", note: "As of 24 Oct 2026" },
  { label: "Total views", value: "572", note: "As of 24 Oct 2026" },
  { label: "Videos", value: "8", note: "As of 24 Oct 2026" },
];

export const bestPerformingVideo = {
  title: "Magic Pencil se homework karna pada mehenga! 😱✏️ #Chintu #MoralStory #Shorts",
  views: "359 views · verified 24 Oct 2026",
  href: "https://www.youtube.com/shorts/_xJyaLoAFT0",
};

export const toolGroups: ToolGroup[] = [
  { name: "Editing", tools: [] },
  { name: "Animation", tools: [] },
  { name: "Thumbnails", tools: [] },
  { name: "Creating", tools: [] },
];
