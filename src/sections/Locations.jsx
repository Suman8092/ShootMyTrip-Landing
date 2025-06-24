import { motion } from "framer-motion";

// Replace with your real images later
const locations = [
  {
    title: "India Gate",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/india-gate-delhi-1-attr-hero?qlt=82&ts=1727351922349",
  },
  {
    title: "Humayun’s Tomb",
    img: "https://media.istockphoto.com/id/489343716/photo/humayuns-tomb-delhi-india-cngltrv1109.jpg?s=612x612&w=0&k=20&c=iMkNqT3EHq5jYu6QUT5IoHL5-FE_YRqLA9pviP74zkU=",
  },
  {
    title: "Lodhi Garden",
    img: "https://media.istockphoto.com/id/870352486/photo/bara-gumbad-at-lodi-garden.jpg?s=612x612&w=0&k=20&c=fAwv22PvA368mDcOGQis9FMjbXNj6uTM20A5kkG35E4=",
  },
  {
    title: "Old Delhi Streets",
    img: "https://static2.tripoto.com/media/filter/tst/img/371524/TripDocument/1510079933_22814281_10204197536256357_4611011609782787460_n.jpg",
  },
  {
    title: "Connaught Place",
    img: "https://media.istockphoto.com/id/488078253/photo/people-at-the-connaught-place-in-delhi.jpg?s=612x612&w=0&k=20&c=8B7gANDkobdCpA9LbfYUc0yVSVF2H4ckPZ_CumUB7V8=",
  },
  {
    title: "Qutub Minar",
    img: "https://www.thedelhitours.com/blog/wp-content/uploads/2024/09/Qutub-Minar-750x564.jpg",
  },
];

const Locations = () => {
  return (
    <section className="relative px-6 py-24 bg-black">
      <div className="absolute -top-40 right-0 w-[400px] h-[400px] bg-pink-500/20 blur-[100px] rounded-full z-0" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          📍 Locations We Shoot In Delhi
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <img
                src={loc.img}
                alt={loc.title}
                className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-white text-lg font-semibold">{loc.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
