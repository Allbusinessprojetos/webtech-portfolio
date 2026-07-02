import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface IconItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}
