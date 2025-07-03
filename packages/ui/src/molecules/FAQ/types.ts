export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQItemProps {
  item: FAQ;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  labelClassName?: string;
  contentClassName?: string;
}

export interface FAQColumnProps {
  items: FAQ[];
  startIndex: number;
  expandedIndex: number | null;
  onToggle: (index: number) => void;
  labelClassName?: string;
  contentClassName?: string;
}
