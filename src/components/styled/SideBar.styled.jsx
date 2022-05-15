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

    .menu__container {
      transform: translate(-50%, 0);
    }
  }

  .menu__container {
    width: min(90%, 480px);
    background-color: var(--color-100);
    transform: translate(-50%, 100%);
    transition: transform 400ms;
    padding: 2rem 1rem 4rem;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    border-radius: 8px;

    &::after {
      position: absolute;
      content: "";
      width: 30%;
      left: 50%;
      transform: translate(-50%, 0);
      height: 4px;
      top: 1rem;
      background-color: var(--color-800);
    }
  }

  .menu__item {
    list-style: none;
    transition: background-color 200ms;
    border-radius: 8px;

    &:hover {
      background-color: var(--color-120);
    }
  }

  .menu__link {
    align-items: center;
    text-decoration: none;
    color: inherit;
    display: flex;
    padding: 1.5rem 1rem;
    outline: none;

    span {
      margin-left: 1rem;
    }
  }

  .tooltip__action {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    padding: 1rem 1rem;

    .description {
      display: flex;
      align-items: center;

      span {
        margin-left: 1rem;
      }
    }

    small {
      opacity: 0.7;
    }
  }
`;

export default SideBarStyled;
