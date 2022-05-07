import styled from "styled-components";

const NotesContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 64px 0;
  display: grid;
  gap: 2rem;

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default NotesContainer;
