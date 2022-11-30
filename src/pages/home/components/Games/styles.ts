import styled from "styled-components";

export const GameContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  margin-top: 5rem;

  img {
    width: 100%;
    height: 350px;
  }
  padding-bottom: 3rem;
`

export const BetterExperience = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 1rem;
  
  > div {
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    strong {
      color: ${({ theme }) => theme["zinc-400"]};
      font-size: 3rem;
    }

    span {
      font-size: 1.6rem;
      color: ${({ theme }) => theme["zinc-400"]};
      text-align: justify;
    }
  }

  img {
    width: 500px;
    height: 200px;
    border-radius: 20px;
    box-shadow: 0rem 0rem 1rem 0rem ${({ theme }) => theme["indigo-300"]};
  }
`
