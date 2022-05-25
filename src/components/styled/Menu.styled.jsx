import styled from "styled-components";

const MenuStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  pointer-events: none;
  transition: opacity 400ms;
  z-index: 99;

  &[data-open="true"] {
    opacity: 1;
    pointer-events: all;

    & .menu__container {
      -moz-transform: translate3d(0, 0, 0);
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  & .menu__container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: min(80%, 480px);
    padding: 4rem 1rem;
    background-color: rgba(255, 255, 255);
    -moz-transform: translate3d(-100%, 0, 0);
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    transition: transform 300ms;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .icon {
      display: inline-block;
      margin-right: 1rem;
    }

    nav {
      flex: 1;
    }

    li {
      list-style: none;

      & a {
        color: inherit;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.4rem 1.5rem;
        border-radius: 1rem;

        & > span {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .number {
          font-size: 1.2rem;
          background-color: var(--color-800);
          padding: 0.2rem 0.8rem;
          border-radius: 2rem;
        }
      }

      &.active {
        & a {
          color: var(--color-100);
          background-color: var(--color-200);

          & .number {
            background-color: var(--color-120);
            color: var(--color-200);
          }
        }
      }
    }
  }

  .menu__title {
    display: block;
    font-weight: 600;
    font-size: 1.8rem;
    padding: 0 1.5rem 2rem 1.5rem;
  }

  .menu__footer {
    padding: 0 1.5rem;
    margin-top: auto;

    .setting {
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;
    }
  }

  @media (min-width: 1000px) {
    position: static;
    height: 100vh;
    background-color: none;
    pointer-events: all;
    opacity: 1;

    & .menu__container {
      position: static;
      width: 100%;
      -moz-transform: translate3d(0, 0, 0);
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
`;

export default MenuStyled;
