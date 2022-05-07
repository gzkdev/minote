import styled from "styled-components";

const NoteItemStyled = styled.div`
  background-color: var(--color-100);
  border-radius: 8px;

  & > div {
    padding: 1rem 1rem;
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
