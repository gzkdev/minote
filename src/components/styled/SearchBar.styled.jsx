import styled from "styled-components";

const SearchBarStyled = styled.div`
  --scale: 48px;
  --top: 2rem;
  --border-radius: 8px;
  --width: 90%;
  position: sticky;
  top: var(--top);
  width: min(var(--width), 640px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-100);
  border-radius: calc(var(--border-radius) * 1);
  margin: 0 auto;
  z-index: 10;

  & .search__input {
    height: var(--scale);
    flex-grow: 1;
    max-width: 640px;
    border-radius: inherit;
    padding-left: 1rem;

    &::placeholder {
      font-size: 1.2rem;
    }
  }

  & .search__button {
    height: var(--scale);
    width: var(--scale);
    font-size: var(--fs--1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: inherit;
    color: var(--color-710);
    transition: background-color 100ms;
    cursor: pointer;

    &:active {
      background-color: var(--color-120);
    }
  }
`;

export default SearchBarStyled;
