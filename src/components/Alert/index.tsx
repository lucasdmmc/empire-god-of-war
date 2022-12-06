import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { RemoveGame } from "../../pages/Checkout/styles";
import { AlertContent, AlertOverlay } from "./styles";

export function Alert() {
  return (
    <>
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <RemoveGame />
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertOverlay />
        <AlertContent>
          <AlertDialog.Title>
            Tem certeza que deseja remover o jogo do carrinho?
          </AlertDialog.Title>

        </AlertContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
    
    </>
  )
}