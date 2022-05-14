import { useContext } from "react";
import Toggle from "../Toggle";
import NotesContext from "../../NotesContext";
import ToolTipStyled from "../styled/Tooltip.styled";
import { FaSun, FaLayerGroup } from "react-icons/fa";

function SettingsToolTip({ state, stateFunction }) {
  const { setNotesArrangement } = useContext(NotesContext);
  const handleCloseModal = () => {
    stateFunction((state) => !state);
  };

  return (
    <ToolTipStyled data-visible={state && state} onClick={handleCloseModal}>
      <div className="tooltip__action">
        <div className="description">
          <FaSun /> <span>Toggle Dark mode</span>
        </div>
        <small>unavailable</small>
      </div>

      <div className="tooltip__action">
        <div className="description">
          <FaLayerGroup /> <span>New notes to the top</span>
        </div>
        <Toggle toggleFunction={setNotesArrangement} />
      </div>
    </ToolTipStyled>
  );
}

export default SettingsToolTip;
