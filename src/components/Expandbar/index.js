import { ExpandbarContainer, ExpandbarWrapper } from "./ExpandbarElements";

const ExpandBar = ({ isOpen, toggle }) => {
  return (
    <ExpandbarContainer isOpen={isOpen} onClick={toggle}>
      <ExpandbarWrapper>CURRENT TIMEZONE</ExpandbarWrapper>
    </ExpandbarContainer>
  );
};

export default ExpandBar;
