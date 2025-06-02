import { useState } from "react";
import { faqs } from "./data";
import { FAQ } from "@repo/ui/molecules";

export function useFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const items: FAQ[] = faqs;
  const half = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, half);
  const rightItems = items.slice(half);

  const handleToggle = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return {
    leftItems,
    rightItems,
    expandedIndex,
    handleToggle,
  };
}
