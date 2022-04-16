import styled from "styled-components";

import EmptyStateImage from "../assets/images/empty-state.svg";

const EmptyStateStyled = styled.div`
  max-width: 90%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;

  & img {
    display: block;
    width: 164px;
    height: 164px;
    margin-bottom: 2rem;
    object-fit: contain;
    pointer-events: none;
  }
`;

function EmptyState() {
  return (
    <EmptyStateStyled>
      <img src={EmptyStateImage} alt="No notes created yet" />
      <div>No notes yet. Tap the button below to create note</div>
    </EmptyStateStyled>
  );
}

export default EmptyState;
