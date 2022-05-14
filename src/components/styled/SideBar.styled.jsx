import styled from "styled-components";

const SideBarStyled = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 200ms;
  pointer-events: none;
  z-index: 1000;

  &[data-toggle="true"] {
    opacity: 1;
    pointer-events: all;

    .sideBar__container {
      transform: translate(-50%, 0);
    }
  }

  .sideBar__container {
    width: min(90%, 480px);
    background-color: var(--color-100);
    transform: translate(-50%, 100%);
    transition: transform 400ms;
    padding: 2rem 0;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    border-radius: 8px;

    & .sideBar__title {
      padding-left: 2rem;
      margin-bottom: 2rem;
      font-size: var(--fs-1);
    }

    & li {
      list-style: none;
    }

    & a {
      list-style: none;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: var(--color-710);
      padding: 1.5rem 2rem;
      outline: none;
      cursor: pointer;

      &:hover,
      &:active {
        color: var(--color-300);
        transition: 200ms;
      }

      & span {
        margin-left: 1rem;
      }
    }
  }
`;

export default SideBarStyled;
