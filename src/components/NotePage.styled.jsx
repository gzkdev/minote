import styled from "styled-components";

const NotePageStyled = styled.section`
  margin: 2rem 0;
  padding: 1rem 1rem;
  background-color: var(--color-100);
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

    & button {
      font-weight: 600;
      transition: transform 200ms;
      border-radius: 4px;
      cursor: pointer;

      &:nth-child(1) {
        border-radius: 50%;
        width: auto;
        position: relative;

        &::after {
          content: "";
          position: absolute;
          padding: 1rem 1rem;
          bottom: 10%;
        }
      }

      &:nth-child(2) {
        margin-left: auto;
        margin-right: 1rem;
        padding: 0 1rem;
      }

      &:nth-child(3) {
        background-color: var(--color-300);
        color: var(--color-100);
        padding: 0 2rem;
        transition: 200ms;

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
      padding: 1rem 0;
      height: auto;
    }

    & textarea {
      width: 100%;
      resize: none;
      flex-grow: 1;
      border: none;
      outline: none;
      font: inherit;
      margin: 1rem 0;
      background: none;
      color: inherit;
    }
  }
`;

export default NotePageStyled;
