import Moment from "react-moment";

import {
  ClockContainer,
  ClockGreeting,
  ClockGreetingContainer,
  ClockGreetingIcon,
  ClockLocation,
  ClockTime,
  ClockTimeContainer,
  ClockTimeZone,
  ClockWrapper,
  MainContainer,
} from "./MainElements";

// import sunIcon from "./../../assets/desktop/icon-sun.svg";
import moonIcon from "./../../assets/desktop/icon-moon.svg";
import Button from "../Button";
import Quote from "../Quote";

const Main = ({
  isOpen,
  toggle,
  currentTime,
  abbreviation,
  city,
  countryCode,
}) => {
  return (
    <MainContainer isOpen={isOpen}>
      <Quote isOpen={isOpen} />
      <ClockContainer>
        <ClockWrapper>
          <ClockGreetingContainer>
            <ClockGreetingIcon>
              <img src={moonIcon} alt="sun" />
            </ClockGreetingIcon>
            <ClockGreeting>GOOD EVENING, IT’S CURRENTLY</ClockGreeting>
          </ClockGreetingContainer>
          <ClockTimeContainer>
            <ClockTime>
              <Moment format="hh:mm">{currentTime}</Moment>
            </ClockTime>
            <ClockTimeZone>{abbreviation}</ClockTimeZone>
          </ClockTimeContainer>
          <ClockLocation>
            IN {city}, {countryCode}
          </ClockLocation>
        </ClockWrapper>
        <Button toggle={toggle} isOpen={isOpen} />
      </ClockContainer>
    </MainContainer>
  );
};

export default Main;
