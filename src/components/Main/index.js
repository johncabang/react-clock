import {
  ClockButtonContainer,
  ClockButtonCircle,
  ClockButtonLink,
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
  QuoteAuthor,
  QuoteBody,
  QuoteContainer,
} from "./MainElements";

// import sunIcon from "./../../assets/desktop/icon-sun.svg";
import moonIcon from "./../../assets/desktop/icon-moon.svg";
import arrow from "./../../assets/desktop/icon-arrow-up.svg";

const Main = () => {
  return (
    <MainContainer>
      <QuoteContainer>
        <QuoteBody>
          “The science of operations, as derived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value.”
        </QuoteBody>
        <QuoteAuthor>Ada Lovelace</QuoteAuthor>
      </QuoteContainer>
      <ClockContainer>
        <ClockWrapper>
          <ClockGreetingContainer>
            <ClockGreetingIcon>
              <img src={moonIcon} alt="sun" />
            </ClockGreetingIcon>
            <ClockGreeting>GOOD EVENING, IT’S CURRENTLY</ClockGreeting>
          </ClockGreetingContainer>
          <ClockTimeContainer>
            <ClockTime>23:14</ClockTime>
            <ClockTimeZone>BST</ClockTimeZone>
          </ClockTimeContainer>
          <ClockLocation>IN LONDON, UK</ClockLocation>
        </ClockWrapper>
        <ClockButtonContainer>
          <ClockButtonLink>
            MORE
            <ClockButtonCircle>
              <img src={arrow} alt="arrow" />
            </ClockButtonCircle>
          </ClockButtonLink>
        </ClockButtonContainer>
      </ClockContainer>
    </MainContainer>
  );
};

export default Main;
