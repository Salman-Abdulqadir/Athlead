import React from "react";
import AboutSection from "../components/aboutSection";
import ServicesSection from "../components/servicesSection";
import FaqSection from "../components/faqSection";

//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const AboutUs = () => {
  return (
    <motion.div variants={pageAnimation} animate="show" initial="hidden" exit="exit">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
