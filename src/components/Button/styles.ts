import styled, { css } from "styled-components";

interface ButtonContainerProps {
  variant?: "indigo" | "red" | "zinc";
  background?: "none"
  text?: "regular" | "lager"
}

export const StyledButton = styled.button<ButtonContainerProps>`
  width: 100%;
  height: 56px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme["zinc-200"]};
  transition: background 0.2s;

  ${({ text }) => text === "lager" && css`font-size: 1.8rem`};
  ${({ text }) => text === "regular" && css`font-size: 1.4rem`};

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

  ${({ theme, variant }) => variant === "zinc" && 
    css`
      background: ${theme["zinc-800"]};
      color: ${theme["zinc-400"]};
      &:hover {
        background: ${theme["zinc-700"]}
      }
    `  
  }

  ${({ theme, background }) => background === "none" && 
    css`
      background: none;
      border: 2px solid ${theme["zinc-700"]};
      &:hover {
        background: ${theme["zinc-800"]};
        transition: none;
      }
    `
  }
`