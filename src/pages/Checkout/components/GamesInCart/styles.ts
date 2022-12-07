import styled from "styled-components";

export const GamesInCartContainer = styled.div`
  flex: 1;
  background: ${({ theme }) => theme["zinc-800"]};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 3rem 4rem;
  box-shadow: -10px 10px 40px rgba(0, 0, 0, 0.3);

  border: 1px solid white;

  display: flex;
  flex-direction: column;
  margin-bottom: auto;
`

export const GamesInCartWrapper = styled.div`
  width: 100%;
  min-height: 400px;
  max-height: 400px;
  overflow-y: auto;
`

export const GamesInCartContent = styled.div`
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

  strong {
    color: ${({ theme }) => theme["zinc-400"]}
  }

`

export const GameName = styled.div`
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
`

export const Platform = styled.div`
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

export const RemoveGame = styled.button`
  border: none;
  background: none;

  svg {
    margin-right: 50px;
    color: ${({ theme }) => theme["zinc-400"]}
  }
`

export const Footer = styled.footer`
  padding-top: 10rem;
  max-width: 21rem;
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme["zinc-200"]};
    transition: filter 0.4s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`