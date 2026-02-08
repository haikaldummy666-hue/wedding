import { useRef } from "react";
import { weddingConfig } from "@/config/wedding";
import { useInView } from "@/hooks/useInView";
import { Heart } from "lucide-react";

export const ClosingSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 px-4 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-soft-pink/30 to-soft-pink/50" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-30">
        <span className="text-6xl">🌸</span>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 opacity-30 scale-x-[-1]">
        <span className="text-6xl">🌸</span>
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-30 rotate-180">
        <span className="text-6xl">🌸</span>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-30 rotate-180 scale-x-[-1]">
        <span className="text-6xl">🌸</span>
      </div>

      <div
        className={`relative z-10 max-w-2xl mx-auto text-center transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="font-serif text-lg text-muted-foreground mb-8 leading-relaxed">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.
        </p>
        
        <p className="font-serif text-lg text-muted-foreground mb-12">
          Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
        </p>

        {/* Thank you */}
        <div className="mb-8">
          <p className="text-sm font-sans uppercase tracking-widest text-muted-foreground mb-4">
            Dengan hormat yang mengundang
          </p>
        </div>

        {/* Names */}
        <h2 className="font-script text-3xl sm:text-4xl md:text-6xl text-gradient mb-4 break-words">
          {weddingConfig.bride.name}
        </h2>
        
        <div className="flex items-center justify-center gap-4 my-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-gold" />
          <Heart className="text-primary fill-primary w-5 h-5" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-rose-gold" />
        </div>
        
        <h2 className="font-script text-3xl sm:text-4xl md:text-6xl text-gradient mb-12 break-words">
          {weddingConfig.groom.name}
        </h2>

        {/* Decorative */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl">🌸</span>
          <span className="text-3xl">💕</span>
          <span className="text-2xl">🌸</span>
        </div>

        {/* Hashtag */}
        <p className="mt-8 font-sans text-sm text-primary">
          #{weddingConfig.bride.name}{weddingConfig.groom.name}Wedding
        </p>
      </div>
    </section>
  );
};
