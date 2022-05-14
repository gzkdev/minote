import { Link } from "react-router-dom";
import EmptyStateImage from "../assets/images/empty-state.svg";
import { EmptyStateStyled } from "./styled";

function EmptyState() {
  return (
    <EmptyStateStyled>
      <img src={EmptyStateImage} alt="No notes created yet" />
      <h3>Empty notes</h3>
      <div>Tap the button below to create note</div>
      <Link to="add_note">Add new note</Link>
    </EmptyStateStyled>
  );
}

export default EmptyState;
