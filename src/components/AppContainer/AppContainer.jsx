import styled from "styled-components";
import SideBar from "../SideBar/SideBar";
import MainContainer from "../MainContainer";

const AppContainerStyled = styled.div`
  width: 100%;
  position: relative;

  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
  }
`;

export default function AppContainer() {
  return (
    <AppContainerStyled>
      <SideBar />
      <MainContainer />
    </AppContainerStyled>
  );
}
