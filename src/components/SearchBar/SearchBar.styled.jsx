import styled from "styled-components";

const SearchBarStyled = styled.div`
  --scale: 48px;
  --top: 2rem;
  --border-radius: 8px;
  --width: 90%;
  position: sticky;
  top: var(--top);
  display: flex;
  width: var(--width);
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-100);
  border-radius: var(--border-radius);
  margin: 0 auto;
  z-index: 900;

  & .search-bar__input {
    height: var(--scale);
    flex-grow: 1;
    max-width: 640px;
    border-radius: inherit;
  }

  & .search-bar__btn {
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

  @media (min-width: 768px) {
    & .search-bar__btn--menu {
      display: none;
    }

    & .search-bar__input {
      background-color: var(--color-100);
      padding: 0 1rem;
      margin-right: 1rem;
    }
  }

  @media (min-width: 1000px) {
    background: none;
  }
`;

export default SearchBarStyled;
