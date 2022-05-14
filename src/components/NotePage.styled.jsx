import styled from "styled-components";

const NotePageStyled = styled.div`
  --width: 100%;
  --padding-block: 1rem;
  .note__top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--color-100);
    border-bottom: 1px solid var(--color-110);
  }

  .note__top__container {
    padding: var(--padding-block) 1rem;
    width: min(var(--width), 800px);
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
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
    padding: calc(var(--padding-block) * 4) 1rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .note__body__input,
  .note__body__text {
    width: 100%;
    font-family: inherit;
    background: inherit;
  }

  .note__body__input {
    font-size: var(--fs-1);
    font-weight: 600;
    height: auto;
    padding: var(--padding-block) 0;
  }

  .note__body__text {
    resize: none;
    flex-grow: 1;
    border: none;
    outline: none;
    font-size: inherit;
    color: inherit;
  }

  @media (min-width: 600px) {
    --padding-block: 1.5rem;
    --width: 80%;
  }
`;

export default NotePageStyled;
