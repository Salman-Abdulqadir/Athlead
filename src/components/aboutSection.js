import React from "react";
import { motion } from "framer-motion";
import home1 from "../img/home1.png";

//styled components
import { About, Description, Hide, Image } from "./style";

//svg
import Waves from "./waves";
//ANIMATION
import { titleAnim, fade, imgAnim } from "../Animation";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}> We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>Dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}> true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          nesciunt pariatur, ipsa corporis ut sed voluptatem qui unde laborum
          odio?
        </motion.p>
        <motion.button variants={fade} whileHover={{ scale: 1.2 }}>
          Contact Us
        </motion.button>
      </Description>
      <Image>
        <motion.img variants={imgAnim} src={home1} alt="" />
      </Image>
      <Waves />
    </About>
  );
};

export default AboutSection;
