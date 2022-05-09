import { useContext } from "react";
import styled from "styled-components";
import Toggle from "../Toggle";
import NotesContext from "../../NotesContext";

const SettingsModalStyled = styled.div`
  padding: 1rem 0;

  & h5 {
    font-size: var(--fs-0);
    margin-bottom: 1rem;
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-between;

    &:nth-child(3) {
      margin-top: 1rem;
    }
  }
`;

function SettingsModal() {
  const { setNotesArrangement } = useContext(NotesContext);
  return (
    <SettingsModalStyled>
      <h5>Settings</h5>
      <div>
        <span>Add new notes to top</span>{" "}
        <Toggle toggleFunction={setNotesArrangement} />
      </div>
    </SettingsModalStyled>
  );
}

export default SettingsModal;
