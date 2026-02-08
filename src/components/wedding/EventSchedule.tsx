import { useRef } from "react";
import { weddingConfig } from "@/config/wedding";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";

interface EventCardProps {
  title: string;
  emoji: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapsLink: string;
  delay?: number;
}

const EventCard = ({
  title,
  emoji,
  date,
  time,
  venue,
  address,
  mapsLink,
  delay = 0,
}: EventCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Card className="glass-card border-rose-gold-light/30 overflow-hidden">
        <CardContent className="p-6 md:p-8 text-center">
          {/* Icon */}
          <div className="text-4xl mb-4">{emoji}</div>
          
          {/* Title */}
          <h3 className="font-script text-2xl sm:text-3xl md:text-4xl text-gradient mb-6 break-words leading-snug">
            {title}
          </h3>

          {/* Details */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-serif">{date}</span>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-serif">{time}</span>
            </div>
            
            <div className="pt-4 border-t border-border">
              <div className="flex items-start justify-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-serif font-semibold">{venue}</p>
                  <p className="text-sm text-muted-foreground">{address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Maps button */}
          <Button
            variant="outline"
            className="mt-6 rounded-full border-rose-gold-light hover:bg-rose-gold-light/10"
            asChild
          >
            <a href={mapsLink} target="_blank" rel="noopener noreferrer">
              <MapPin className="w-4 h-4 mr-2" />
              Lihat Lokasi
              <ExternalLink className="w-3 h-3 ml-2" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export const EventSchedule = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);

  return (
    <section id="acara" ref={ref} className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-script text-4xl md:text-5xl text-gradient mb-4">
            Jadwal Acara
          </h2>
          <div className="section-divider">
            <span className="text-xl text-rose-gold-light">❀</span>
          </div>
          <p className="font-serif text-muted-foreground">
            Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami
          </p>
        </div>

        {/* Event cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <EventCard
            title="Akad Nikah"
            emoji="💍"
            date={weddingConfig.akad.date}
            time={weddingConfig.akad.time}
            venue={weddingConfig.akad.venue}
            address={weddingConfig.akad.address}
            mapsLink={weddingConfig.akad.mapsLink}
            delay={200}
          />
          
          <EventCard
            title="Resepsi"
            emoji="🎊"
            date={weddingConfig.resepsi.date}
            time={weddingConfig.resepsi.time}
            venue={weddingConfig.resepsi.venue}
            address={weddingConfig.resepsi.address}
            mapsLink={weddingConfig.resepsi.mapsLink}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};
