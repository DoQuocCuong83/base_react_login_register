import styled from "styled-components";

export const PageLoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  position: relative;
  img {
    width: 70px;
    height: 70px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
`;
