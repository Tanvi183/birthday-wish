import React, { useState, useRef, useEffect } from 'react';
import LandingScreen from './LandingScreen';
import CardScreen from './CardScreen';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // You can replace this URL with any direct link to an mp3/ogg file
  const AUDIO_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; 

  const handleOpen = () => {
    setIsOpened(true);
    // Attempt to auto-play music when card is opened
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Auto-play prevented by browser:", err);
      });
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set a pleasant volume
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] font-sans selection:bg-gold/30 selection:text-gold-bright">
      {/* Hidden audio element */}
      <audio ref={audioRef} src={AUDIO_URL} loop />

      {!isOpened ? (
        <LandingScreen onOpen={handleOpen} />
      ) : (
        <CardScreen isPlaying={isPlaying} toggleMusic={toggleMusic} />
      )}
    </div>
  );
}

export default App;
