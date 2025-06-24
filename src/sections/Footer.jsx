import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative px-6 py-16 bg-black text-white text-center">
      <div className="absolute -top-10 left-0 w-[300px] h-[300px] bg-pink-500/10 blur-[100px] rounded-full z-0" />

      <motion.div
        className="relative z-10 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg font-semibold mb-2">📍 Based in Delhi</p>

        <p className="text-sm text-gray-400 mb-1">
          📧 <a href="mailto:your@email.com" className="underline hover:text-white">your@email.com</a>
        </p>
        <p className="text-sm text-gray-400 mb-1">
          📱 <a href="tel:+91XXXXXXXXXX" className="underline hover:text-white">+91-XXXXXXXXXX</a>
        </p>
        <p className="text-sm text-gray-400 mb-4">
          📸 Instagram: <a href="https://instagram.com/shootmytrip" className="underline hover:text-white" target="_blank">@shootmytrip</a>
        </p>

        <p className="text-xs text-gray-500 italic">🌐 Website launching soon</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
