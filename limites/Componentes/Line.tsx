import styled, { keyframes } from "styled-components";

const growAndShrink = keyframes`
  10% {
    width: 10%;
  }
  20% {
    width: 20%;
  }
  30% {
    width: 30%;
  }
  40% {
    width: 40%;
  }
  50% {
    width: 50%;
  }
  60% {
    width: 60%;
  }
  80% {
    width: 80%;
  }
  90% {
    width: 90%;
  }
  100% {
    width: 100%;
  }
`;

export const Line2 = styled.div`
  display: block;
  width: 10%;
  height: 5px;
  background: black;
  margin: auto;
  animation: ${growAndShrink} 3s linear infinite;
`;

export default Line2;
