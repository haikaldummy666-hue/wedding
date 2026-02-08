import { useRef } from "react";
import { useCountdown } from "@/hooks/useCountdown";
import { useInView } from "@/hooks/useInView";

interface CountdownBoxProps {
  value: number;
  label: string;
}

const CountdownBox = ({ value, label }: CountdownBoxProps) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 md:w-20 md:h-20 glass-card rounded-xl flex items-center justify-center mb-2 shadow-lg animate-pulse-soft">
      <span className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
        {value.toString().padStart(2, "0")}
      </span>
    </div>
    <span className="text-xs md:text-sm font-sans uppercase tracking-wider text-muted-foreground">
      {label}
    </span>
  </div>
);

export const CountdownTimer = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);
  const { days, hours, minutes, seconds, isExpired } = useCountdown();

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-4 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-soft-pink/40 via-background to-soft-pink/40" />
      
      <div
        className={`relative z-10 max-w-2xl mx-auto text-center transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Decorative */}
        <div className="text-4xl mb-4">⏰</div>
        
        <h2 className="font-script text-4xl md:text-5xl text-gradient mb-4">
          Menghitung Hari
        </h2>
        
        <p className="font-serif text-muted-foreground mb-8">
          Menuju hari bahagia kami
        </p>

        {isExpired ? (
          <div className="glass-card p-8 rounded-2xl">
            <p className="font-script text-3xl text-gradient">
              Hari Bahagia Telah Tiba! 💒
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-3 md:gap-6">
            <CountdownBox value={days} label="Hari" />
            <span className="text-2xl text-rose-gold-light font-light mt-[-1.5rem]">:</span>
            <CountdownBox value={hours} label="Jam" />
            <span className="text-2xl text-rose-gold-light font-light mt-[-1.5rem]">:</span>
            <CountdownBox value={minutes} label="Menit" />
            <span className="text-2xl text-rose-gold-light font-light mt-[-1.5rem]">:</span>
            <CountdownBox value={seconds} label="Detik" />
          </div>
        )}

        {/* Decorative bottom */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <span className="text-lg text-rose-gold-light">🌸</span>
          <div className="h-px w-12 bg-rose-gold-light/50" />
          <span className="text-lg text-rose-gold-light">💕</span>
          <div className="h-px w-12 bg-rose-gold-light/50" />
          <span className="text-lg text-rose-gold-light">🌸</span>
        </div>
      </div>
    </section>
  );
};
