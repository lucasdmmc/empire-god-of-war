import styled, { css, keyframes } from "styled-components";

const animationPrice = keyframes`
  0%, 100% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }
`

const animationHome = keyframes`
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0)
  }
`

const animationBuyProduct = keyframes`
  0% {
    transform: translateY(-90%);
  }

  100% {
    transform: translateY(0)
  }
`
  
export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme["zinc-900"]};
  overflow-y: auto;
`

export const MainContainer = styled.main`
  width: 1440px;
  margin: 0 auto;
  color: white;
  padding-top: 3rem;
  animation: ${animationHome} 1s ease-in-out;

  > div, img:not(img) {
    width: 1000px;
    height: 500px;
    padding-top: 1rem;
    overflow: hidden;
    border-radius: 10px;
  }
`

export const MainCover = styled.div`
  min-width: 100%;
  display: flex;
  gap: 1rem;
`

export const BuyProduct = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme["zinc-800"]};
  border-radius: 8px;
  padding: 6rem;
  animation: ${animationBuyProduct} 1s ease-in-out;

  > strong {
    font-size: 3rem;
  }

  > button {
    margin-top: 1rem;
  }

  button + button {
    margin-top: 1rem;
  }
`

export const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-bottom: 1.6rem;

  svg {
    fill: yellow;
  }
`

export const Note = styled.div`
  padding: 0.1rem 1rem;
  background: ${({ theme }) => theme["zinc-700"]};
  border-radius: 4px;
`

export const InfoGames = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;

  strong {
    font-size: 3rem;
    color: ${({ theme }) => theme["indigo-300"]};
    text-transform: uppercase;
    font-family: 'Righteous', cursive;
  }

  p {
    color: ${({ theme }) => theme["zinc-400"]};
    font-size: 1.5rem;
    line-height: 1.8rem;
    text-align: justify;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;


  }

  ul li {
    list-style: none;
    background: ${({ theme }) => theme["zinc-700"]};
    padding: 0.2rem 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme["zinc-200"]};
  }
`

export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: flex-start;

  margin: 1rem 0rem 1rem 0;

  .percentage {
    background: ${({ theme }) => theme["indigo-300"]};
    color: ${({ theme }) => theme["white"]};
    padding: 0.5rem 1rem;
    border-radius: 40%;
  }

  .oldPrice {
    color: ${({ theme }) => theme["zinc-400"]};
    text-decoration: line-through;
  }

  .newPrice {
    font-size: 2.2rem;
    font-weight: bold;
    position: relative;
    animation: ${animationPrice} 3s infinite;
  }
`