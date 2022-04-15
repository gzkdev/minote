import styled from "styled-components";

const NoteFormStyled = styled.div`
  position: fixed;
  inset: 0;
  background-color: #fff;
  z-index: 1000;

  & .wrapper {
    width: 90%;
    max-width: 800px;
    margin: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    overflow: hidden auto;

    & input {
      width: 100%;
      font-size: 1.5rem;
      font-weight: 600;
    }

    & textarea {
      width: 100%;
      resize: none;
      flex-grow: 1;
    }

    & .top {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;

      & button {
        background-color: #999;
        font-weight: 600;
        transition: transform 200ms;

        &:active {
          transform: scale(0.9);
        }
      }
    }
  }
`;

export default NoteFormStyled;
