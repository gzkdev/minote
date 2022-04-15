import styled from "styled-components";

const NoteFormStyled = styled.div`
  position: fixed;
  inset: 0;
  background-color: var(--color0);
  z-index: 1000;
  overflow: hidden auto;

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
      color: var(--color6);
    }

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
        padding: 0 0.5rem;
        cursor: pointer;

        &:nth-child(2) {
          background-color: var(--color6);
          color: var(--color1);
          padding: 0 1rem;
        }

        &:active {
          transform: scale(0.9);
        }
      }
    }
  }
`;

export default NoteFormStyled;
