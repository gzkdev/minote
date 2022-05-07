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
      transform: translate(0, 0);
    }
  }

  .sideBar__container {
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

    & li {
      list-style: none;
    }

    & a {
      list-style: none;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: inherit;
      font-weight: bold;
      color: var(--color-710);
      padding: 1.5rem 2rem;
      border: none;
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

  @media (min-width: 768px) {
    position: sticky;
    top: 0;
    height: 100vh;
    opacity: 1;
    max-width: 320px;
    background: none !important;
    pointer-events: all;

    & .sideBar__container {
      width: 100%;
      transform: translate(0, 0);
    }
  }
`;

export default SideBarStyled;
