import styled from "styled-components";

const NotesContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default NotesContainer;
