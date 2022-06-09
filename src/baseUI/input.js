import styled from "styled-components";

export const Input = styled.input`
  background-color: rgba(229, 231, 235, 1);
  color: rgba(55, 65, 81, 1);
  border-width: 1px;
  border-radius: 0.25rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
  @media (max-width: 420px) {
    width: 100%;
  }
`;
