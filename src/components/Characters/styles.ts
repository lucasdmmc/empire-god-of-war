import styled, { keyframes } from "styled-components";

const animationImg = keyframes`
  0% {
    transform: translateY(40%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

export const CharactersContainer = styled.div`
  position: relative;
  /* background: ${({ theme }) => theme["zinc-800"]};; */
  border: 1px solid ${({ theme }) => theme["zinc-700"]};
  border-radius: 10px;
  margin-top: 6rem;
  margin-left: 2rem;

  img {
    width: 100%;
    height: 500px;
    transition: opacity 0.7s;
  }

  span {
    position: absolute;
    left: 25%;
    bottom: 30%;
    font-weight: 500;
    font-size: 3rem;
    color: ${({ theme }) => theme["zinc-300"]};
    font-family: "Sora", sans-serif;
    opacity: 0;
    text-align: center;
  }

  button {
    position: absolute;
    left: 25%;
    bottom: 20%;
    padding: 1.5rem 1rem;
    border: none;
    background: ${({ theme }) => theme["indigo-600"]};
    color: ${({ theme }) => theme["zinc-200"]};
    width: 50%;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 8px;
    opacity: 0;

    &:hover {
      background: ${({ theme }) => theme["indigo-700"]}
    }
  }

  &:hover {
    span, button {
      opacity: 1;
      animation: ${animationImg} 0.4s ease-in-out;
    }
  }

  &:hover {
    div, img {
      opacity: 0.6;
    }
  }
`