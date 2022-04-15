import styled from "styled-components";

const NotesContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 128px 0;
  display: grid;
  gap: 1rem;

  @media (min-width: 360px) {
    grid-template-columns: ${(props) =>
      props.layoutType ? "repeat(2, 1fr)" : "1fr"};
  }

  @media (min-width: 7680px) {
    grid-template-columns: ${(props) =>
      props.layoutType ? "repeat(3, 1fr)" : "repeat(2, 1fr)"};
  }
`;

export default NotesContainer;
