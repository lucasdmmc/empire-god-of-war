import styled from "styled-components";

export const EmpityCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;

  strong {
    font-size: 4rem;
    color: ${({ theme }) => theme["zinc-300"]};
  }

  span {
    font-size:3rem;
    color: ${({ theme }) => theme["zinc-500"]};
  }

  svg {
    color: ${({ theme }) => theme["indigo-600"]}
  }

  a {
    padding-top: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme["zinc-500"]};

    &:hover {
      color: ${({ theme }) => theme["zinc-400"]};
    }
  }
`