import styled from "styled-components";

export const StyledContainer = styled.aside`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 50vh;
  transition: 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  bottom: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  // iPhone Screen

  @media screen and (max-width: 520px) {
    transition: 0.8s all ease;
    height: 35vh;
  }
`;

export const StyledWrapper = styled.div`
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ dayTime }) =>
    dayTime ? "rgba(255, 255, 255, 0.8)" : "#000"};
  color: ${({ dayTime }) => (dayTime ? "#000" : "#FFF")};

  // iPhone Screen

  @media screen and (max-width: 520px) {
    transition: 0.8s all ease;
    flex-direction: column;
  }
`;

export const StyledTextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  // iPhone Screen

  @media screen and (max-width: 520px) {
    transition: 0.8s all ease;
    width: 100%;
  }
`;

export const StyledTitle = styled.h6`
  font-size: 15px;
  letter-spacing: 3px;
  font-weight: 100;

  @media screen and (max-width: 650px) {
    transition: 0.8s all ease;
    font-size: 45px;
  }

  // iPhone Screen

  @media screen and (max-width: 700px) {
    transition: 0.8s all ease;
    font-size: 10px;
    letter-spacing: 2px;
  }
`;

export const StyledBody = styled.h2`
  font-size: 56px;
  font-weight: bold;

  @media screen and (max-width: 1020px) {
    transition: 0.8s all ease;
    font-size: 45px;
  }

  // iPhone Screen

  @media screen and (max-width: 520px) {
    transition: 0.8s all ease;
    font-size: 20px;
  }
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  // iPhone Screen

  @media screen and (max-width: 520px) {
    transition: 0.8s all ease;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 1.5rem;
  }
`;
