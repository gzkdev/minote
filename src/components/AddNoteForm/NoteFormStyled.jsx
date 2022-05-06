import styled from "styled-components";

const NoteFormStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden auto;
  transition: 0ms !important;
  z-index: 1000;

  & .wrapper {
    width: min(90vw, 560px);
    height: min(80vh, 400px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    border-radius: 8px;
    flex-direction: column;
    padding: 1rem 1.5rem;
    background-color: var(--color-100);

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
