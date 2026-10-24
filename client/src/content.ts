export type SocialLink = {
  label: string;
  icon: "youtube" | "instagram" | "linkedin";
  href: string;
};

export const creator = {
  name: "Mohd Rahim Ansari",
  shortName: "MOHD RAHIM ANSARI",
  role: "YouTube creator · editor · storyteller",
  introduction:
    "Ideas deserve more than a scroll-past. Shape this space around the videos you make, the stories you tell, and the way you see the world.",
  profileImage: "/manus-storage/IMG_20261021_102629_3b36bb96.webp",
  channel: {
    name: "RahimVision",
    handle: "@OfficialRahimVision",
    url: "https://www.youtube.com/@OfficialRahimVision",
    channelId: "UCbh4k_Xj_OS_pWG0NXsCYRA",
    uploadsPlaylistId: "UUbh4k_Xj_OS_pWG0NXsCYRA",
    avatarUrl: "https://yt3.googleusercontent.com/6qgSBLEPecYEJqO8IZbnx4Z_J0NVKvAlkKaNh8RVJc04BepGKZgcrJtG6kMVhRZa3LAcEOvz=s900-c-k-c0x00ffffff-no-rj",
    niche: "Add your content niche",
    experience: "Add your years of experience",
    about:
      "Share your YouTube journey, your interests, what you have learned as a content creator, and the kind of stories you want to tell.",
  },
  email: "your@email.com",
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
    detail: "Add the editing strengths, formats, or project experience you want to highlight.",
  },
  {
    number: "02",
    title: "Animation",
    detail: "Describe the kind of motion, animation, or visual effects you have worked with.",
  },
  {
    number: "03",
    title: "YouTube Shorts",
    detail: "Show how you turn a strong opening idea into a concise short-form story.",
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

export const certificates = [
  {
    title: "Certificate name",
    organization: "Issuing organization",
    date: "Month YYYY",
    image: "",
    href: "",
  },
  {
    title: "Add another achievement",
    organization: "Issuing organization",
    date: "Month YYYY",
    image: "",
    href: "",
  },
];

export const channelStats = [
  { label: "Subscribers", value: "Add actual count", note: "Your YouTube audience" },
  { label: "Total views", value: "Add actual count", note: "Across your channel" },
  { label: "Videos", value: "Add actual count", note: "Published on YouTube" },
];

export const bestPerformingVideo = {
  title: "Add your best-performing video",
  views: "Add actual view count",
  href: "",
};

export const toolGroups = [
  { name: "Editing", tools: ["Add your editing software"] },
  { name: "Animation", tools: ["Add your animation software"] },
  { name: "Thumbnails", tools: ["Add your thumbnail tools"] },
  { name: "Creating", tools: ["Add your creator workflow tools"] },
];
