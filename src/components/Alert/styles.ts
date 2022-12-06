import styled from "styled-components";
import * as AlertDialog from "@radix-ui/react-alert-dialog"

export const AlertOverlay = styled(AlertDialog.Overlay)`
  width: 100%;
  height: 100%;
  background: red;
  position: absolute;
`

export const AlertContent = styled(AlertDialog.Content)`
  width: 100%;
  height: 100%;
  background: red;
`