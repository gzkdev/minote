import styled from "styled-components";

const NoteFormStyled = styled.div`
  position: fixed;
  inset: 0;
  background-color: var(--color-100);
  overflow: hidden auto;
  z-index: 1000;

  & .wrapper {
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 0 2rem 0;

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
      height: auto;
      border: none;
      outline: none;
      font: inherit;
      background: none;
      color: inherit;
    }

    & .top {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;

      & button {
        width: 40px;
        font-weight: 600;
        transition: transform 200ms;
        border-radius: 50%;
        background-color: var(--color-120);
        cursor: pointer;

        &:nth-child(2) {
          background-color: var(--color-300);
          color: var(--color-100);
          padding: 0 1.5rem;
          width: fit-content;
          border-radius: 4px;
        }

        &:active {
          transform: scale(0.9);
        }
      }
    }
  }
`;

export default NoteFormStyled;
