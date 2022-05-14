import styled from "styled-components";

const NotesContainer = styled.div`
  --grid-min-width: 240px;
  width: min(100%, 800px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--grid-min-width), 1fr));
  gap: 1rem;
  padding: 2rem 1rem 8rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    --grid-min-width: 300px;
  }
`;

export default NotesContainer;
