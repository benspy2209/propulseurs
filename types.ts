
import { LucideIcon } from 'lucide-react';

export interface Chapter {
  title: string;
  content: string[]; // Paragraphes de texte
  type: 'text' | 'exercise' | 'key-concept';
  expectedResult?: string; // Résultat attendu pour cette section
  guidedQuestions?: string[]; // Questions pour les exercices
}

export interface Resource {
  title: string;
  type: 'pdf' | 'template' | 'checklist' | 'sheet';
  url?: string; // URL vers le fichier
}

export interface ModuleContent {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  bullets: string[];
  icon: LucideIcon;
  imageKeyword: string;
  color: string;
  longDescription?: string;
  chapters?: Chapter[];
  duration?: string;
  resources?: Resource[];
  steps?: string[]; // Étapes "Par où commencer ?"
  transitionTitle?: string;
  transitionText?: string;
  transitionButtonText?: string;
}
