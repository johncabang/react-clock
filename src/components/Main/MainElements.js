import styled from "styled-components";

// import dayBg from "./../../assets/desktop/bg-image-daytime.jpg";
import nightBg from "./../../assets/desktop/bg-image-nighttime.jpg";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  color: #fff;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${nightBg});
  background-position: center top;
  background-size: cover;
  padding: 0 10rem;
`;

export const ClockContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ClockWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const ClockTimeZone = styled.h4`
  font-size: 40px;
  font-weight: lighter;
  padding: 0 0 2rem 1rem;
`;

export const ClockLocation = styled.h3`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 4.8px;
`;
