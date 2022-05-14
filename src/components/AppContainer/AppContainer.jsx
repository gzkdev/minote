import styled from "styled-components";

const AppContainerStyled = styled.div`
  width: 100%;
  position: relative;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: minmax(240px, 300px) 1fr;
  }
`;

export default AppContainerStyled;
