import React, { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [status, setStatus] = useState(true);
  return (
    <motion.div layout className="question" onClick={() => setStatus(!status)}>
      <motion.h4 layout>{title}</motion.h4>
      {!status ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};
export default Toggle;
