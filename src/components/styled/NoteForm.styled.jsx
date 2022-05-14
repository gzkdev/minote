import styled from "styled-components";

const NoteFormStyled = styled.div`
  --width: 100%;
  --padding-block: 1rem;

  .note-form__top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--color-100);
    border-bottom: 1px solid var(--color-110);
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
    padding: var(--padding-block) 1rem;
  }

  .note-form__container--top a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
  }

  .note-form__btn {
    font-weight: 600;
    background-color: var(--color-120);
    padding: 0 2rem;
    border-radius: 4px;
    cursor: pointer;
  }

  .note-form__body {
    background-color: var(--color-100);
    padding-top: calc(var(--padding-block) * 6);
  }

  .note-form__container--body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .note-form__input,
  .note-form__text {
    width: 100%;
    font-family: inherit;
  }

  .note-form__input {
    height: auto;
    font-size: 2rem;
    font-weight: 600;
    padding: var(--padding-block) 0;
  }

  .note-form__text {
    background: none;
    color: inherit;
    resize: none;
    flex-grow: 1;
    border: none;
    outline: none;
  }

  @media (min-width: 600px) {
    --padding-block: 1.5rem;
    --width: 80%;
  }
`;

export default NoteFormStyled;
