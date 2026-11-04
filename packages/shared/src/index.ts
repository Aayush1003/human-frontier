export type Opportunity = {
  id: string;
  title: string;
  description: string;
  category: string;
  durationMinutes: number;
  location: string;
  accessibilityNote: string;
};

export type GuideRequest = {
  interest: string;
  availableMinutes: number;
};

export type GuidePlan = {
  suggestion: string;
  why: string;
  nextStep: string;
  note: string;
};

export const sampleOpportunities: Opportunity[] = [
  {
    id: "park-observation",
    title: "Notice a nearby nature spot",
    description: "Take a short walk and note one thing you have not noticed before.",
    category: "nature",
    durationMinutes: 20,
    location: "A park or outdoor space you choose",
    accessibilityNote: "Can be adapted to a seated visit or an indoor window view."
  },
  {
    id: "skill-share",
    title: "Swap a small skill with someone",
    description: "Offer to teach one thing you know and ask to learn one thing in return.",
    category: "community",
    durationMinutes: 30,
    location: "In person or online, with someone you trust",
    accessibilityNote: "Choose a format and pace that work for everyone."
  },
  {
    id: "library-curiosity",
    title: "Follow one question at the library",
    description: "Pick a question you have and spend a little time exploring books or trusted resources.",
    category: "learning",
    durationMinutes: 25,
    location: "A library or its online catalogue",
    accessibilityNote: "Free access and remote options may be available; check local services."
  }
];

export function createGuidePlan(request: GuideRequest): GuidePlan {
  const interest = request.interest.trim().toLowerCase();
  const match = sampleOpportunities.find((item) => item.category === interest);
  const minutes = Math.max(5, Math.min(180, Math.floor(request.availableMinutes)));
  const suggestion = match && match.durationMinutes <= minutes
    ? match.title
    : `Explore one small ${interest || "curiosity"}-related activity`;

  return {
    suggestion,
    why: `It is designed to fit within about ${minutes} minutes and can be adapted to your circumstances.`,
    nextStep: "Choose a time and place that feel comfortable, or make the activity smaller.",
    note: "This is a simple, rule-based suggestion—not professional, medical, or emergency advice. You are in control."
  };
}
