import styled from "styled-components";

const NoteItemStyled = styled.div`
  background-color: var(--color-100);
  border-radius: 8px;

  & > div {
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;

      & button {
        cursor: pointer;
        transition: 200ms;

        &:nth-child(2) {
          background-color: var(--color-120);
          border: 1px solid var(--color-300);
          color: var(--color-300);
          padding: 0 2rem;
          border-radius: 64px;
          transition: transform 400ms;

          &:hover,
          &:active {
            transform: scale(0.95);
          }
        }
      }
    }

    & p {
      margin: 0.5rem 0 1rem;
    }
  }

  & a {
    text-decoration: none;
    color: inherit;

    & > div {
      padding: 1rem 1rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & p {
        margin: 0.5rem 0 1rem;
      }
    }
  }
`;

export default NoteItemStyled;
