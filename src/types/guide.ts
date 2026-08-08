export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface TocItem {
  id: string;
  label: string;
}

export interface RelatedGuideItem {
  title: string;
  description?: string;
  href?: string;
  status: "available" | "planned";
}

export interface GuideVideoSource {
  src: string;
  type: string;
}
