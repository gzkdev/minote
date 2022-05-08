import { useContext } from "react";
import styled from "styled-components";
import Toggle from "../Toggle";
import NotesContext from "../../NotesContext";

const SettingsModalStyled = styled.div`
  padding: 1rem 0;

  & h4 {
    font-size: var(--fs-1);
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }
`;

function SettingsModal() {
  const { setNotesArrangement } = useContext(NotesContext);
  return (
    <SettingsModalStyled>
      <h4>Settings</h4>
      <div>
        <span>Add new notes to top</span>{" "}
        <Toggle toggleFunction={setNotesArrangement} />
      </div>
      <div>
        <span>Switch to dark mode</span> <Toggle />
      </div>
    </SettingsModalStyled>
  );
}

export default SettingsModal;
