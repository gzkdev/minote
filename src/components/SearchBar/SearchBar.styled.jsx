import styled from "styled-components";

const SearchBarStyled = styled.div`
  --scale: 48px;
  position: sticky;
  top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-100);
  border-radius: 8px;
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
      background-color: var(--color-110);
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
    --scale: 56px;
    background: none;
  }
`;

export default SearchBarStyled;
