import styled from "styled-components";

const NotePageStyled = styled.section`
  --width: 100%;
  padding: 0 0 0 0;
  .note__top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--color-100);
    box-shadow: 0 24px 24px rgba(0, 0, 0, 0.04);
  }

  .note__top__container {
    padding: 1rem 1rem;
    width: min(var(--width), 800px);
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
  }

  .note__btn {
    font-weight: 600;
    cursor: pointer;
  }

  .note__btn--delete {
    margin-left: auto;
  }

  .note__btn--save {
    background-color: var(--color-300);
    color: var(--color-100);
    font-weight: 600;
    padding: 0 1rem;
    transition: 200ms;
    border-radius: 4px;
    margin-left: 2rem;
  }

  .note__body {
    width: 100%;
    background-color: var(--color-100);
  }

  .note__body__container {
    min-height: 90vh;
    width: min(var(--width), 800px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .note__body__input {
    width: 100%;
    font-size: var(--fs-1);
    font-weight: 600;
    height: auto;
    padding: 1.5rem 1rem;
    border-bottom: 1px solid var(--color-110);
  }

  .note__body__text {
    width: 100%;
    resize: none;
    flex-grow: 1;
    border: none;
    outline: none;
    background-color: var(--color-100);
    padding: 1rem 1rem;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    border-radius: 0 0 16px 16px;
  }

  @media (min-width: 600px) {
    --width: 80%;
  }
`;

export default NotePageStyled;
