import styled from "styled-components";

const HomeStyled = styled.main`
  width: 100%;
  padding: 8rem 2rem;

  & > h1 {
    margin-bottom: 2rem;
  }

  @media (min-width: 1200px) {
    padding: 8rem 4rem;
  }
`;

export default HomeStyled;
