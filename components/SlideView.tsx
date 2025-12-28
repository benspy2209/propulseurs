import React from 'react';
import { ModuleContent } from '../types';

interface SlideViewProps {
  slide: ModuleContent;
  isActive: boolean;
}

const SlideView: React.FC<SlideViewProps> = ({ slide, isActive }) => {
  const Icon = slide.icon;

  // Animation classes
  const activeClasses = isActive 
    ? "opacity-100 translate-x-0 transition-all duration-700 ease-in-out" 
    : "opacity-0 translate-x-8 absolute inset-0 pointer-events-none";

  return (
    <div className={`w-full h-full flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden ${activeClasses}`}>
      
      {/* Left Content Section */}
      <div className={`w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-${slide.color}-50`}>
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${slide.color}-100 text-${slide.color}-600 mb-8 shadow-sm`}>
          <Icon size={32} strokeWidth={1.5} />
        </div>
        
        <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-2 serif-font tracking-tight`}>
          {slide.title}
        </h2>
        
        {slide.subtitle && (
          <p className={`text-xl text-${slide.color}-600 font-medium mb-8`}>
            {slide.subtitle}
          </p>
        )}

        <ul className="space-y-4">
          {slide.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start">
              <span className={`inline-block w-2 h-2 mt-2.5 mr-4 rounded-full bg-${slide.color}-500 flex-shrink-0`} />
              <span className="text-gray-700 text-lg leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden">
        <div className={`absolute inset-0 bg-${slide.color}-900/10 mix-blend-multiply z-10`} />
        <img 
          src={`https://picsum.photos/seed/${slide.imageKeyword}/800/1000`} 
          alt={slide.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
        />
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 p-8 z-20 opacity-30 md:opacity-100">
           <span className="text-9xl font-bold text-white opacity-20 serif-font">
             {slide.id === 'intro' ? '00' : `0${COURSE_MODULES.indexOf(slide)}`}
           </span>
        </div>
      </div>

    </div>
  );
};

// Import COURSE_MODULES just for the index lookup in the decorative element, 
// strictly we could pass index as prop but this is a quick helper
import { COURSE_MODULES } from '../constants';

export default SlideView;