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
  border: 1px solid var(--color-800);
  z-index: 900;
  border-radius: 40px;

  & > span {
    display: inline-block;
    flex-grow: 1;
    font-weight: bold;
    text-transform: capitalize;
  }

  & > div:nth-child(1) {
    position: relative;
    flex-grow: 1;
    display: flex;
    align-items: center;

    & input {
      width: 100%;
      outline: none;
      border: none;
      padding-left: 1.2rem;
    }

    & label {
      position: absolute;
      left: 0;
      top: 30%;
    }
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
`;

export default SearchBarStyled;
