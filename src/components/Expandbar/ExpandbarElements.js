import styled from "styled-components";

export const ExpandbarContainer = styled.aside`
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

  @media screen and (max-width: 375px) {
    transition: 0.8s all ease;
    height: 40vh;
  }
`;

export const ExpandbarWrapper = styled.div`
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;

  // iPhone Screen

  @media screen and (max-width: 375px) {
    transition: 0.8s all ease;
    flex-direction: column;
  }
`;

export const ExpandbarTextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  // iPhone Screen

  @media screen and (max-width: 375px) {
    transition: 0.8s all ease;
    width: 100%;
  }
`;

export const ExpandbarTitle = styled.h6`
  font-size: 15px;
  letter-spacing: 3px;
  font-weight: 100;

  // iPhone Screen

  @media screen and (max-width: 375px) {
    transition: 0.8s all ease;
    font-size: 10px;
    letter-spacing: 2px;
  }
`;

export const ExpandbarBody = styled.h2`
  font-size: 56px;
  font-weight: bold;

  // iPhone Screen

  @media screen and (max-width: 375px) {
    transition: 0.8s all ease;
    font-size: 20px;
  }
`;

export const ExpandbarTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  // iPhone Screen

  @media screen and (max-width: 375px) {
    transition: 0.8s all ease;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 1.5rem;
  }
`;
