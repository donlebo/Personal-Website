export interface QualificationCard {
  title: string;
  subtitle: string;
  dateText: string;
  text: string;
  previewAvailable?: boolean;
}

export interface TabData {
  label: string;
  cards: QualificationCard[];
}

export interface Education {
  end: number;
  duration: number;
  time: string;
  text: string;
}

export interface Introduction {
  title: string;
  subtitle: string;
  text: string;
}

export interface Presentation {
  title: string;
  subtitle: string;
  text: string;
  scrollText: string;
}

export interface SkillCategory {
  icon: string;
  title: string;
  description: string;
  skills: string[];
  expanded?: boolean;
}
