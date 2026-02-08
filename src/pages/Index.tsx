import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { weddingConfig } from "@/config/wedding";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import {
  OpeningScreen,
  FallingPetals,
  HeroSection,
  QuranQuote,
  CoupleProfile,
  CountdownTimer,
  EventSchedule,
  LoveStory,
  PhotoGallery,
  RSVPSection,
  WeddingGift,
  ClosingSection,
  MusicPlayer,
  BottomNavigation,
} from "@/components/wedding";

const Index = () => {
  const [searchParams] = useSearchParams();
  const [isOpened, setIsOpened] = useState(false);
  const guestName = searchParams.get("to") || searchParams.get("guest") || undefined;
  
  const { play, audioRef } = useAudioPlayer(weddingConfig.backgroundMusic);

  const handleOpen = () => {
    setIsOpened(true);
    // Try to play music after user interaction
    if (weddingConfig.backgroundMusic) {
      play();
    }
  };

  // Prevent scroll when opening screen is visible
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpened]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hidden audio element for background music */}
      {weddingConfig.backgroundMusic && (
        <audio ref={audioRef} src={weddingConfig.backgroundMusic} loop />
      )}

      {/* Opening screen */}
      {!isOpened && (
        <OpeningScreen onOpen={handleOpen} guestName={guestName} />
      )}

      {/* Main content */}
      {isOpened && (
        <>
          {/* Falling petals effect */}
          <FallingPetals />

          {/* All sections */}
          <main className="pb-20">
            <HeroSection />
            <QuranQuote />
            <CoupleProfile />
            <CountdownTimer />
            <EventSchedule />
            <LoveStory />
            <PhotoGallery />
            <RSVPSection />
            <WeddingGift />
            <ClosingSection />
          </main>

          {/* Music player */}
          <MusicPlayer />

          {/* Bottom navigation */}
          <BottomNavigation />
        </>
      )}
    </div>
  );
};

export default Index;
