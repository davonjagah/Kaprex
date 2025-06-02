import { PlusIcon } from "../../icons";
import { Typography } from "../../atoms";
import { type FAQItemProps } from "./index";

export function FAQItem({ item, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full justify-between items-center cursor-pointer gap-2 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <Typography variant="h4" className="text-lg font-medium w-[90%]">
          {item.question}
        </Typography>
        <PlusIcon
          isOpen={isOpen}
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Typography
          variant="body"
          className="text-gray-500 mt-2 leading-relaxed"
        >
          {item.answer}
        </Typography>
      </div>
    </div>
  );
}
