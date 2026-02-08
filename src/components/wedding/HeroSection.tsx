import { weddingConfig } from "@/config/wedding";
import { Heart } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-soft-pink/30 via-transparent to-soft-pink/30" />
      
      {/* Floral corners */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-30">
        <div className="text-6xl md:text-8xl">🌸</div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-30 scale-x-[-1]">
        <div className="text-6xl md:text-8xl">🌸</div>
      </div>
      
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Photo frame */}
        <div className="relative mb-8 inline-block">
          <div className="w-64 h-80 md:w-80 md:h-96 rounded-t-full overflow-hidden border-4 border-rose-gold-light shadow-2xl mx-auto">
            <img
              src={weddingConfig.couplePhoto}
              alt={`${weddingConfig.bride.name} & ${weddingConfig.groom.name}`}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Frame decoration */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-4xl">🌹</div>
        </div>

        {/* Title */}
        <p className="text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
          The Wedding Of
        </p>
        
        <h1 className="font-script text-4xl sm:text-5xl md:text-7xl text-gradient mb-2 text-shadow break-words">
          {weddingConfig.bride.name}
        </h1>
        
        <div className="flex items-center justify-center gap-4 my-3">
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-rose-gold" />
          <Heart className="text-primary fill-primary w-6 h-6" />
          <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-rose-gold" />
        </div>
        
        <h1 className="font-script text-4xl sm:text-5xl md:text-7xl text-gradient mb-8 text-shadow break-words">
          {weddingConfig.groom.name}
        </h1>

        {/* Date */}
        <div className="glass-card inline-block px-8 py-4 rounded-full">
          <p className="font-serif text-lg md:text-xl">
            {weddingConfig.akad.date}
          </p>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
