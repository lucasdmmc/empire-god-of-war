import * as AlertDialog  from "@radix-ui/react-alert-dialog";
import styled from "styled-components";

export const Overlay = styled(AlertDialog.Overlay)`
  position: fixed;
  width: 100%;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(AlertDialog.Content)`
  width: 45rem;
  border-radius: 6px;
  padding: 2rem;

  background: ${({ theme }) => theme["zinc-200"]};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  strong {
    color: ${({ theme }) => theme["zinc-900"]};
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
  margin-top: 3rem;
`

export const Cancel = styled(AlertDialog.Cancel)`
  border: none;
  background: ${({ theme }) => theme["zinc-300"]};
  color: ${({ theme }) => theme["zinc-700"]};
  border-radius: 4px;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  transition: filter 0.4s;

  &:hover {
    filter: brightness(0.9)
  }

`

export const Action = styled(AlertDialog.Action)`
  border: none;
  background: ${({ theme }) => theme["red-100"]};
  color: ${({ theme }) => theme["red-500"]};
  border-radius: 4px;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  transition: filter 0.4s;

  &:hover {
    filter: brightness(0.9);
  }

`