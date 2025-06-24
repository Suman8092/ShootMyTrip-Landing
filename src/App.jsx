import React from "react";
import Hero from "./sections/Hero";
import WhoIsThisFor from "./sections/WhoIsThisFor";
import Locations from "./sections/Locations";
import Pricing from "./sections/Pricing";
import Trust from "./sections/Trust";
import CTA from "./sections/CTA";
import Agents from "./sections/Agents";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";


export default function App() {
  return (
    <div className="text-white bg-black">
      <Hero />
      <WhoIsThisFor />
      <Locations />
      <Pricing />
      <Trust />
      <CTA />
<Agents />  
<Testimonials />
<Footer />
      {/* You can continue with more sections here */}
    </div>
  );
}
