import React from "react";

//images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";


//router components
import styled from "styled-components";
import { Link } from "react-router-dom";

//animation
import { motion } from "framer-motion";
import { pageAnimation, workAnim, framesAnim, lineAnim } from "../Animation";

const OurWork = () => {
  return (
    <Work
      variants={pageAnimation}
      animate="show"
      initial="hidden"
      exit="exit"
      style={{ background: "#fffff" }}
    >
      <Frames variants={framesAnim}>
        <Frame1 variants={workAnim}></Frame1>
        <Frame2 variants={workAnim}></Frame2>
        <Frame3 variants={workAnim}></Frame3>
        <Frame4 variants={workAnim}></Frame4>
      </Frames>
      <Movie>
        <h2>The Athlete</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to={"/work/athlete"}>
          <img src={athlete} alt="athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to={"/work/good-times"}>
          <img src={goodtimes} alt="good times" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to={"/work/racer"}>
          <img src={theracer} alt="the racer" />
        </Link>
      </Movie>
    </Work>
  );
};

//styled components
const Work = styled(motion.div)`
  min-height: 100vh;
  padding: 2rem 10rem;
  overflow: hidden;
  background: #ffff;
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

const Frames = styled(motion.div)``;
export default OurWork;
