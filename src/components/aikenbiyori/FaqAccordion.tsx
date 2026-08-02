"use client";

import { useState } from "react";
import type { FaqItem } from "@/types/faq";

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(() => new Set());

  const toggleItem = (itemId: string) => {
    setOpenItems((currentItems) => {
      const nextItems = new Set(currentItems);

      if (nextItems.has(itemId)) {
        nextItems.delete(itemId);
      } else {
        nextItems.add(itemId);
      }

      return nextItems;
    });
  };

  return (
    <div className="faq-accordion">
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        const buttonId = `faq-button-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div className="faq-item" key={item.id}>
            <h3 className="faq-question-heading">
              <button
                type="button"
                id={buttonId}
                className="faq-question"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
              >
                <span className="faq-question-mark" aria-hidden="true">
                  Q
                </span>
                <span className="faq-question-text">{item.question}</span>
                <span className="faq-accordion-icon" aria-hidden="true" />
              </button>
            </h3>
            <div
              id={panelId}
              className="faq-answer"
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
            >
              <span className="faq-answer-mark" aria-hidden="true">
                A
              </span>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
