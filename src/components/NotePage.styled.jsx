import styled from "styled-components";

const NotePageStyled = styled.section`
  margin: 2rem 0;
  padding: 1rem 1rem;
  border-radius: 8px;
  min-height: 90vh;
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
      transition: transform 200ms;
      cursor: pointer;

      &:nth-child(2) {
        margin-left: auto;
      }

      &:nth-child(3) {
        background-color: var(--color-300);
        color: var(--color-100);
        font-weight: 600;
        padding: 0 2rem;
        transition: 200ms;
        border-radius: 64px;
        margin-left: 2rem;

        &:hover {
          background-color: var(--color-700);
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
      font-size: var(--fs-1);
      font-weight: 600;
      height: auto;
      padding: 1.5rem 1rem;
      margin-top: 2rem;
      background-color: var(--color-100);
      border-bottom: 1px solid var(--color-110);
      border-radius: 16px 16px 0 0;
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
      border-radius: 0 0 16px 16px;
    }
  }
`;

export default NotePageStyled;
