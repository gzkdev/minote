import styled from "styled-components";

const NoteItemStyled = styled.div`
  background-color: var(--color-100);
  border-radius: 8px;

  & a {
    text-decoration: none;
    color: inherit;

    & > div {
      padding: 1rem 1rem;
      min-height: 128px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export default NoteItemStyled;
