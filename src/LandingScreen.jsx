import React from 'react';
import { motion } from 'framer-motion';

const LandingScreen = ({ onOpen }) => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-[#050505] overflow-hidden">
      {/* Background balloons animation - placeholder logic */}
      <div className="absolute bottom-0 w-full flex justify-around opacity-30 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="w-16 h-24 bg-gradient-to-t from-[#d4af37] to-[#f3e5ab] rounded-t-full rounded-b-3xl opacity-50"
            initial={{ y: '100%' }}
            animate={{ y: '-120vh' }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <motion.button
        onClick={onOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="z-10 flex flex-col items-center justify-center p-12 rounded-3xl border-2 border-gold bg-black glow-gold cursor-pointer transition-all duration-300"
      >
        <div className="text-6xl mb-6">🎁</div>
        <h2 className="font-serif text-3xl md:text-4xl text-gold text-center mb-4">
          A Special Gift
          <br />
          <span className="font-cursive text-5xl md:text-6xl mt-2 block capitalize">For Marjana</span>
        </h2>
        <p className="text-sm tracking-[0.3em] text-[#a0a0a0] mt-4 uppercase">
          Tap To Open
        </p>
      </motion.button>
    </div>
  );
};

export default LandingScreen;
