import styled from "styled-components";

export const ButtonContainer = styled.button`
  margin-top: 4rem;
  width: 100%;
  height: 56px;
  border: none;
  background: ${({ theme }) => theme["zinc-800"]};
  border-radius: 8px;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme["zinc-400"]};
  transition: background 0.4s;

  &:hover {
    background: ${({ theme }) => theme["zinc-700"]};
  }
`