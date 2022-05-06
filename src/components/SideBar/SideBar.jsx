import styled from "styled-components";

const SideBarStyled = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.4); */
  z-index: 1000;
  /* opacity: 0; */

  .sideBar__box {
    width: 240px;
    position: absolute;
    height: 100%;
    background-color: #fff;
  }

  @media (min-width: 768px) {
    position: sticky;
    top: 0;
    height: 100vh;
    opacity: 1;
    background-color: none;
  }
`;

export default function SideBar() {
  return (
    <SideBarStyled>
      <div className="sideBar__box"></div>
    </SideBarStyled>
  );
}
