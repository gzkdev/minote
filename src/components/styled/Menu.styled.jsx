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

  &[data-open="true"] {
    opacity: 1;
    pointer-events: all;

    & .container {
      -moz-transform: translate3d(0, 0, 0);
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  & .container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255);
    -moz-transform: translate3d(-100%, 0, 0);
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    transition: transform 300ms;

    li.active {
      color: red;
    }

    li a {
      color: inherit;
      text-decoration: none;
    }
  }
`;

export default MenuStyled;
