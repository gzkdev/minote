import styled from "styled-components";

const NotesContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 128px 0;
  display: grid;
  gap: 1rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default NotesContainer;
