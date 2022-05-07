import styled from "styled-components";

const NoteFormStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden auto;
  transition: 0ms !important;
  z-index: 1000;

  & .wrapper {
    width: 95%;
    height: 95%;
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
      font-size: var(--fs-1);
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
        cursor: pointer;

        &:active {
          transform: scale(0.95);
        }

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

  @media (min-width: 768px) {
    & .wrapper {
      width: 640px;
      height: 480px;
    }
  }
`;

export default NoteFormStyled;
