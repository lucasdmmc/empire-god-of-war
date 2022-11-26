import styled from "styled-components";

import bgImage from "../../assets/bg-signup.png"

export const SignInContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;

  background: ${({ theme }) => theme["zinc-900"]};
`

export const FormContainer = styled.div`
  width: 59rem;
  margin: auto;
`

export const Form = styled.form`
  padding: 0 8rem;

  > h1 {
    font-size: 4.31rem;
    text-transform: uppercase;
    margin-bottom: 3rem;
    color: #4f46e5;
    font-family: 'Righteous', cursive;
  }

  > div {
    display: flex;
    flex-direction: column;

  > strong {
    font-size: 3.4rem;
    color: ${({ theme }) => theme["zinc-400"]}
  }

  > span {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.55rem;
    text-align: justify;
    color: ${({ theme }) => theme["zinc-500"]}
  }
}
`

export const SingUp = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 0.5rem;

  span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme["zinc-500"]}
  }

  a {
    color: ${({ theme }) => theme["indigo-500"]};

    &:hover {
      filter: brightness(1.1);
    }
  }
`

export const InputsContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  div + div {
    margin-top: 1rem;
  }
`

export const Background = styled.div`
  flex: 1;
  background-image: url(${bgImage}) ;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
`