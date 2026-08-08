import type { ReactNode } from "react";

interface GuideNoteProps {
  variant?: "note" | "warning";
  children: ReactNode;
}

export default function GuideNote({ variant = "note", children }: GuideNoteProps) {
  return (
    <p className={`aiken-guide-note aiken-guide-note-${variant}`}>{children}</p>
  );
}
