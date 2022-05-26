import styled from "styled-components";

const NotificationStyled = styled.div`
  position: fixed;
  top: 1rem;
  left: 50%;
  width: min(80%, 200px);
  padding: 2rem 1rem;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, 0);
  border-radius: 1rem;
  transition: transform 400ms cubic-bezier(0.175, 0.885, 0.32, 1);
  transform-origin: center center;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.08);
  z-index: 120;

  &[data-visible="false"] {
    -webkit-transform: translate3d(-50%, -200%, 0);
    -moz-transform: translate3d(-50%, -200%, 0);
    transform: translate3d(-50%, -200%, 0);
  }

  &[data-visible="true"] {
    -webkit-transform: translate3d(-50%, 0, 0);
    -moz-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }

  &[data-type="added"] {
    background-color: hsl(120, 73%, 95%);
    border: 1px solid hsl(120, 73%, 75%);
  }

  &[data-type="favorite"] {
    background-color: hsl(34, 78%, 92%);
    border: 1px solid hsl(34, 78%, 72%);
  }

  &[data-type="deleted"] {
    background-color: hsl(0, 100%, 95%);
    border: 1px solid hsl(0, 100%, 75%);
  }

  & span {
    margin-left: 0.8rem;
  }
`;

export default NotificationStyled;
