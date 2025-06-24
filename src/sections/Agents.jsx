import { motion } from "framer-motion";

const Agents = () => {
  return (
    <section className="relative px-6 py-24 bg-black text-white">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/10 blur-[120px] rounded-full z-0" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Are You a Travel Company?
        </motion.h2>

        <motion.div
          className="border border-white/10 bg-white/5 backdrop-blur-md rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-gray-300 mb-4 text-sm md:text-base">
            Partner with us to offer your clients a premium, cinematic photo experience.
            <br />
            Earn commission per shoot and get a co-branded booking link tailored for your agency.
          </p>

          <a
            href="mailto:your@email.com"
            className="inline-block mt-4 px-6 py-3 border border-pink-500 text-pink-400 font-semibold rounded-full hover:bg-pink-500 hover:text-white transition"
          >
            👉 Become a Partner – Email Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Agents;
