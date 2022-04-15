import styled from "styled-components";

const NoteItemExpandedStyled = styled.div`
  position: fixed;
  inset: 0;
  background-color: #fff;
  z-index: 1000;

  & .wrapper {
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden auto;
    padding: 0 0 2rem 0;

    & input {
      width: 100%;
      font-size: 1.5rem;
      font-weight: 600;
      padding: 1rem 0;
      height: auto;
    }

    & textarea {
      width: 100%;
      resize: none;
      flex-grow: 1;
      border: none;
      outline: none;
      font: inherit;
      margin: 1rem 0;
    }

    & .top {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;

      & button {
        font-weight: 600;
        transition: transform 200ms;
        border-radius: 4px;
        cursor: pointer;
        padding-right: 1rem;

        &:nth-child(2) {
          margin-left: auto;
          margin-right: 1rem;
        }

        &:nth-child(3) {
          background-color: #999;
          padding: 0 1rem;
        }

        &:active {
          transform: scale(0.9);
        }
      }
    }
  }
`;

export default NoteItemExpandedStyled;
