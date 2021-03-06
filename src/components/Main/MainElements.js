import styled from "styled-components";

export const MainContainer = styled.div`
  transition: 0.5s ease-in-out;

  display: flex;
  justify-content: center;
  flex-direction: column;
  height: ${({ isOpen }) => (isOpen ? "50vh" : "100vh")};
  color: #fff;
  padding: 0 10rem;
  overflow: hidden;

  @media screen and (max-width: 520px) {
    transition: 0.8s all ease;
    padding: 0 5rem;
    height: ${({ isOpen }) => (isOpen ? "65vh" : "100vh")};
  }

  // iPad Screen

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    justify-content: space-around;
    padding-left: 4rem;
  }

  // iPhone Screen

  @media screen and (max-width: 414px) {
    transition: 0.8s all ease;
    height: ${({ isOpen }) => (isOpen ? "65vh" : "100vh")};
    width: 100%;
    padding: 0 2rem;
  }

  @media screen and (max-width: 320px) {
    transition: 0.8s all ease;
    padding: 2rem 2rem;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;

  // iPad Screen

  @media screen and (max-width: 1025px) {
    transition: 0.8s all ease;
    flex-direction: column;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  // iPad Screen

  @media screen and (max-width: 1020px) {
    transition: 0.8s all ease;
    padding-bottom: 5rem;
  }
`;

export const StyledGreetingContainer = styled.div`
  display: flex;
`;

export const StyledGreetingIcon = styled.div`
  margin-right: 1rem;
`;

export const StyledGreeting = styled.h4`
  font-size: 20px;
  font-weight: 100;
  letter-spacing: 4px;

  @media screen and (max-width: 1020px) {
    transition: 0.8s all ease;
    font-size: 15px;
    letter-spacing: 3px;
  }

  // iPhone Screen

  @media screen and (max-width: 414px) {
    transition: 0.8s all ease;
    font-size: 15px;
    letter-spacing: 3px;
  }
`;

export const StyledTimeContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const StyledTime = styled.h1`
  font-size: 200px;
  font-weight: bold;
  height: auto;
  letter-spacing: -5px;

  @media screen and (max-width: 1020px) {
    transition: 0.8s all ease;
    font-size: 150px;
    letter-spacing: 3px;
  }

  @media screen and (max-width: 520px) {
    font-size: 150px;
  }

  // iPhone Screen

  @media screen and (max-width: 700px) {
    transition: 0.8s all ease;
    font-size: 100px;
    letter-spacing: -2.5px;
  }
`;

export const StyledTimeZone = styled.h4`
  font-size: 40px;
  font-weight: lighter;
  padding: 0 0 2rem 1rem;

  @media screen and (max-width: 1020px) {
    transition: 0.8s all ease;
    font-size: 30px;
  }

  @media screen and (max-width: 700px) {
    font-size: 20px;
    padding-left: 1rem;
  }

  // iPhone Screen

  @media screen and (max-width: 414px) {
    font-size: 15px;
    padding: 0 0 1.2rem 1rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
    padding: 0 1rem 1rem 0.5rem;
  }
`;

export const StyledLocation = styled.h3`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 4.8px;

  @media screen and (max-width: 1020px) {
    transition: 0.8s all ease;
    font-size: 20px;
    letter-spacing: 3px;
  }

  // iPhone Screen

  @media screen and (max-width: 414px) {
    transition: 0.8s all ease;
    font-size: 15px;
    letter-spacing: 3px;
  }
`;
