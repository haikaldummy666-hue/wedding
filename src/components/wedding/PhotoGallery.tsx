import { useRef, useState } from "react";
import { weddingConfig } from "@/config/wedding";
import { useInView } from "@/hooks/useInView";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PhotoGallery = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? weddingConfig.gallery.length - 1 : selectedIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === weddingConfig.gallery.length - 1 ? 0 : selectedIndex + 1
      );
    }
  };

  return (
    <section id="galeri" ref={ref} className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-script text-4xl md:text-5xl text-gradient mb-4">
            Galeri Foto
          </h2>
          <div className="section-divider">
            <span className="text-xl text-rose-gold-light">❀</span>
          </div>
          <p className="font-serif text-muted-foreground">
            Momen-momen indah perjalanan cinta kami
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {weddingConfig.gallery.map((photo, index) => (
            <div
              key={index}
              className={`relative aspect-square overflow-hidden rounded-xl cursor-pointer group transition-all duration-500 ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={photo}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-rose-gold/0 group-hover:bg-rose-gold/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-2xl">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10 z-10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Navigation */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-10"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-10"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          {/* Image */}
          <img
            src={weddingConfig.gallery[selectedIndex]}
            alt={`Gallery ${selectedIndex + 1}`}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 font-sans text-sm">
            {selectedIndex + 1} / {weddingConfig.gallery.length}
          </div>
        </div>
      )}
    </section>
  );
};
