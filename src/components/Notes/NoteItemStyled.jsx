import styled from "styled-components";

const NoteItemStyled = styled.div`
  --background: var(--note-color-03);
  background-color: var(--background);
  padding: 1.5rem 1.5rem 3rem;
  border-radius: 2rem;
  height: fit-content;
  min-height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:nth-child(2n) {
    --background: var(--note-color-02);
  }

  &:nth-child(3n) {
    --background: var(--note-color-01);
  }

  .note__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .note__title {
    display: block;
    font-size: 1.8rem;
    margin-right: 4rem;
  }

  .note__content {
    margin: 1rem 0 1.5rem;
  }

  .note__actions {
    position: relative;
  }

  .note__actions > button {
    min-height: 2rem;
  }

  .note__actions:focus-within .note__actions_menu {
    -moz-transform: scale(1) translate3d(0, 0, 0);
    -webkit-transform: scale(1) translate3d(0, 0, 0);
    transform: scale(1) translate3d(0, 0, 0);
    opacity: 1;
    pointer-events: all;
  }

  .note__actions_menu {
    right: 0;
    display: flex;
    position: absolute;
    width: max-content;
    background-color: #fff;
    flex-direction: column;
    border-radius: 1rem;
    -moz-transform: translate3d(0, 20%, 0);
    -webkit-transform: translate3d(0, 20%, 0);
    transform: translate3d(0, 20%, 0);
    transition: transform 200ms, opacity 100ms;
    opacity: 0;
    overflow: hidden;
    pointer-events: none;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  }

  .note__actions_menu > button {
    width: 100%;
    text-align: start;
    padding: 0.5rem 16px;
  }

  .note__actions_menu > button:hover,
  .note__actions_menu > button:active {
    opacity: 0.8;
  }

  .note__actions_menu > button:not(:last-child) {
    border-bottom: 1px solid var(--color-110);
  }

  .note__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .note__edit_btn {
    --scale: 32px;
    width: var(--scale);
    height: var(--scale);
    font-size: 1.2rem;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 50%;
    transition: transform 200ms;

    &:hover {
      -moz-transform: scale(0.9);
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
`;

export default NoteItemStyled;
