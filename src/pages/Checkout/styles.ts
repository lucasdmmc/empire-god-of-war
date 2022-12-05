import styled from "styled-components";

export const CheckoutShoppingContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme["zinc-900"]};
  overflow-x: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    background: ${({ theme }) => theme["zinc-700"]};
    position: absolute;
    height: 100vh;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
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
    width: 90px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    

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

  button {
    border: none;
    background: none;

    svg {
      margin-right: 50px;
      color: ${({ theme }) => theme["zinc-400"]}
    }
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
`