import styled, { keyframes } from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme["zinc-800"]};
  padding: 3.5rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  header {
    max-width: 144rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      margin-top: 0.5rem;
    }

    strong {
      font-size: 4rem;
      color: ${({ theme }) => theme["indigo-700"]};
      font-family: 'Righteous', cursive;
      text-transform: uppercase;
    }

    ul {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 2rem;
    }

    ul, li {
      list-style: none;
    }

    a {
      font-size: 2rem;
      color: ${({ theme }) => theme["zinc-500"]};
      display: inline-block;
      border-top: 2px solid transparent;

      &::after {
        display: block;
        content: "";
        width: 0;
        height: 3px;
        background: ${({ theme }) => theme["indigo-600"]};
        border-radius: 8px;
        transition: width 0.5s;
      }

      &:hover::after,
      &:focus::after  {
        width: 100%;
      }

      &:focus, 
      &:hover {
        color: ${({ theme }) => theme["zinc-400"]};
      }
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
`

export const InputWithIcon = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 250px;
    height: 36px;
    padding: 0 4rem;
    color: ${({ theme }) => theme["zinc-400"]};

    outline: none;
    border: none;
    background: none;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme["zinc-700"]};
  }

  svg {
    position: absolute;
    left: 1rem;
    color: ${({ theme }) => theme["zinc-600"]};
  }
`

export const UserNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const ButtonCart = styled.button`
  border: none;
  background: none;
  border: 1px solid ${({ theme }) => theme["zinc-600"]};
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: relative;

  > span {
    position: absolute;
    top: -10px;
    right: -5px;
    width: 2rem;
    padding: 0.2rem;
    background: ${({ theme }) => theme["indigo-300"]};
    border-radius: 50%;
  }

  > svg {
    color: ${({ theme }) => theme["indigo-300"]};
  }
`