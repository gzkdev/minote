import styled from "styled-components";

const NoteFormStyled = styled.div`
  & .wrapper {
    width: 100%;
    min-height: 80vh;
    display: flex;
    border-radius: 8px;
    flex-direction: column;

    & input {
      width: 100%;
      font-size: var(--fs-1);
      font-weight: 600;
      padding: 1rem;
      height: auto;
      background-color: var(--color-100);
      margin: 2rem 0 0.2rem;
      border-radius: 4px;
    }

    & textarea {
      padding: 1rem 1rem;
      border-radius: 4px;
      width: 100%;
      font: inherit;
      background: none;
      color: inherit;
      resize: none;
      flex-grow: 1;
      height: auto;
      border: none;
      outline: none;
      background-color: var(--color-100);
    }

    & .top {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* padding: 1rem 0; */

      & a {
        color: inherit;
        text-decoration: none;
        font-weight: bold;
      }

      & button {
        width: 40px;
        font-weight: 600;
        transition: transform 200ms, background-color 200ms;
        border-radius: 50%;
        cursor: pointer;

        &:nth-child(2) {
          background-color: var(--color-300);
          color: var(--color-100);
          padding: 0 2rem;
          width: fit-content;
          border-radius: 4px;

          &:hover {
            background-color: var(--color-400);
          }
        }

        &:active {
          transform: scale(0.95);
        }
      }
    }
  }
`;

export default NoteFormStyled;
