import styled from "styled-components";

export const PaymentContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 2rem;

  h2 {
    color: ${({ theme }) => theme["zinc-500"]};
  }

  > div {
    display: flex;
    gap: 1.6rem;
  }
`