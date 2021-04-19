import {
  ExpandbarContainer,
  ExpandbarTextContainer,
  ExpandbarBody,
  ExpandbarWrapper,
  ExpandbarTitle,
  ExpandbarTextWrapper,
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
    <ExpandbarContainer isOpen={isOpen} onClick={toggle}>
      <ExpandbarWrapper dayTime={dayTime}>
        <ExpandbarTextContainer>
          <ExpandbarTextWrapper>
            <ExpandbarTitle>CURRENT TIMEZONE</ExpandbarTitle>
            <ExpandbarBody>{currentTimezone}</ExpandbarBody>
          </ExpandbarTextWrapper>
          <ExpandbarTextWrapper>
            <ExpandbarTitle>DAY OF THE YEAR</ExpandbarTitle>
            <ExpandbarBody>{dayOfYear}</ExpandbarBody>
          </ExpandbarTextWrapper>
        </ExpandbarTextContainer>
        <ExpandbarTextContainer>
          <ExpandbarTextWrapper>
            <ExpandbarTitle>DAY OF THE WEEK</ExpandbarTitle>
            <ExpandbarBody>{dayOfWeek}</ExpandbarBody>
          </ExpandbarTextWrapper>
          <ExpandbarTextWrapper>
            <ExpandbarTitle> WEEK NUMBER</ExpandbarTitle>
            <ExpandbarBody>{weekNumber}</ExpandbarBody>
          </ExpandbarTextWrapper>
        </ExpandbarTextContainer>
      </ExpandbarWrapper>
    </ExpandbarContainer>
  );
};

export default ExpandBar;
