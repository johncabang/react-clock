import Moment from "react-moment";

import {
  StyledContainer,
  StyledGreeting,
  StyledGreetingContainer,
  StyledGreetingIcon,
  StyledLocation,
  StyledTime,
  StyledTimeContainer,
  StyledTimeZone,
  StyledWrapper,
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
      <StyledContainer>
        <StyledWrapper>
          <StyledGreetingContainer>
            <StyledGreetingIcon>
              {dayTime ? (
                <img src={sunIcon} alt="sun" />
              ) : (
                <img src={moonIcon} alt="moon" />
              )}
            </StyledGreetingIcon>
            <StyledGreeting>{greeting}, IT'S CURRENTLY</StyledGreeting>
          </StyledGreetingContainer>
          <StyledTimeContainer>
            <StyledTime>
              <Moment format="hh:mm">{currentTime}</Moment>
            </StyledTime>
            <StyledTimeZone>{abbreviation}</StyledTimeZone>
          </StyledTimeContainer>
          {!countryCode ? (
            ""
          ) : (
            <StyledLocation>
              IN {city}, {countryCode}
            </StyledLocation>
          )}
        </StyledWrapper>
        <Button toggle={toggle} isOpen={isOpen} />
      </StyledContainer>
    </MainContainer>
  );
};

export default Main;
