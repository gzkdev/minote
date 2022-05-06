import styled from "styled-components";

const MainContainerStyled = styled.div`
  position: relative;
  border: 1px solid blue;
  width: 100%;
  padding: 2rem 1rem 4rem;
`;

export default function MainContainer({ children }) {
  return <MainContainerStyled>{children}</MainContainerStyled>;
}
