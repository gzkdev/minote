import styled from "styled-components";

const NoteItemStyled = styled.div`
  padding: 1rem 1rem;
  min-height: 128px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-white);
  border-radius: 8px;
  border: 1px solid var(--color-off-white);
  cursor: pointer;
`;

export default NoteItemStyled;
