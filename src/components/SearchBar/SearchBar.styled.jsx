import styled from "styled-components";

const SearchBarStyled = styled.div`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  min-height: 48px;
  padding: 0 1rem;
  background-color: var(--color-100);
  border: 1px solid var(--color-700);
  z-index: 900;
  border-radius: 4px;

  & input {
    flex-grow: 1;
  }

  & button {
    width: 40px;
    font-size: 1.25rem;
    margin-left: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 200ms, background-color 100ms;

    &:active {
      transform: scale(0.9);
      background-color: var(--color-off-white);
    }
  }
`;

export default SearchBarStyled;
