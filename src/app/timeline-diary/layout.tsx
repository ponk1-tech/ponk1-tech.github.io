import type { ReactNode } from "react";
import TimelineDiaryFooter from "@/components/timeline-diary/TimelineDiaryFooter";
import TimelineDiaryHeader from "@/components/timeline-diary/TimelineDiaryHeader";
import "./timeline-diary.css";

export default function TimelineDiaryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="td-site-shell">
      <TimelineDiaryHeader />
      <div className="td-site-content">{children}</div>
      <TimelineDiaryFooter />
    </div>
  );
}
