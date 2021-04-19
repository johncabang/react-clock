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
`;

export const ClockContainer = styled.div`
  display: flex;
  justify-content: space-between;

  // iPad Screen

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    flex-direction: column;
  }
`;

export const ClockWrapper = styled.div`
  display: flex;
  flex-direction: column;

  // iPad Screen

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    padding-bottom: 5rem;
  }
`;

export const ClockGreetingContainer = styled.div`
  display: flex;
`;

export const ClockGreetingIcon = styled.div`
  margin-right: 1rem;
`;

export const ClockGreeting = styled.h4`
  font-size: 20px;
  font-weight: 100;
  letter-spacing: 4px;

  // iPhone Screen

  @media screen and (max-width: 414px) {
    transition: 0.8s all ease;
    font-size: 15px;
    letter-spacing: 3px;
  }
`;

export const ClockTimeContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const ClockTime = styled.h1`
  font-size: 200px;
  font-weight: bold;
  height: auto;
  letter-spacing: -5px;

  // iPhone Screen

  @media screen and (max-width: 414px) {
    transition: 0.8s all ease;
    font-size: 100px;
    letter-spacing: -2.5px;
  }
`;

export const ClockTimeZone = styled.h4`
  font-size: 40px;
  font-weight: lighter;
  padding: 0 0 2rem 1rem;

  // iPhone Screen

  @media screen and (max-width: 414px) {
    transition: 0.8s all ease;
    font-size: 15px;
    padding: 0 0 1.2rem 1rem;
  }
`;

export const ClockLocation = styled.h3`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 4.8px;

  // iPhone Screen

  @media screen and (max-width: 414px) {
    transition: 0.8s all ease;
    font-size: 15px;
    letter-spacing: 3px;
  }
`;
