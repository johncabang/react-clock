import { StyledContainer, StyledCircle, StyledLink } from "./ButtonElements";

import arrow from "./../../assets/desktop/icon-arrow-up.svg";

const Button = ({ toggle, isOpen }) => {
  return (
    <StyledContainer>
      <StyledLink onClick={toggle}>
        {!isOpen ? "MORE" : "LESS"}
        <StyledCircle>
          <img src={arrow} alt="arrow" />
        </StyledCircle>
      </StyledLink>
    </StyledContainer>
  );
};

export default Button;
