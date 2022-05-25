import styled from "styled-components";

const SearchBarStyled = styled.div`
  --scale: 48px;
  --top: 2rem;
  position: sticky;
  top: var(--top);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-100);
  border: 1px solid var(--color-710);
  border-radius: 1.5rem;
  margin: 0 auto;
  z-index: 10;

  & .search__input {
    height: var(--scale);
    flex-grow: 1;
    /* max-width: 640px; */
    border-radius: inherit;
    padding-left: 1rem;

    &::placeholder {
      font-size: 1.2rem;
    }
  }

  & .search__button {
    height: var(--scale);
    width: var(--scale);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: inherit;
    transition: background-color 100ms;
    cursor: pointer;

    &:active {
      background-color: var(--color-120);
    }
  }

  @media (min-width: 1000px) {
    & .search__button {
      display: none;
    }

    .search__input {
      padding: 0 1.5rem;
    }
  }
`;

export default SearchBarStyled;
