import { useRef } from "react";
import styled from "styled-components";
import SettingsModal from "./SettingsModal";

const ModalStyled = styled.div`
  position: absolute;
  top: 4rem;
  right: 1rem;
  width: min(70vw, 280px);
  min-height: 100px;
  background-color: var(--color-710);
  color: var(--color-110);
  border-radius: 8px;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.12);
  padding: 1rem 1rem;
  opacity: 0;
  pointer-events: none;
  transform: translate(0, 20%);
  transition: transform 400ms, opacity 200ms;
  z-index: -1;

  &[data-visible="true"] {
    opacity: 1;
    pointer-events: all;
    transform: translate(0, 0);
  }
`;

export default function Modal({ state, stateFunction }) {
  const modal = useRef();
  const handleCloseModal = () => {
    stateFunction((state) => !state);
  };
  return (
    <ModalStyled
      data-visible={state && state}
      ref={modal}
      onClick={handleCloseModal}
    >
      <SettingsModal />
    </ModalStyled>
  );
}
