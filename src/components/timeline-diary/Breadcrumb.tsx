import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="td-breadcrumb" aria-label="パンくず">
      <ol>
        {items.map((item, index) => (
          <li key={item.label} aria-current={index === items.length - 1 ? "page" : undefined}>
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
