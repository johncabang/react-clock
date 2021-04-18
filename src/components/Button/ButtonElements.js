import styled from "styled-components";

export const ClockButtonContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ClockButtonLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: none;
  border-radius: 25px;
  color: #303030;
  cursor: pointer;
  font-size: 16px;
  outline: none;
  padding: 5px 5px 5px 20px;
  text-decoration: none;
  white-space: nowrap;
  letter-spacing: 5px;
  font-weight: bold;
`;

export const ClockButtonCircle = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
`;