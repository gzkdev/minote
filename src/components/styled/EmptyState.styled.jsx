import styled from "styled-components";

export const EmptyStateStyled = styled.div`
  max-width: 90%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;

  & img {
    display: block;
    width: 164px;
    height: 164px;
    margin-bottom: 2rem;
    object-fit: contain;
    pointer-events: none;
  }

  & a {
    min-height: 48px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-100);
    background-color: var(--color-300);
    padding: 0 2rem;
    margin-top: 2rem;
    font-weight: 600;
    border-radius: 4px;
  }
`;
