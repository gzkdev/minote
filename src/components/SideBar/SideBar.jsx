import styled from "styled-components";
import { useContext } from "react";
import NotesContext from "../../NotesContext";
import LineIcon from "react-lineicons";

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
    width: min(320px, 70vw);
    height: 100%;
    background-color: var(--color-100);
    transform: translate(-100%, 0);
    transition: transform 400ms;
    padding: 4rem 0;

    & .sideBar__title {
      padding-left: 2rem;
      margin-bottom: 2rem;
      font-size: var(--fs-1);
    }

    & .sideBar__btn {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 2rem 2rem;
      font-weight: bold;
      border: none;
      outline: none;
      cursor: pointer;

      &:hover,
      &:active {
        background: var(--color-120);
      }
    }

    & a.sideBar__btn {
      text-decoration: none;
      color: inherit;
      padding: 1.5rem 2rem;
    }
  }

  @media (min-width: 768px) {
    position: static;
    height: 100vh;
    opacity: 1;
    max-width: 320px;
    background: none !important;
    pointer-events: all;

    & .sideBar__box {
      width: 100%;
      transform: translate(0, 0);
    }
  }
`;

export default function SideBar() {
  const { isActive, toggleisActive } = useContext(NotesContext);
  return (
    <SideBarStyled data-toggle={isActive && isActive} onClick={toggleisActive}>
      <div className="sideBar__box">
        <h3 className="sideBar__title">minotes</h3>
        <button className="sideBar__btn">
          <LineIcon name="pencil" />
          &nbsp;&nbsp;Notes
        </button>
        <button className="sideBar__btn">
          <LineIcon name="archive" />
          &nbsp;&nbsp;Categories
        </button>
        <button className="sideBar__btn">
          <LineIcon name="trash-can" />
          &nbsp;&nbsp;Trash
        </button>
        <button className="sideBar__btn">
          <LineIcon name="cog" />
          &nbsp;&nbsp;Settings
        </button>
        <a
          className="sideBar__btn"
          href="https://github.com/gzkdev/minotes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LineIcon name="link" />
          &nbsp;&nbsp;View Source code
        </a>
      </div>
    </SideBarStyled>
  );
}
