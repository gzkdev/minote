import styled from "styled-components";

const AppContainerStyled = styled.div`
  width: 100%;
  position: relative;
  border: 4px solid red;

  @media (width: 768px) {
    display: grid;
    grid-template-columns: minmax(240px, 320px) 1fr;
  }
`;

export default function AppContainer({ children }) {
  return <AppContainerStyled>{children}</AppContainerStyled>;
}
