import { useRef } from "react";
import { weddingConfig } from "@/config/wedding";
import { useInView } from "@/hooks/useInView";

interface ProfileCardProps {
  type: "bride" | "groom";
  delay?: number;
}

const ProfileCard = ({ type, delay = 0 }: ProfileCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const person = type === "bride" ? weddingConfig.bride : weddingConfig.groom;
  const title = type === "bride" ? "Mempelai Wanita" : "Mempelai Pria";
  const parentLabel = type === "bride" ? "Putri dari" : "Putra dari";

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Photo frame */}
      <div className="relative mb-6">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-rose-gold-light shadow-xl">
          <img
            src={person.photo}
            alt={person.fullName}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Decorative ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-rose-gold-light/50 scale-110" />
        {/* Floral decoration */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl">
          🌸
        </div>
      </div>

      {/* Title */}
      <p className="text-sm font-sans uppercase tracking-widest text-muted-foreground mb-2">
        {title}
      </p>

      {/* Name */}
      <h3 className="font-script text-3xl sm:text-4xl md:text-5xl text-gradient mb-4 break-words px-2 leading-normal py-1">
        {person.fullName}
      </h3>

      {/* Parents */}
      <p className="text-sm text-muted-foreground mb-1">
        {parentLabel}
      </p>
      <p className="font-serif text-foreground mb-1">
        {person.father}
      </p>
      <p className="text-muted-foreground mb-4">&</p>
      <p className="font-serif text-foreground">
        {person.mother}
      </p>
    </div>
  );
};

export const CoupleProfile = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);

  return (
    <section id="mempelai" ref={ref} className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm font-sans uppercase tracking-widest text-muted-foreground mb-2">
            Bismillahirrahmanirrahim
          </p>
          <h2 className="font-script text-4xl md:text-5xl text-gradient mb-4">
            Mempelai
          </h2>
          <div className="section-divider">
            <span className="text-xl text-rose-gold-light">❀</span>
          </div>
          <p className="font-serif text-muted-foreground max-w-xl mx-auto">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami
          </p>
        </div>

        {/* Profiles */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-8">
          <ProfileCard type="bride" delay={200} />
          
          {/* Ampersand separator - only visible on desktop */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* This is handled by the grid gap */}
          </div>
          
          <ProfileCard type="groom" delay={400} />
        </div>

        {/* Ampersand for mobile */}
          </div>
        </div>
      </div>
    </section>
  );
};
