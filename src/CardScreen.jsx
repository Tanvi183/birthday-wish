import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Music, Music4, PartyPopper } from 'lucide-react';

const triggerConfetti = () => {
  const duration = 3000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#d4af37', '#f3e5ab', '#ffffff']
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#d4af37', '#f3e5ab', '#ffffff']
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };
  frame();
};

const CardScreen = ({ isPlaying, toggleMusic }) => {
  useEffect(() => {
    // Trigger initial confetti when card opens
    triggerConfetti();
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-[#e0e0e0] flex flex-col items-center py-10 px-4 md:px-0">
      
      {/* Background ambient confetti effect (static representation or minor animation) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/20 via-[#050505]/0 to-[#050505]/0"></div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl bg-black/40 backdrop-blur-sm border border-gold rounded-3xl p-8 md:p-12 pb-24 mx-auto"
      >
        {/* Decorative corners */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-gold rounded-tl-lg"></div>
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-gold rounded-tr-lg"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-gold rounded-bl-lg"></div>
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-gold rounded-br-lg"></div>

        <div className="text-center mb-10">
          <h3 className="font-cursive text-4xl text-gold mb-2">Happy Birthday</h3>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-gold/50"></div>
            <div className="w-2 h-2 rotate-45 bg-gold"></div>
            <div className="h-[1px] w-12 bg-gold/50"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-gold mb-8">Marjana Akter Lima</h1>
          
          <div className="mx-auto w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-gold overflow-hidden glow-gold mb-10">
            <img src="/profile.png" alt="Marjana Akter Lima" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="space-y-6 text-[15px] md:text-[17px] leading-relaxed text-center opacity-90 font-light">
          <p>Happy Birthday to someone truly special, Marjana Akter Lima! 🎂💖</p>
          
          <p>Today isn't just another day on the calendar — it's a reminder that the world became a little brighter, kinder, and more beautiful because you were born. ✨</p>
          
          <p>I'm genuinely grateful to have a friend like you in my life. Thank you for all the little moments, the random conversations, the laughter, the memories, and even the times when you simply stayed around without needing a reason. Some people come into our lives for a moment, but a few become memories we quietly carry in our hearts forever. You are one of those people. 🫶</p>
          
          <p>I hope this new chapter of your life brings you everything your heart has been silently wishing for — peace in your mind, happiness in your heart, success in your dreams, and people around you who truly value you. 🌸</p>
          
          <p>May you always have reasons to smile, courage when life gets difficult, and someone beside you whenever the world feels a little too heavy. And whenever you doubt yourself, I hope you remember just how special you are to the people who are lucky enough to know you. 💫</p>
          
          <p>Keep being the beautiful, kind, crazy, wonderful person you are. Never let life take away that little spark that makes you… you. ❤️</p>
          
          <p>And honestly, I hope this year gives you fewer reasons to say "I'm tired" and a thousand more reasons to say "I'm happy." 😂💕</p>
          
          <p>May your dreams slowly become your reality, your hard days become beautiful lessons, and your happiest moments become unforgettable memories.</p>
          
          <p>Happy Birthday, Marjana Akter Lima! 🥳🎂💐<br/>
          May this year be your softest, happiest, most successful, and most beautiful chapter yet. ✨</p>
          
          <p>Happy Birthday, Marjana! 💖🎂</p>
          
          <p>Keep smiling. Keep shining. Keep being wonderfully you. 🌷</p>
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-cursive text-3xl text-gold mb-2">Happy birthday, Marjana 🎂</h3>
          <div className="h-[1px] w-3/4 mx-auto bg-gold/20 my-8"></div>
          
          <p className="text-xs tracking-[0.3em] text-[#a0a0a0] uppercase mb-4">With Love From</p>
          <h4 className="font-serif text-2xl text-gold">lots of love & countless good wishes ❤️</h4>
        </div>

        {/* Floating action buttons at the bottom of the card */}
        <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-4">
          <button 
            onClick={triggerConfetti}
            className="flex items-center gap-2 bg-black border border-gold text-gold px-6 py-3 rounded-full hover:bg-gold/10 transition-colors shadow-lg"
          >
            <PartyPopper size={18} />
            <span className="text-sm font-medium">Celebrate Again</span>
          </button>
          
          <button 
            onClick={toggleMusic}
            className="flex items-center gap-2 bg-black border border-gold text-gold px-6 py-3 rounded-full hover:bg-gold/10 transition-colors shadow-lg"
          >
            {isPlaying ? <Music size={18} /> : <Music4 size={18} />}
            <span className="text-sm font-medium">{isPlaying ? 'Music On' : 'Music Off'}</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CardScreen;
