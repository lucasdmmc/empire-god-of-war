import styled, { keyframes } from "styled-components";


const animationInput = keyframes`
  0% {
    transform: translateX(10px);
  }

  100% {
    transform: translateY(-7px);
  }
`

export const InputContainer = styled.div`

  position: relative;
  width: 100%;
 

  input {
    width: 100%;
    height: 56px;
    padding: 1rem;
    /* background: ${({ theme }) => theme["zinc-200"]}; */
    background: none;
    border-radius: 5px;
    outline: none;
    color: #fff;
    font-size: 1.6rem;
    border: none;
    border-bottom: 3px solid ${({ theme }) => theme["indigo-500"]};
    color: ${({ theme }) => theme["zinc-500"]};
  }

  span {
    position: absolute;
    left: 0;
    padding: 1.6rem;
    pointer-events: none;
    font-size: 1.6rem;
    color: rgba(255, 255, 255, 0.25);;
    color: ${({ theme }) => theme["zinc-500"]};
    transition: 0.5s;
  }

  input:valid ~ span,
  input:focus ~ span{
    color: ${({ theme }) => theme["indigo-500"]};
    transform: translateX(-10px) translateY(-20px);
    font-size: 1.3rem;
    /* padding-right: 40px; */
      
  }

  

`