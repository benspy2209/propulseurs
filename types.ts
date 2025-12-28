import { LucideIcon } from 'lucide-react';

export interface ModuleContent {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  bullets: string[];
  icon: LucideIcon;
  imageKeyword: string;
  color: string;
}
