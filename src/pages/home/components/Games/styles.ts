import styled from "styled-components";

export const GameContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding-top: 3rem;
  /* padding-bottom: 3rem; */

  img {
    width: 100%;
    height: 350px;
    transition: filter 0.7s;
    border-radius: 8px;

    &:hover {
      filter: brightness(0.8);
    }
  }
`

export const BetterExperience = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 2rem;
  
  img {
    width: 200px;
    height: 40px;
  }

`
