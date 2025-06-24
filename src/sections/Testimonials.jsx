import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Maria, Spain",
    text: "“Best part of our Delhi trip — we didn’t have to worry about photos at all!”",
    emoji: "🇪🇸",
  },
  {
    name: "James, UK",
    text: "“I loved how smooth and fast it was. Beautiful edits, awesome service.”",
    emoji: "🇬🇧",
  },
];

const Testimonials = () => {
  return (
    <section className="relative px-6 py-24 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="absolute -top-20 left-0 w-[400px] h-[400px] bg-pink-500/10 blur-[100px] rounded-full z-0" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          📦 What Past Travelers Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-6 text-left shadow-xl hover:shadow-pink-500/20 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <p className="text-xl text-gray-200 italic mb-4">“{t.text}”</p>
              <div className="text-sm font-semibold text-pink-400">{t.emoji} {t.name}</div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-sm text-gray-400 italic">
          (You can add real ones once you collect 2–3 bookings.)
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
