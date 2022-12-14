import React from "react";
import styled from "styled-components";

//importing images
import athlete from "../img/athlete-small.png";
import athlete2 from "../img/athlete2.png";

const Athlete = () => {
  const movie = {
    title: "The Athlete",
    mainImg: athlete,
    secondaryImg: athlete2,
    url: "/work/the-athlete",
    awards: [
      {
        title: "Truly A masterpiece",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
      {
        title: "Fresh look on a brutal sport.",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
      {
        title: "It’s okay lmao.",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
    ],
  };
  return (
    <>
      {movie && (
        <Details>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled.div`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 5rem;
  align-items: center;
  justify-content: space-around;
`;
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

//Award Component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default Athlete;
