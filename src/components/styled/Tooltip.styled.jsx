import styled from "styled-components";

const ToolTipStyled = styled.div`
  position: absolute;
  top: 6rem;
  right: 0;
  width: min(70vw, 280px);
  background-color: var(--color-700);
  color: var(--color-110);
  border-radius: 8px;
  padding: 2rem 1rem;
  opacity: 0;
  pointer-events: none;
  transform: translate(0, 20%);
  transition: transform 400ms, opacity 200ms;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  z-index: -1;

  &[data-visible="true"] {
    opacity: 1;
    pointer-events: all;
    transform: translate(0, 0);
  }

  .tooltip__action {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default ToolTipStyled;
