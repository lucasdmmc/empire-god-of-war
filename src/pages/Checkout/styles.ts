import styled from "styled-components";
import * as AlertDialog from "@radix-ui/react-alert-dialog"

export const CheckoutShoppingContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme["zinc-900"]};
  overflow-x: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const CheckoutShopping = styled.div`
  width: 144rem;
  margin: 0 auto;
  padding: 3rem;
  display: flex;
 
` 

export const ShoppingCartContainer = styled.div`
  flex: 1;
  background: ${({ theme }) => theme["zinc-800"]};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 3rem 4rem;
  box-shadow: -10px 10px 40px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2rem;

    h2 {
      font-size: 3rem;
      color: ${({ theme }) => theme["zinc-300"]};
    }
  }

  footer {
    margin-top: 10rem;

    a {
      display: flex;
      align-items: center;
      gap: 1rem;
      color: ${({ theme }) => theme["zinc-300"]};

      &:hover {
        color: ${({ theme }) => theme["zinc-700"]}
      }
    }
  }
`
export const ButtonCart = styled.button`
  border: none;
  background: none;
  border: 1px solid ${({ theme }) => theme["zinc-400"]};
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
    background: ${({ theme }) => theme["zinc-400"]};
    border-radius: 50%;
  }

  > svg {
    color: ${({ theme }) => theme["zinc-400"]};
  }
`

export const CartGamesContainer = styled.div`
  width: 100%;
  min-height: 400px;
  max-height: 400px;
  overflow-y: auto;
`

export const CartGames = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: 1px solid ${({ theme }) => theme["zinc-600"]};

  img {
    width: 100px;
    height: 100px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    width: 25rem;
    

    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme["zinc-400"]}
    }

    span {
      color: ${({ theme }) => theme["zinc-500"]}
    }
  }

  strong {
    color: ${({ theme }) => theme["zinc-400"]}
  }

`

export const RemoveGame = styled.button`
  border: none;
  background: none;

  svg {
    margin-right: 50px;
    color: ${({ theme }) => theme["zinc-400"]}
  }
`

export const Platform = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    color: ${({ theme }) => theme["zinc-500"]};
  }

  svg {
    color: ${({ theme }) => theme["indigo-500"]};
  }
`

export const CheckoutContent = styled.div`
  width: 45rem;
  background: ${({ theme }) => theme["zinc-900"]};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.2);

  padding: 3rem 4rem;

  h2 {
    color: ${({ theme }) => theme["zinc-400"]};
    padding-bottom: 2rem;
  }

  select {
    width: 100%;
    height: 3rem;
    /* background: ${({ theme }) => theme["zinc-500"]}; */
    background: none;;
    outline: none;
    color: ${({ theme }) => theme["zinc-500"]};
    margin-bottom: 2rem;
    option {
      background: black;
    }
  }
`

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme["zinc-800"]};
  
  h2 {
    color: ${({ theme }) => theme["zinc-400"]};
  }
  
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    
    section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      
      strong {
        color: ${({ theme }) => theme["zinc-400"]};
        font-size: 2.5rem;
      }
  
      span {
        color: ${({ theme }) => theme["zinc-500"]};
      }
    }

  }
`

export const Payment = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 2rem;

  h2 {
    margin-top: 1.6rem;
    color: ${({ theme }) => theme["zinc-500"]};
  }

  > div {
    display: flex;
    gap: 1.6rem;
  }
`


export const Overlay = styled(AlertDialog.Overlay)`
  position: fixed;
  width: 100%;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(AlertDialog.Content)`
  width: 40rem;
  border-radius: 6px;
  padding: 2rem;

  background: ${({ theme }) => theme["zinc-700"]};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  strong {
    color: ${({ theme }) => theme["zinc-400"]};
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  transition: background 0.4s, color 0.4s;

  &:hover {
    background: ${({ theme }) => theme["zinc-400"]};
    color: ${({ theme }) => theme["zinc-600"]}
  }

`

export const Action = styled(AlertDialog.Action)`
  border: none;
  background: ${({ theme }) => theme["zinc-300"]};
  color: ${({ theme }) => theme["red-500"]};
  border-radius: 4px;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  transition: background 0.4s, color 0.4s;

  &:hover {
    background: ${({ theme }) => theme["zinc-400"]};
    color: ${({ theme }) => theme["red-700"]}
  }

`