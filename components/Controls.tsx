import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ControlsProps {
  current: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  color: string;
}

const Controls: React.FC<ControlsProps> = ({ current, total, onNext, onPrev, color }) => {
  const isFirst = current === 0;
  const isLast = current === total - 1;

  return (
    <div className="flex items-center justify-between w-full max-w-4xl px-4 py-6 z-50">
      
      <button
        onClick={onPrev}
        disabled={isFirst}
        className={`
          flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all shadow-md
          ${isFirst 
            ? 'bg-gray-100 text-gray-300 cursor-not-allowed' 
            : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-lg active:scale-95'}
        `}
        aria-label="Diapositive précédente"
      >
        <ChevronLeft size={20} />
        <span>Précédent</span>
      </button>

      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, idx) => (
          <div 
            key={idx}
            className={`
              h-2 rounded-full transition-all duration-300
              ${idx === current ? `w-8 bg-${color}-600` : 'w-2 bg-gray-300'}
            `}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={isLast}
        className={`
          flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all shadow-md
          ${isLast
            ? 'bg-gray-100 text-gray-300 cursor-not-allowed' 
            : `bg-${color}-600 text-white hover:bg-${color}-700 hover:shadow-lg active:scale-95`}
        `}
        aria-label="Diapositive suivante"
      >
        <span>Suivant</span>
        <ChevronRight size={20} />
      </button>

    </div>
  );
};

export default Controls;
