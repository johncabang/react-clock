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
          {/* <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <circle fill="#303030" cx="20" cy="20" r="20" />
              <path stroke="#FFF" stroke-width="2" d="M14 23l6-6 6 6" />
            </g>
          </svg> */}
        </ClockButtonCircle>
      </ClockButtonLink>
    </ClockButtonContainer>
  );
};

export default Button;
