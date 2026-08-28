import type { ReactNode } from "react";

interface GuideNoteProps {
  variant?: "note" | "warning";
  children: ReactNode;
}

export default function GuideNote({ variant = "note", children }: GuideNoteProps) {
  return (
    <p className={`td-guide-note td-guide-note-${variant}`} role={variant === "warning" ? "note" : undefined}>
      {children}
    </p>
  );
}
