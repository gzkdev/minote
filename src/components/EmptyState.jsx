import EmptyStateImage from "../assets/images/empty-state.svg";
import { EmptyStateStyled } from "./styled";

function EmptyState() {
  return (
    <EmptyStateStyled>
      <img src={EmptyStateImage} alt="No notes created yet" />
      <div className="title">Empty notes</div>
      <div>Tap the button below to create note</div>
    </EmptyStateStyled>
  );
}

export default EmptyState;
