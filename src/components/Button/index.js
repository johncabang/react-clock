import {
  ClockButtonContainer,
  ClockButtonCircle,
  ClockButtonLink,
} from "./ButtonElements";

import arrow from "./../../assets/desktop/icon-arrow-up.svg";

const Button = () => {
  return (
    <ClockButtonContainer>
      <ClockButtonLink>
        MORE
        <ClockButtonCircle>
          <img src={arrow} alt="arrow" />
        </ClockButtonCircle>
      </ClockButtonLink>
    </ClockButtonContainer>
  );
};

export default Button;
