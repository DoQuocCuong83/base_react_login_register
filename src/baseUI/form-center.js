import styled from "styled-components";

export const FormCenter = styled.div`
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  max-width: 992px;
  min-width: 400px;
  @media (max-width: 400px) {
    width: 98%;
    min-width: unset;
  }
`;
