import styled from "styled-components";

export const StyledCartButton = styled.button`
  border: none;
  background: none;
  border: 1px solid ${({ theme }) => theme["zinc-600"]};
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: relative;

  > span {
    position: absolute;
    top: -10px;
    right: -5px;
    width: 2rem;
    padding: 0.2rem;
    background: ${({ theme }) => theme["indigo-300"]};
    border-radius: 50%;
  }

  > svg {
    color: ${({ theme }) => theme["indigo-300"]};
  }
`