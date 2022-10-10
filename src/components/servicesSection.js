import React from "react";

//import icons and images
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

// IMPORTING STYLED COMPONENTS FROM THE STYLES.JS FILE
import styled from "styled-components";
import { About, Description, Image } from "./style";

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>Quality</span> Services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock-icon" />
              <h3>Efficient</h3>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis, veritatis?
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm-icon" />
              <h3>Pro Grade Gear</h3>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis, veritatis?
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork-icon" />
              <h3>Teamwork</h3>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis, veritatis?
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money-icon" />
              <h3>Affordable</h3>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis, veritatis?
            </p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="camera-robot" />
      </Image>
    </Services>
  );
};

//styled components
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex: 1 15rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 10px;
    }
  }
`;
export default ServicesSection;
