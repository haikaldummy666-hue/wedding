import { useRef } from "react";
import { weddingConfig } from "@/config/wedding";
import { useInView } from "@/hooks/useInView";

interface TimelineItemProps {
  item: typeof weddingConfig.loveStory[0];
  index: number;
  isLast: boolean;
}

const TimelineItem = ({ item, index, isLast }: TimelineItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center mb-12 last:mb-0 transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Desktop layout */}
      <div className={`hidden md:flex w-full items-center justify-center`}>
        {/* Content */}
        <div className={`w-full max-w-2xl text-center`}>
          <div className="glass-card p-6 rounded-xl inline-block">
            <span className="text-sm font-sans uppercase tracking-wider text-primary">
              {item.date}
            </span>
            <h3 className="font-script text-2xl text-gradient mt-2 mb-3">
              {item.title}
            </h3>
            <p className="font-serif text-muted-foreground text-sm">
              {item.description}
            </p>
          </div>
        </div>

        {/* Center dot */}
        <div className="absolute left-1/2 -translate-x-1/2 flex justify-center relative">
          <div className="w-12 h-12 rounded-full bg-soft-pink border-4 border-rose-gold-light flex items-center justify-center z-10">
            <span className="text-lg">💕</span>
          </div>
          {!isLast && (
            <div className="absolute top-12 bottom-[-3rem] left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-rose-gold-light to-rose-gold-light/30" />
          )}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex w-full">
        {/* Timeline line */}
        <div className="flex flex-col items-center mr-4">
          <div className="w-10 h-10 rounded-full bg-soft-pink border-4 border-rose-gold-light flex items-center justify-center z-10">
            <span className="text-sm">💕</span>
          </div>
          {!isLast && (
            <div className="w-0.5 flex-1 bg-gradient-to-b from-rose-gold-light to-rose-gold-light/30" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-8">
          <div className="glass-card p-4 rounded-xl">
            <div className="mb-3">
              <span className="text-xs font-sans uppercase tracking-wider text-primary">
                {item.date}
              </span>
              <h3 className="font-script text-xl text-gradient mt-1">
                {item.title}
              </h3>
            </div>
            <p className="font-serif text-muted-foreground text-sm">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LoveStory = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-soft-pink/20 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section title */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-script text-4xl md:text-5xl text-gradient mb-4">
            Love Story
          </h2>
          <div className="section-divider">
            <span className="text-xl text-rose-gold-light">❀</span>
          </div>
          <p className="font-serif text-muted-foreground">
            Perjalanan cinta kami menuju hari bahagia
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {weddingConfig.loveStory.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isLast={index === weddingConfig.loveStory.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
