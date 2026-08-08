export interface FaqLink {
  label: string;
  href: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  link?: FaqLink;
}

export interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}

export interface FaqData {
  categories: FaqCategory[];
}
