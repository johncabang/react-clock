import {
  ClockButtonContainer,
  ClockButtonCircle,
  ClockButtonLink,
} from "./ButtonElements";

import arrow from "./../../assets/desktop/icon-arrow-up.svg";

const Button = ({ toggle, isOpen }) => {
  return (
    <ClockButtonContainer>
      <ClockButtonLink onClick={toggle}>
        {!isOpen ? "MORE" : "LESS"}
        <ClockButtonCircle>
          <img src={arrow} alt="arrow" />
        </ClockButtonCircle>
      </ClockButtonLink>
    </ClockButtonContainer>
  );
};

export default Button;
