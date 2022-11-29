import styled, { css } from "styled-components";

interface ButtonContainerProps {
  variant?: "indigo" | "red"
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  height: 56px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme["zinc-200"]};
  transition: background 0.2s;

  ${({ theme, variant }) => variant === "red" && 
    css`
      background: ${theme["red-500"]};
      &:hover {
        background: ${theme["red-700"]};
      }
    `  
  }

  ${({ theme, variant }) => variant === "indigo" && 
    css`
      background: ${theme["indigo-500"]};
      &:hover {
        background: ${theme["indigo-700"]}
      }
    `  
  }
`