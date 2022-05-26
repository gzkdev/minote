import styled from "styled-components";

const EmptyStateStyled = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  margin-top: 8rem;

  & img {
    display: block;
    width: 180px;
    height: 180px;
    margin-bottom: 2rem;
    object-fit: contain;
    pointer-events: none;
  }

  & .title {
    display: inline-block;
    font-size: 2rem;
    font-weight: 600;
    margin: 4rem auto 1rem;
  }
`;

export default EmptyStateStyled;
