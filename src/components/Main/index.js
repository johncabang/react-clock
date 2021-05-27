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

import sunIcon from "./../../assets/desktop/icon-sun.svg";
import moonIcon from "./../../assets/desktop/icon-moon.svg";
import Button from "../Button";
import Quote from "../Quote";

const Main = ({
  isOpen,
  toggle,
  abbreviation,
  city,
  countryCode,
  currentTime,
  dayTime,
  greeting,
}) => {
  return (
    <MainContainer isOpen={isOpen} dayTime={dayTime}>
      <Quote isOpen={isOpen} />
      <ClockContainer>
        <ClockWrapper>
          <ClockGreetingContainer>
            <ClockGreetingIcon>
              {dayTime ? (
                <img src={sunIcon} alt="sun" />
              ) : (
                <img src={moonIcon} alt="moon" />
              )}
            </ClockGreetingIcon>
            <ClockGreeting>{greeting}, IT'S CURRENTLY</ClockGreeting>
          </ClockGreetingContainer>
          <ClockTimeContainer>
            <ClockTime>
              <Moment format="hh:mm">{currentTime}</Moment>
            </ClockTime>
            <ClockTimeZone>{abbreviation}</ClockTimeZone>
          </ClockTimeContainer>
          {!countryCode ? (
            ""
          ) : (
            <ClockLocation>
              IN {city}, {countryCode}
            </ClockLocation>
          )}
        </ClockWrapper>
        <Button toggle={toggle} isOpen={isOpen} />
      </ClockContainer>
    </MainContainer>
  );
};

export default Main;
