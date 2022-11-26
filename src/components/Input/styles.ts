import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  > input {
    width: 100%;
    height: 56px;
    border: none;
    background: none;
    border-radius: 8px;
    border: 1px solid #4f46e5;
    outline: none;

    padding: 0 40px;

    color: ${({ theme }) => theme["zinc-500"]};

    &::placeholder {
      font-size: 1.6rem;
    }
  }

  > svg {
    margin: 0.3rem 0 0.5rem 1.2rem;
    position: absolute;
    color: #4f46e5;
  }

` 