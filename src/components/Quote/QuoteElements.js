import styled from "styled-components";

export const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-bottom: 10rem;

  // iPhone Screen

  @media screen and (max-width: 375px) {
    transition: 0.8s all ease;
    font-size: 15px;
    letter-spacing: 0px;
    width: auto;
  }
`;

export const QuoteBody = styled.p`
  font-size: 18px;
  font-weight: 100;
  margin-bottom: 13px;

  // iPhone Screen

  @media screen and (max-width: 375px) {
    transition: 0.8s all ease;
    font-size: 15px;
    letter-spacing: 0px;
  }
`;

export const QuoteAuthor = styled.p`
  font-size: 18px;
  font-weight: bold;

  // iPhone Screen

  @media screen and (max-width: 375px) {
    transition: 0.8s all ease;
    font-size: 15px;
    letter-spacing: 0px;
  }
`;
