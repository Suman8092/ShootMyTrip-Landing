import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react"; // Optional icon lib

const trustPoints = [
  "✅ Verified professional photographers",
  "✅ Zero language barrier (English-friendly)",
  "✅ Local experts, top Delhi locations",
  "✅ Fast delivery — 48 hrs turnaround",
  "✅ No need to coordinate or plan yourself",
];

const Trust = () => {
  return (
    <section className="relative px-6 py-24 bg-black text-white">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-500/10 blur-[120px] rounded-full z-0" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ✅ Verified Creators. No Language Barrier. No Hassle.
        </motion.h2>

        <motion.div
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-left space-y-4 shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {trustPoints.map((point, i) => (
            <motion.div
              key={i}
              className="flex items-start space-x-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <CheckCircle className="text-pink-400 w-5 h-5 mt-1" />
              <p className="text-gray-300 text-sm">{point.replace("✅", "")}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;
