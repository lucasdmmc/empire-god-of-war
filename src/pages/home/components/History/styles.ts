import styled from "styled-components";

export const HistoryContainer = styled.div`
  color: white;
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

`

export const InfoBeforeReadingTheHistory = styled.div`
  max-width: 72rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-right: 1px solid ${({ theme }) => theme["zinc-700"]};

  padding: 0 5rem;
  
  h2 {
    font-size: 4.7rem;
    color: ${({ theme }) => theme["indigo-300"]};
  }

  span {
    color: ${({ theme }) => theme["zinc-400"]};
    font-size: 2rem;
  }

  p {
    text-align: justify;
    font-size: 1.8rem;
  }
`

export const CardContainer = styled.div`
  width: 400px;
  height: 500px;
  margin: 0 auto;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding: 3rem;

  h3 {
    font-size: 2.3rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme["zinc-300"]}
  }

  p {
    text-align: justify;
    color: ${({ theme }) => theme["zinc-400"]}
  }

  button {
    border: none;
    width: 100%;
    height: 80px;
    border-radius: 6px;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme["zinc-300"]};
    background: ${({ theme }) => theme["indigo-700"]};
    margin-top: 2rem;
    cursor: pointer;

    transition: filter 0.4s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`