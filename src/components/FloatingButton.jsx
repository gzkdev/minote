import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const FloatingLinkStyled = styled.div`
  --scale: 56px;
  position: fixed;
  right: 2rem;
  bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--scale);
  height: var(--scale);
  border-radius: 2rem;
  color: var(--color-110);
  background-color: var(--color-300);
  transition: background-color 200ms;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: var(--color-700);
  }

  & a {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;
  }
`;

const FloatingButton = () => {
  return (
    <FloatingLinkStyled>
      <Link to="/add-note" title="Add new note">
        <FaPlus />
      </Link>
    </FloatingLinkStyled>
  );
};

export default FloatingButton;
