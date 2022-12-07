import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme["zinc-900"]};
  overflow-x: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const CheckoutContent = styled.div`
  width: 144rem;
  margin: 0 auto;
  padding: 3rem;
  display: flex;
 
` 

export const SummaryAndPayment = styled.div`
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
    background: none;;
    outline: none;
    color: ${({ theme }) => theme["zinc-500"]};
    margin-bottom: 2rem;
    option {
      background: black;
    }
  }
`