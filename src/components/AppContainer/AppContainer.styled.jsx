import styled from "styled-components";

export const AppContainerStyled = styled.div`
  width: 100%;
  position: relative;

  @media (width: 768px) {
    display: grid;
    grid-template-columns: minmax(240px, 320px) 1fr;
  }
`;
