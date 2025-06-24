import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative px-6 py-24 bg-gradient-to-b from-black to-gray-900 text-white text-center">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-500/10 blur-[120px] rounded-full z-0" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Capture Delhi Like Never Before?
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We’re currently live in Delhi only — accepting limited bookings per day.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-4 rounded-full shadow-lg animate-bounce transition"
          >
            📸 Book Now on WhatsApp
          </a>

          <a
            href="#booking-form"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full border border-white/20 transition"
          >
            📅 Fill Booking Form
          </a>
        </motion.div>

        <motion.p
          className="mt-8 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Payment accepted via UPI or International Cards (Stripe / PayPal)
        </motion.p>
      </div>
    </section>
  );
};

export default CTA;
