import styled from "styled-components";

const AddNoteButton = styled.button`
  position: fixed;
  bottom: 3rem;
  right: 2rem;
  height: 64px;
  width: 64px;
  background-color: var(--color6);
  color: var(--color1);
  border-radius: 200px;
  cursor: pointer;

  @media (min-width: 760px) {
    right: 6rem;
  }
`;

export default AddNoteButton;
