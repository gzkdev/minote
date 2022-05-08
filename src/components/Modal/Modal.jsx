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

  & > button {
    position: absolute;
    width: fit-content;
    top: 1.5rem;
    right: 1rem;
    font-size: var(--fs--2);
    margin-left: auto;
    padding: 0 1rem;
    font-weight: 600;

    & span {
      margin-right: 0.5rem;
    }
  }
`;

export default function Modal({ state, stateFunction }) {
  return (
    <>
      {state && (
        <ModalStyled>
          <button onClick={() => stateFunction(!state)}>Close</button>
          <SettingsModal />
        </ModalStyled>
      )}
    </>
  );
}
