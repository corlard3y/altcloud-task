import { useState } from 'react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items?: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
  itemClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
  iconColor?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items = [],
  allowMultiple = false,
  className = "",
  itemClassName = "",
  headerClassName = "",
  contentClassName = "",
  iconColor = "text-gray-500"
}) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number): void => {
    const newOpenItems = new Set(openItems);

    if (allowMultiple) {
      if (newOpenItems.has(index)) {
        newOpenItems.delete(index);
      } else {
        newOpenItems.add(index);
      }
    } else {
      if (newOpenItems.has(index)) {
        newOpenItems.clear();
      } else {
        newOpenItems.clear();
        newOpenItems.add(index);
      }
    }

    setOpenItems(newOpenItems);
  };

  return (
    <div className={`${className}`}>
      {items.map((item, index) => {
        const isOpen = openItems.has(index);

        return (
          <div
            key={index}
            className={`bg-white border-b border-gray-200 hover:border-gray-300 open-sans ${itemClassName}`}
          >
            <button
              className={`bg-white w-full px-0 py-6 text-left flex items-center justify-between hover:bg-gay-50 focus:outline-none rounded-lg transition-colors duration-200 hover:cursor-pointer ${headerClassName}`}
              onClick={() => toggleItem(index)}
              onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleItem(index);
                }
              }}
            >
              <span className="text-2xl font-medium text-gray-600 group-hover:text-gray-900 pr-4 transition-colors duration-200 open-sans">
                {item.question}
              </span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${iconColor} ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-s duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className={`px-0 py-4 text-gray-500 leading-relaxed open-sans ${contentClassName}`}>
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
