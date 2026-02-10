import { useState } from "react";
import { Button } from "@/components/ui/button";
import { weddingConfig } from "@/config/wedding";
import { FallingPetals } from "./FallingPetals";
import { Heart } from "lucide-react";

interface OpeningScreenProps {
  onOpen: () => void;
  guestName?: string;
}

export const OpeningScreen = ({ onOpen, guestName }: OpeningScreenProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 500);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-soft-pink via-background to-soft-pink-dark transition-all duration-500 ${
        isOpening ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      <FallingPetals />
      
      {/* Decorative top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-rose-gold-light/20 to-transparent" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-6">
        {/* Floral decoration */}
        <div className="text-4xl mb-4 animate-float">🌸</div>
        
        <p className="text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">
          The Wedding Of
        </p>
        
        <h1 className="font-script text-4xl sm:text-5xl md:text-7xl text-gradient mb-2 break-words">
          {weddingConfig.bride.name}
        </h1>
        
        <div className="flex items-center justify-center gap-4 my-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-gold" />
          <Heart className="text-primary fill-primary w-5 h-5 animate-pulse-soft" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-rose-gold" />
        </div>
        
        <h1 className="font-script text-4xl sm:text-5xl md:text-7xl text-gradient mb-6 break-words">
          {weddingConfig.groom.name}
        </h1>

        {/* Wedding Date */}
        <p className="font-serif text-lg text-muted-foreground mb-8">
          {weddingConfig.akad.date}
        </p>

        {/* Guest name */}
        {guestName && (
          <div className="mb-8 p-4 glass-card rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Kami Turut Mengundang</p>
            <p className="text-sm text-muted-foreground mb-1">Kepada Yth.</p>
            <p className="font-serif text-xl font-semibold">{guestName}</p>
          </div>
        )}

        {/* Open button */}
        <Button
          onClick={handleOpen}
          className="btn-wedding bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg"
        >
          <span className="mr-2">💌</span>
          Buka Undangan
        </Button>
      </div>

      {/* Decorative bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rose-gold-light/20 to-transparent" />
      
      {/* Corner decorations */}
      <div className="absolute top-4 left-4 text-3xl opacity-50">🌿</div>
      <div className="absolute top-4 right-4 text-3xl opacity-50 scale-x-[-1]">🌿</div>
      <div className="absolute bottom-4 left-4 text-3xl opacity-50 rotate-180">🌿</div>
      <div className="absolute bottom-4 right-4 text-3xl opacity-50 rotate-180 scale-x-[-1]">🌿</div>
    </div>
  );
};
