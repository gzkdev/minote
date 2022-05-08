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
      font-size: var(--fs-0);
      font-weight: 600;
      height: auto;
      background-color: var(--color-100);
      padding: 1.5rem 1rem;
      margin-top: 2rem;
      border-radius: 16px 16px 0 0;
      border-bottom: 1px solid var(--color-110);
    }

    & textarea {
      padding: 1rem 1rem;
      border-radius: 0 0 16px 16px;
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

      & a {
        color: inherit;
        text-decoration: none;
        font-weight: bold;
      }

      & button {
        width: 40px;
        font-weight: 600;
        transition: transform 200ms, background-color 200ms;
        cursor: pointer;

        &:nth-child(2) {
          background-color: var(--color-300);
          color: var(--color-100);
          padding: 0 2rem;
          width: fit-content;
          border-radius: 64px;

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
