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
