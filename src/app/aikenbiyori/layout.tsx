import type { ReactNode } from "react";
import AikenbiyoriFooter from "@/components/aikenbiyori/AikenbiyoriFooter";
import AikenbiyoriHeader from "@/components/aikenbiyori/AikenbiyoriHeader";
import "./aikenbiyori.css";

export default function AikenbiyoriLayout({ children }: { children: ReactNode }) {
  return (
    <div className="aiken-site-shell">
      <AikenbiyoriHeader />
      <div className="aiken-site-content">{children}</div>
      <AikenbiyoriFooter />
    </div>
  );
}
