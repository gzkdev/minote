import styled from "styled-components";

const SearchBarStyled = styled.div`
  position: sticky;
  top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  background-color: var(--color-100);
  border-radius: 8px;
  z-index: 900;

  & input {
    min-height: 48px;
    flex-grow: 1;
    border-radius: inherit;
  }

  & button {
    width: 40px;
    font-size: var(--fs--1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: var(--color-710);
    cursor: pointer;
    transition: background-color 100ms;

    &:active {
      background-color: var(--color-110);
    }
  }

  @media (min-width: 768px) {
    background: none;
    padding: 0;

    button:nth-child(1) {
      display: none;
    }

    button:nth-child(3) {
      height: 100%;
      aspect-ratio: 1/1;
      background-color: var(--color-100);
      border-radius: 8px;
    }

    & input {
      background-color: var(--color-100);
      padding: 0 1rem;
      max-width: 800px;
    }
  }
`;

export default SearchBarStyled;
