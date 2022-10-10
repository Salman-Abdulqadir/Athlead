import React from "react";
import styled from "styled-components";
import { About } from "./style";
import Toggle from "../components/toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I start?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              mollitia rerum atque a delectus itaque saepe. In placeat tempore
              tempora quisquam cupiditate sit illo debitis. Assumenda eligendi
              maiores unde neque?
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              mollitia rerum atque a delectus itaque saepe. In placeat tempore
              tempora quisquam cupiditate sit illo debitis. Assumenda eligendi
              maiores unde neque?
            </p>
          </div>
        </Toggle>
        <Toggle title="Different payment method">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              mollitia rerum atque a delectus itaque saepe. In placeat tempore
              tempora quisquam cupiditate sit illo debitis. Assumenda eligendi
              maiores unde neque?
            </p>
          </div>
        </Toggle>
        <Toggle title="What products do you offer?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              mollitia rerum atque a delectus itaque saepe. In placeat tempore
              tempora quisquam cupiditate sit illo debitis. Assumenda eligendi
              maiores unde neque?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

//styled components
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 1.5rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 1rem 0rem;
    width: 100%;
  }
  .question {
    padding: 2rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
