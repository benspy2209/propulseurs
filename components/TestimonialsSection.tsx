
import React, { useState, useRef, useEffect } from 'react';
import { Quote, Search } from 'lucide-react';

interface Testimonial {
  name: string;
  text: string;
  highlight?: boolean;
}

const ALL_TESTIMONIALS: Testimonial[] = [
  { name: "Mag Schmitt", text: "Merci pour les beaux échanges que nous avons, constructifs ou futiles peu importe mais toujours dans la bonne humeur  […] Vous êtes le bonbon acidulé de mes journées", highlight: true },
  { name: "Phil Fontanel – Auteur", text: "Très bonne année et merci pour tout ce que tu fais pour Pulse Noir.", highlight: true },
  { name: "Laurence Hennico", text: "J’adore ce groupe. Je participerai plus en 2026. Promis. Il faut le faire vivre.", highlight: false },
  { name: "Yves Lagamme", text: "Que cette année nous apporte de belles découvertes littéraires. Et… Bonne continuation aux administrateurs. 📚✨", highlight: false },
  { name: "Cindy Hk", text: "Merci pour ce groupe Benjamin de Bruijne. Merci pour la bonne humeur. Merci pour le noir qui rime avec humour.", highlight: true },
  { name: "Sylvie Syeille", text: "Bon réveillon du jour de l’an à toi et tes proches Benjamin !", highlight: false },
  { name: "Jonathan Laixhay", text: "Ton énergie est communicative. Continue ainsi et bravo. Bravo pour ce groupe d’une richesse rare, due à ton implication. Franchement, ce groupe déchire sa race !", highlight: true },
  { name: "Chantal Meher", text: "Je suis très heureuse de faire partie de celui-ci qui pulse bien, qui vibre et fait vivre le Noir. Les auteurs et auteures ancrés dans le réel sont ceux que j’apprécie le plus.", highlight: true },
  { name: "Nelly Topscher", text: "Ce groupe est le plus bienveillant et sympathique qui existe. Ta passion et ton énergie sont fédératrices. Je suis trop fière de faire partie de cette aventure.", highlight: true },
  { name: "Nicole Joye", text: "Ce groupe est incroyable : on papote, on partage, on découvre plein de nouveaux auteurs. Vive le groupe et merci à toi. Trop contente d’en faire partie.", highlight: true },
  { name: "Bénédicte Herbin", text: "Benjamin, un énorme merci. Ton groupe Pulse Noir et toi, Benjamin, vous êtes géniaux. Je ne crains rien à vos forces noires.", highlight: true },
  { name: "Sébastien Cheruel", text: "Bravo à toi et aux autres modérateurs pour toute cette énergie positive. Le meilleur groupe littéraire.", highlight: false },
  { name: "Fredrik Serres", text: "Merci pour cette idée et pour la vie du groupe. Très heureux d’être là pour partager mes lectures et bientôt mon écriture.", highlight: false },
  { name: "Olivier Sebbah", text: "Longue vie à ce groupe. Grand respect : quand on voit comment tu le fais vivre, ce n’est que justice.", highlight: false },
  { name: "Léna Lou", text: "Merci pour ce groupe riche en partages et en émotions. On se sent chez soi, entouré, porté. Tu as créé quelque chose de profondément humain.", highlight: false },
  { name: "Bulle d’Air littéraire", text: "Bravo à toi Benjamin pour tout le boulot accompli. De très belles découvertes littéraires. Bravo Pulseman et vive les pulseurs.", highlight: false },
  { name: "Isabelle Depraetere", text: "Je remercie Jean de m’avoir invité sur ce groupe hyper sympa.", highlight: false },
  { name: "Cathy Galois", text: "Merci à toi, toute l’équipe et à tous les lecteurs. Longue vie au groupe.", highlight: false },
  { name: "Eppy Fanny – Sylvie", text: "Merci à toi. Tu fais un boulot de dingue.", highlight: false },
  { name: "Rémy Vivancos", text: "Merci à toi pour la création du groupe. Une bonne ambiance, pas de prise de tête et des règles simples.", highlight: false },
  { name: "Caitlin O-Malley", text: "Merci à toi de faire vivre ce groupe et de nous laisser la possibilité de nous exprimer.", highlight: false },
  { name: "Clarence Pitz", text: "Longue vie au groupe.", highlight: false },
  { name: "Catherine Jmottier", text: "Énormément de travail, bravo.", highlight: false },
  { name: "René Manzor", text: "Une belle aventure que ce groupe.", highlight: false },
  { name: "Cyril Carrère Perso", text: "Sacré boulot, bravo.", highlight: false },
  { name: "Pierre Pepito", text: "Ce groupe est très vivant, bien plus que beaucoup d’autres.", highlight: false },
  { name: "Mimie Lasouris", text: "Je me sens bien ici, comme à la maison. Pulse Man, Waouh.", highlight: false },
  { name: "Io Antique", text: "Ça pulse dans nos veines. Quand il fait chaud ailleurs, on vient pulser ici.", highlight: false },
  { name: "Alba Ombieri", text: "Longue vie à Pulse Noir. Bravo pour tout ce que tu as construit.", highlight: false },
  { name: "Gwen Le Tallec", text: "Félicitations et longue vie.", highlight: false },
  { name: "Christophe Dubourg", text: "Félicitations, longue vie au groupe.", highlight: false },
  { name: "Nathalie Hubart", text: "Belles fêtes de fin d’année à tous et merci pour tout.", highlight: false },
  { name: "Efsy Washington", text: "Bravo.", highlight: false },
  { name: "Nathalie Ltr", text: "À mes yeux, rien n’est un échec. Longue vie à ce groupe. Merci à toi.", highlight: false },
  { name: "Mark Zellweger", text: "Bravo Benjamin de Bruijne.", highlight: false },
  { name: "Bestofbad Acdc", text: "Un très bon bilan pour un super groupe. Les échecs ne sont que des étapes nécessaires. C’est une réussite.", highlight: false },
  { name: "Marie Guiborat", text: "Quelques mois d’existence et déjà une très belle histoire. Un sacré boulot accompli.", highlight: false },
  { name: "Alexandre Thomas", text: "Merci pour l’accueil et les chroniques. Attention toutefois au risque d’être victime de son succès.", highlight: false },
  { name: "Olivier Patry", text: "Merci infiniment pour cette magnifique présentation. Ravi de notre échange à l’Iris Noir.", highlight: false },
  { name: "Annie Soyer", text: "Heureuse d’être là avec toi.", highlight: false },
  { name: "Nathalie Nogrette", text: "« J’aime les discussions constructives et bienveillantes, ce qui n’est pas évident sur les réseaux sociaux. »", highlight: false },
  { name: "Ma Rina Bez", text: "« J’ai adoré grâce à ce groupe découvrir de nouveaux auteurs que je ne serais pas allée commander dans ma librairie si je ne les avais pas vu passer ici. »", highlight: false },
  { name: "Benjamin de Bruijne", text: "Ici, broyer du noir, c’est un cadeau. Pulse Noir est une communauté qui palpite.", highlight: true }
];

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
      {/* Interactive Torch Effect */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-30"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 0, 0, 0.15), transparent 80%)`
        }}
      />
      
      {/* Spotlight Circle Visual */}
      <div 
        className="absolute w-4 h-4 bg-[#ff0000] rounded-full blur-md pointer-events-none z-40 transition-opacity duration-300 mix-blend-screen"
        style={{
          opacity: isHovered ? 0.4 : 0,
          left: mousePos.x - 8,
          top: mousePos.y - 8,
        }}
      />

      {/* Decorative Stamp for highlights */}
      {testimonial.highlight && index % 3 === 0 && (
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
  return (
    <section id="testimonials" className="py-32 bg-black overflow-hidden relative border-y border-white/5">
      {/* Background Atmosphere */}
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

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {ALL_TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>

        {/* Improved Counter Branding */}
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
