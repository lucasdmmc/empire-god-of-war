import styled from "styled-components";

export const GamesContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme["zinc-800"]};
  padding: 1.5rem;
  border-radius: 4px;
  margin-bottom: 3rem;
`

export const InfoCardGames = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  strong {
    font-size: 2rem;
    color: ${({ theme }) => theme["zinc-300"]}
  }

  p {
    color: ${({ theme }) => theme["zinc-500"]};
    text-align: justify;
    /* line-height: 1.4rem; */
    font-size: 1.5rem;
  }
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  margin-top: 2rem;
  margin-bottom: 0.2rem;

  p {
    background: ${({ theme }) => theme["indigo-300"]};
    color: ${({ theme }) => theme["zinc-700"]};
    padding: 0.3rem 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.45rem;
    border-radius: 8px;

  }
`

export const InfoToBuyGame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme['zinc-200']};
    
    > strong {
      font-size: 2rem;
      color: ${({ theme }) => theme['zinc-200']};
    }
  }
  
  button {
    
    border: none;
    background: none;
    
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background: ${({ theme }) => theme["red-500"]};
    color: ${({ theme }) => theme['zinc-200']};
    
    display: flex;
    align-items: center;

    &:hover {
      background: ${({ theme }) => theme["red-700"]};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
      background: ${({ theme }) => theme["red-500"]};
    }

    &:not(:disabled) {
      cursor: pointer;
      opacity: 1;
    }
  }
`