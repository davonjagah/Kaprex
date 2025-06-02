export interface Feature {
  title: string;
  description: string;
  graphicSrc: string;
  graphicAlt: string;
}

export interface Benefit {
  text: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQItemProps {
  item: FAQ;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export interface FAQColumnProps {
  items: FAQ[];
  startIndex: number;
  expandedIndex: number | null;
  onToggle: (index: number) => void;
}

export interface HowItWorksStep {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface NavigationLink {
  name: string;
  href: string;
  children?: NavigationLink[];
}
