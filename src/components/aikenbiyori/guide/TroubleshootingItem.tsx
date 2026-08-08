import type { ReactNode } from "react";

interface TroubleshootingItemProps {
  question: string;
  children: ReactNode;
}

export default function TroubleshootingItem({ question, children }: TroubleshootingItemProps) {
  return (
    <details className="aiken-trouble-item">
      <summary>{question}</summary>
      <div className="aiken-trouble-item-body">{children}</div>
    </details>
  );
}
