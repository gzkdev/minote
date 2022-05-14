import { useContext } from "react";
import Toggle from "../Toggle";
import NotesContext from "../../NotesContext";
import ToolTipStyled from "../styled/Tooltip.styled";

function SettingsToolTip({ state, stateFunction }) {
  const { setNotesArrangement } = useContext(NotesContext);
  const handleCloseModal = () => {
    stateFunction((state) => !state);
  };

  return (
    <ToolTipStyled data-visible={state && state} onClick={handleCloseModal}>
      <div className="tooltip__action">
        <span>Add new notes to top</span>{" "}
        <Toggle toggleFunction={setNotesArrangement} />
      </div>
    </ToolTipStyled>
  );
}

export default SettingsToolTip;
