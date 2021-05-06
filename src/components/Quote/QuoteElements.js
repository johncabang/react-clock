import styled from "styled-components";

export const QuoteContainer = styled.div`
  display: flex;
  margin-bottom: 10rem;

  // iPhone Screen

  @media screen and (max-width: 414px) {
    transition: 0.8s all ease;
    font-size: 15px;
    letter-spacing: 0px;
  }
`;

export const QuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuoteBody = styled.p`
  font-size: 18px;
  font-weight: 100;
  margin-bottom: 13px;

  @media screen and (max-width: 320px) {
    transition: 0.8s all ease;
    font-size: 13px;
  }
`;

export const QuoteAuthor = styled.p`
  font-size: 18px;
  font-weight: bold;

  // iPhone Screen

  @media screen and (max-width: 414px) {
    transition: 0.8s all ease;
    font-size: 15px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
`;

export const QuoteRefreshIconWrapper = styled.div`
  background-color: transparent;
  height: auto;
  padding-left: 2rem;
`;

export const QuoteRefreshIcon = styled.div`
  background-color: transparent;
  cursor: pointer;
`;
