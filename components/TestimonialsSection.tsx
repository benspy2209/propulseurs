
import React, { useState, useRef, useEffect } from 'react';
import { Quote, Search } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { DEFAULT_TESTIMONIALS, Testimonial } from '../constants';

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`break-inside-avoid relative p-8 bg-neutral-950 border transition-all duration-500 group overflow-hidden
        ${testimonial.highlight ? 'border-white/10' : 'border-white/5 opacity-80 hover:opacity-100'}
        hover:border-[#ff0000]/50 hover:shadow-[0_0_40px_rgba(255,0,0,0.15)] rounded-2xl`}
      style={{
        cursor: 'none'
      }}
    >
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-30"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 0, 0, 0.15), transparent 80%)`
        }}
      />
      
      <div 
        className="absolute w-4 h-4 bg-[#ff0000] rounded-full blur-md pointer-events-none z-40 transition-opacity duration-300 mix-blend-screen"
        style={{
          opacity: isHovered ? 0.4 : 0,
          left: mousePos.x - 8,
          top: mousePos.y - 8,
        }}
      />

      {testimonial.highlight && (
        <div className="absolute -top-1 -right-4 rotate-12 bg-[#ff0000] text-white text-[8px] font-black uppercase px-4 py-1 tracking-widest opacity-20 group-hover:opacity-100 transition-opacity z-20 shadow-lg">
          CLAN PULSENOIR
        </div>
      )}

      <div className="flex items-center gap-2 mb-6 relative z-10">
        <div className={`w-1 h-1 rounded-full ${isHovered ? 'bg-[#ff0000] scale-150' : 'bg-white/20'} transition-all`} />
        <h3 className="text-sm font-black text-white uppercase tracking-widest group-hover:text-[#ff0000] transition-colors">{testimonial.name}</h3>
      </div>

      <blockquote className="relative z-10">
        <Quote className={`absolute -top-4 -left-4 transition-colors duration-500 ${isHovered ? 'text-[#ff0000]/30' : 'text-white/5'}`} size={32} />
        <p className={`text-sm leading-relaxed font-mono italic relative z-10 transition-colors duration-500 ${isHovered ? 'text-gray-200' : 'text-gray-500'}`}>
          "{testimonial.text}"
        </p>
      </blockquote>
      
      <div className="mt-6 flex justify-end relative z-10">
        <div className="h-[1px] w-8 bg-white/10 group-hover:w-full group-hover:bg-[#ff0000]/40 transition-all duration-700" />
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(DEFAULT_TESTIMONIALS);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data } = await supabase
          .from('site_content')
          .select('data')
          .eq('key', 'testimonials')
          .maybeSingle();
        
        if (data && data.data && Array.isArray(data.data) && data.data.length > 0) {
          setTestimonials(data.data);
        }
      } catch (err) {
        console.error("Erreur lors du chargement des témoignages:", err);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="py-32 bg-black overflow-hidden relative border-y border-white/5">
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#ff0000]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-[#ff0000]/30 bg-[#ff0000]/5 text-[#ff0000] text-[10px] font-black uppercase tracking-[0.4em]">
            <Search size={12} /> Dossier : Évidence Sociale
          </div>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 text-white leading-none italic serif-font">
            Le Clan <span className="text-[#ff0000] text-glow-red">s'exprime</span>
          </h2>
          <p className="text-gray-500 text-xs font-black uppercase tracking-[0.5em] mt-4 italic">Témoignages authentiques de la communauté Pulse Noir</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>

        <div className="mt-24 pt-16 border-t border-white/10 text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-[#ff0000]/5 blur-xl rounded-full opacity-50"></div>
            <p className="relative text-white font-black uppercase italic serif-font text-2xl md:text-4xl tracking-tight">
              La force du Clan. <span className="text-[#ff0000]">Une seule voix.</span>
            </p>
            <p className="text-[#ff0000] font-black uppercase tracking-[0.6em] text-[10px] md:text-xs mt-4 opacity-80">
              Pulse Noir Academy Elite
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
