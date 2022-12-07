import styled from "styled-components";

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme["zinc-800"]};

  > h2 {
    color: ${({ theme }) => theme["zinc-400"]};
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }
  
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    
    section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      
      strong {
        color: ${({ theme }) => theme["zinc-400"]};
        font-size: 2.5rem;
      }
  
      span {
        color: ${({ theme }) => theme["zinc-500"]};
      }
    }

  }
`