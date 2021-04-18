import styled from "styled-components";

export const ExpandbarContainer = styled.aside`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 50vh;
  transition: 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  bottom: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const ExpandbarWrapper = styled.div`
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
