import styled from "styled-components";

const SearchBarStyled = styled.div`
  position: sticky;
  top: 2rem;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 48px;
  padding: 0 1rem;
  background-color: var(--color-100);
  border: 1px solid var(--color-710);
  z-index: 900;
  border-radius: 40px;

  & input {
    flex-grow: 1;
  }

  & button {
    width: 40px;
    font-size: var(--fs--1);
    margin-left: 1rem;
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
`;

export default SearchBarStyled;
