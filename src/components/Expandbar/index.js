import {
  StyledContainer,
  StyledTextContainer,
  StyledBody,
  StyledWrapper,
  StyledTitle,
  StyledTextWrapper,
} from "./ExpandbarElements";

const ExpandBar = ({
  isOpen,
  toggle,
  currentTimezone,
  dayOfYear,
  dayOfWeek,
  weekNumber,
  dayTime,
}) => {
  return (
    <StyledContainer isOpen={isOpen} onClick={toggle}>
      <StyledWrapper dayTime={dayTime}>
        <StyledTextContainer>
          <StyledTextWrapper>
            <StyledTitle>CURRENT TIMEZONE</StyledTitle>
            <StyledBody>{currentTimezone}</StyledBody>
          </StyledTextWrapper>
          <StyledTextWrapper>
            <StyledTitle>DAY OF THE YEAR</StyledTitle>
            <StyledBody>{dayOfYear}</StyledBody>
          </StyledTextWrapper>
        </StyledTextContainer>
        <StyledTextContainer>
          <StyledTextWrapper>
            <StyledTitle>DAY OF THE WEEK</StyledTitle>
            <StyledBody>{dayOfWeek}</StyledBody>
          </StyledTextWrapper>
          <StyledTextWrapper>
            <StyledTitle>WEEK NUMBER</StyledTitle>
            <StyledBody>{weekNumber}</StyledBody>
          </StyledTextWrapper>
        </StyledTextContainer>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default ExpandBar;
