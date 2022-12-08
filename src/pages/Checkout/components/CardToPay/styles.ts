import styled from "styled-components";

export const CardToPayContainer = styled.button`
  border: none;
  background: none;
  width: 100%;
  height: 100px;
  border: 1px solid ${({ theme }) => theme["indigo-700"]};
  color: ${({ theme }) => theme["zinc-400"]};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-weight: bold;
  font-size: 1.4rem;
  border-radius: 6px;
  transition: filter 0.4s;

  &:hover {
    filter: brightness(0.9)
  }

  &:focus {
    background: ${({ theme }) => theme["indigo-700"]};
    color: ${({ theme }) => theme["zinc-300"]};

    svg {
      color: ${({ theme }) => theme["zinc-300"]}
    }
  }

  svg {
    color: ${({ theme }) => theme["indigo-500"]};
  }
`