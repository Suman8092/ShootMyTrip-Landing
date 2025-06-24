import { motion } from "framer-motion";
import bgImage from "../assets/images/delhi-bg.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-0" />

      {/* Content */}
      <motion.div
        className="z-10 text-center max-w-4xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold leading-tight text-white drop-shadow-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Make memories. <br />
          <span className="text-pink-400">Not blurry photos.</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Travel through Delhi with a local creator who captures it all — effortlessly.
        </motion.p>

        <motion.a
          href="https://wa.me/91XXXXXXXXXX"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8 px-10 py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full shadow-xl transition"
        >
          📸 Book Now on WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
