import styled from "styled-components";

export const SuccessContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme["zinc-900"]};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SuccessContent = styled.div`
  width: 72rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 5rem;
    color: ${({ theme }) => theme["indigo-500"]};
  }

  h3 {
    font-size: 3rem;
    color: ${({ theme }) => theme["zinc-300"]};
  }

  h4 {
    font-size: 3rem;
    color: ${({ theme }) => theme["zinc-200"]};
    margin-top: 2rem;
  }

  span {
    font-size: 2rem;
    color: ${({ theme }) => theme["zinc-400"]}
  }

  .gameName {
    font-size: 1.6rem;
    color: ${({ theme }) => theme["indigo-300"]};
  }

  button {
    margin-top: 2rem;
  }

  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
    color: ${({ theme }) => theme["indigo-500"]};
    transition: filter 0.5s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`