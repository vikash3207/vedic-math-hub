export type LessonSection = {
  heading: string;
  points: string[];
};

export type Lesson = {
  title: string;
  intro: string;
  sections: LessonSection[];
};

export const vedicLessons: Record<string, Lesson> = {
  "lesson-1": {
    title: "Lesson 1: What is Vedic Mathematics?",
    intro:
      "Vedic Mathematics is a collection of ancient Indian techniques that help solve mathematical problems faster using mental methods.",
    sections: [
      {
        heading: "Why Vedic Mathematics?",
        points: [
          "Reduces calculation time",
          "Improves mental ability",
          "Makes mathematics enjoyable",
        ],
      },
      {
        heading: "Where is it useful?",
        points: [
          "School examinations",
          "Competitive exams",
          "Daily life calculations",
        ],
      },
    ],
  },

  "lesson-2": {
    title: "Lesson 2: Number Sense Basics",
    intro:
      "Before learning shortcuts, it is important to understand numbers intuitively and mentally.",
    sections: [
      {
        heading: "Core concepts",
        points: [
          "Understanding place values",
          "Breaking numbers into smaller parts",
          "Quick estimation",
        ],
      },
    ],
  },

  "lesson-3": {
    title: "Lesson 3: Multiplication by 11",
    intro:
      "Multiplying numbers by 11 becomes very easy when you understand the visual digit pattern.",
    sections: [
      {
        heading: "The basic pattern",
        points: [
          "Keep first and last digit same",
          "Add adjacent digits",
          "Handle carry carefully",
        ],
      },
    ],
  },
};
