import { motion } from "framer-motion";

const people = [
  {
    title: "Solo Traveler",
    desc: "Exploring India for the first time",
    icon: "🧍‍♂️",
  },
  {
    title: "Couple",
    desc: "Romantic getaway in Delhi",
    icon: "💑",
  },
  {
    title: "Creator",
    desc: "Need cinematic travel content",
    icon: "🎥",
  },
  {
    title: "Family",
    desc: "Capturing memories together",
    icon: "👨‍👩‍👧‍👦",
  },
];

const WhoIsFor = () => {
  return (
    <section className="relative px-6 py-24 bg-gradient-to-br from-gray-950 via-black to-gray-900 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-500/20 blur-[120px] rounded-full z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Whether you're…
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {people.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl hover:shadow-pink-500/30 transition hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsFor;
