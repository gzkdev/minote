import styled from "styled-components";
import SettingsModal from "./SettingsModal";

const ModalStyled = styled.div`
  position: absolute;
  top: 4rem;
  left: 50%;
  width: min(100%, 480px);
  transform: translate(-50%, 0);
  min-height: 100%;
  background-color: var(--color-100);
  border-radius: 16px;
  padding: 1rem 1rem;
  box-shadow: 0 0 0 100vh rgba(0, 0, 0, 0.4);

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
