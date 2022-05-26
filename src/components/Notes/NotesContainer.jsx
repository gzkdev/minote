import styled from "styled-components";

const NotesContainer = styled.div`
  --grid-min-width: 240px;
  --grid-gap: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--grid-min-width), 1fr));
  gap: var(--grid-gap);
  padding: 4rem 0;
  margin: 0 auto;

  @media (min-width: 768px) {
    --grid-min-width: 300px;
    --grid-gap: 3rem;
  }
`;

export default NotesContainer;
