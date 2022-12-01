import styled, { keyframes } from "styled-components";

export const CharactersContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  /* height: 100vh; */
  overflow-x: hidden;
  background: ${({ theme }) => theme["zinc-900"]};;
 
  padding-top: 4rem;

  strong { 
    font-size: 4rem;
    font-weight: 300;
    color: ${({ theme }) => theme["zinc-300"]};
  }
`