import styled from "styled-components";

export const ClockButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ClockButtonLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 25px;
  color: #303030;
  cursor: pointer;
  font-size: 16px;
  padding: 5px 5px 5px 20px;
  white-space: nowrap;
  letter-spacing: 5px;
  font-weight: bold;
  width: 140px;
`;

export const ClockButtonCircle = styled.div`
  display: flex;
  justify-content: center;
  width: 30px;
  height: 30px;
`;
