import styled from "styled-components";
import { useContext } from "react";
import NotesContext from "../../NotesContext";

const SideBarStyled = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  opacity: 0;
  transition: opacity 200ms;
  pointer-events: none;

  &[data-toggle="true"] {
    opacity: 1;
    pointer-events: all;

    .sideBar__box {
      transform: translate(0, 0);
    }
  }

  .sideBar__box {
    width: 80%;
    max-width: 400px;
    height: 100%;
    background-color: #fff;
    transform: translate(-100%, 0);
    transition: transform 400ms;
    transition-delay: 800ms;
    padding: 4rem 2rem;

    & .sideBar__btn {
      display: block;
      width: 100%;
      text-align: start;
      margin-bottom: 2rem;
      padding-left: 1rem;
      font-weight: bold;
      border: none;
      outline: none;
    }
  }

  @media (min-width: 768px) {
    position: static;
    height: 100vh;
    opacity: 1;
    max-width: 320px;
    background-color: none;
  }

  .sideBar__box {
    width: 100%;
    transform: translate(0, 0);
  }
`;

export default function SideBar() {
  const { isActive, toggleisActive } = useContext(NotesContext);
  return (
    <SideBarStyled data-toggle={isActive && isActive} onClick={toggleisActive}>
      <div className="sideBar__box">
        <button className="sideBar__btn">Notes</button>
        <button className="sideBar__btn">Categories</button>
        <button className="sideBar__btn">Trash</button>
        <button className="sideBar__btn">Settings</button>
        <a
          className="sideBar__btn"
          href="https://github.com/gzkdev/minotes"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source code
        </a>
      </div>
    </SideBarStyled>
  );
}
