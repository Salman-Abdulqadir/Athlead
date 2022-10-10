import styled from "styled-components";

//STYLED COMPONENTS
export const About = styled.div`
  display: flex;
  min-height: 80vh;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 10rem;
  color: white;
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    max-height: 75vh;
    object-fit: cover;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
