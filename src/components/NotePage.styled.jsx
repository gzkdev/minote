import styled from "styled-components";

const NotePageStyled = styled.section`
  margin: 2rem 0;
  padding: 1rem 1rem;
  border-radius: 8px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;

  & .top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;

    & a {
      text-decoration: none;
      color: inherit;
      font-weight: bold;
    }

    & button {
      font-weight: 600;
      transition: transform 200ms;
      cursor: pointer;

      &:nth-child(2) {
        margin-left: auto;
      }

      &:nth-child(3) {
        background-color: var(--color-300);
        color: var(--color-100);
        padding: 0 2rem;
        transition: 200ms;
        border-radius: 4px;
        margin-left: 2rem;

        &:hover {
          background-color: var(--color-400);
        }
      }

      &:active {
        transform: scale(0.9);
      }
    }
  }

  & .body {
    flex: 1;
    display: flex;
    flex-direction: column;

    & input {
      width: 100%;
      font-size: 1.5rem;
      font-weight: 600;
      padding: 1rem 1rem;
      margin: 1rem 0 0.2rem;
      height: auto;
      background-color: var(--color-100);
      border-radius: 4px;
    }

    & textarea {
      width: 100%;
      resize: none;
      flex-grow: 1;
      border: none;
      outline: none;
      background-color: var(--color-100);
      padding: 1rem 1rem;
      font: inherit;
      color: inherit;
      border-radius: 4px;
    }
  }
`;

export default NotePageStyled;
