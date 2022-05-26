import styled from "styled-components";

const NoteFormStyled = styled.div`
  --width: 100%;
  --padding-block: 1rem;
  width: min(var(--width), 640px);
  border-radius: 0.5rem;
  background-color: var(--color-100);
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;

  .form__top {
    width: 100%;
    border-bottom: 1px solid var(--color-110);
  }

  .form__container {
    margin: 0 auto;
    padding: var(--padding-block);
  }

  .menu__box {
    display: flex;
    align-items: center;
  }

  .menu__button,
  .menu__button + a {
    display: inline-block;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
  }

  .menu__button {
    cursor: pointer;
    transition: background-color 200ms, transform 200ms;
    &:active {
      background-color: var(--color-800);
      transform: scale(0.9);
    }
  }

  .form__container--top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .form__container--top a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
  }

  .form__btn {
    font-weight: 600;
    background-color: var(--color-200);
    color: var(--color-110);
    padding: 0 2rem;
    border-radius: 1rem;
    cursor: pointer;
    transition: background-color 200ms, transform 200ms;

    &:hover {
      background-color: var(--color-300);
    }
    &:active {
      transform: scale(0.9);
    }
  }

  .form__container--body {
    display: flex;
    flex-direction: column;
    min-height: 80vh;
  }

  .form__input {
    height: auto;
    font-size: 2rem;
    padding: var(--padding-block) 0;
  }

  .form__text {
    resize: none;
    flex-grow: 1;
    border: none;
    outline: none;
    padding: calc(var(--padding-block) / 2) 0;
  }

  @media (min-width: 600px) {
    --padding-block: 1.5rem;
    --width: 80%;
    position: static;
  }

  @media (min-width: 1000px) {
    .menu__button:nth-child(1) {
      display: none;
    }
  }
`;

export default NoteFormStyled;
