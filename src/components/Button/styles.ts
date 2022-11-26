import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 56px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: bold;
  background: ${({ theme }) => theme["indigo-500"]};
  color: ${({ theme }) => theme["zinc-200"]};
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme["indigo-600"]
  }
}
`