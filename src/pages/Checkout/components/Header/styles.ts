import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;

  h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme["zinc-300"]};
  }
`