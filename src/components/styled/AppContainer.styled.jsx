import styled from "styled-components";

const AppContainer = styled.div`
  display: grid;
  @media (min-width: 1000px) {
    grid-template-columns: 280px 1fr;
  }
`;
export default AppContainer;
