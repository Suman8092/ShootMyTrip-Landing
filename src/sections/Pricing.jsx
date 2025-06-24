import { motion } from "framer-motion";

const packages = [
  {
    title: "Basic Shoot",
    price: "₹3,499",
    duration: "30 mins",
    photos: "15+ edited photos",
    reel: "1 cinematic reel",
  },
  {
    title: "Premium Shoot",
    price: "₹6,999",
    duration: "60 mins",
    photos: "30+ edited photos",
    reel: "2 reels + drone (if available)",
    locations: "2+ locations",
  },
];

const addons = [
  {
    label: "Hotel pickup assistance",
    price: "₹500",
  },
  {
    label: "Drone upgrade (if allowed)",
    price: "₹1,000",
  },
];

const Pricing = () => {
  return (
    <section className="relative px-6 py-24 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-500/10 blur-[100px] rounded-full z-0" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          💸 Packages & Pricing
        </motion.h2>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {packages.map((pack, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 text-left border border-white/10 hover:shadow-pink-500/20 transition hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-pink-400 mb-2">{pack.title}</h3>
              <p className="text-xl font-semibold mb-4">{pack.price}</p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>📸 {pack.duration}</li>
                <li>🖼 {pack.photos}</li>
                <li>🎬 {pack.reel}</li>
                {pack.locations && <li>📍 {pack.locations}</li>}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          className="bg-white/5 backdrop-blur-md rounded-xl p-6 inline-block border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h4 className="text-lg font-semibold mb-4">📩 Add-on Options</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            {addons.map((item, i) => (
              <li key={i}>➕ {item.label} – <span className="text-pink-400">{item.price}</span></li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
