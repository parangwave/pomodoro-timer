import styled from "styled-components";

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Arial, sans-serif";

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
  width: 15em;
  height: 15em;
  border-radius: 50%;
  margin: 10rem 0;

  svg {
    fill: #ffffff;
    width: 60%;
    height: 60%;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20vw;
`;

export const StatusBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const StatusContent = styled.span`
  font-size: 1.5rem;
  opacity: 0.7;
  letter-spacing: 2px;
`;

export const StatusHeader = styled.h5`
  font-size: 1.8rem;
  letter-spacing: 1.2px;
`;
