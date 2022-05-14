import styled from "styled-components";

const NoteFormStyled = styled.div`
  --width: 100%;

  .note-form__top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    border-radius: 8px;
    flex-direction: column;
    background-color: var(--color-100);
  }

  .note-form__container {
    width: min(var(--width), 800px);
    margin: 0 auto;
    padding: 1rem 1rem;
  }

  .note-form__container--top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .note-form__container--top a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
  }

  .note-form__btn {
    font-weight: 600;
    background-color: var(--color-300);
    color: var(--color-110);
    padding: 0 1rem;
    border-radius: 4px;
    cursor: pointer;
  }

  .note-form__body {
    background-color: var(--color-100);
  }

  .note-form__container--body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 4rem 0 8rem 0;
  }

  .note-form__input,
  .note-form__text {
    width: 100%;
    font-family: inherit;
  }

  .note-form__input {
    height: auto;
    font-size: var(--fs-0);
    font-weight: 600;
    padding: 2rem 1rem;
    border-bottom: 1px solid var(--color-110);
  }

  .note-form__text {
    padding: 1rem 1rem;
    background: none;
    color: inherit;
    resize: none;
    flex-grow: 1;
    border: none;
    outline: none;
  }
`;

export default NoteFormStyled;
