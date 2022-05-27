import { UseNotesContext } from "../../NotesContext";
import { ToggleStyled } from "../styled";

export default function Toggle() {
  const { toggleTheme, theme } = UseNotesContext();

  const handleOnclick = (e) => {
    e.stopPropagation();
    toggleTheme();
  };
  return <ToggleStyled onClick={handleOnclick} data-toggle={theme} />;
}
