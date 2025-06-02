import { FAQItem } from "./FAQItem";
import { type FAQColumnProps } from "./types";

export function FAQColumn({
  items,
  startIndex,
  expandedIndex,
  onToggle,
}: FAQColumnProps) {
  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const globalIndex = startIndex + idx;
        return (
          <FAQItem
            key={globalIndex}
            item={item}
            isOpen={expandedIndex === globalIndex}
            onToggle={() => onToggle(globalIndex)}
            index={globalIndex}
          />
        );
      })}
    </div>
  );
}
