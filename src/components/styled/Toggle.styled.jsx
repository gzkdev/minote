import styled from "styled-components";

const ToggleStyled = styled.div`
  --scale: 1.4rem;
  position: relative;
  width: calc(var(--scale) * 2.6);
  height: var(--scale);
  background-color: var(--color-800);
  padding: 1px 2px;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 24px;
  cursor: pointer;

  &::before {
    content: "";
    width: calc(var(--scale) * 1.6);
    height: calc(var(--scale) * 1.6);
    background-color: var(--color-500);
    border-radius: 50%;
    transition: transform 200ms;
    position: absolute;
    left: -4%;
  }

  &[data-toggle="dark"] {
    background-color: var(--color-200);

    &::before {
      -moz-transform: translate3d(calc(70%), 0, 0);
      -webkit-transform: translate3d(calc(70%), 0, 0);
      transform: translate3d(calc(70%), 0, 0);
    }
  }
`;

export default ToggleStyled;
