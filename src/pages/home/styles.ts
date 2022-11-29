import styled, { css } from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme["zinc-900"]};
`

export const MainContainer = styled.main`
  width: 1440px;
  margin: 0 auto;
  color: white;
  padding-top: 0.5rem;

  > div, img {
    width: 1000px;
    height: 500px;
  }
`

export const MainCover = styled.div`
  min-width: 100%;
  display: flex;
  gap: 1rem;

  > div {
    width: 50rem;
    border: 1px solid white;
    padding: 6rem;
  }
`