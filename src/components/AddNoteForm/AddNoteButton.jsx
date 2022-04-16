import styled from "styled-components";

const AddNoteButton = styled.button`
  position: fixed;
  bottom: 3rem;
  right: 2rem;
  height: 64px;
  width: 64px;
  background-color: hsl(var(--color-blue));
  color: var(--color-white);
  border-radius: 8px;
  cursor: pointer;

  @media (min-width: 760px) {
    right: 6rem;
  }
`;

export default AddNoteButton;
