import { useRef } from "react";
import styled from "styled-components";
import Logo from "../../../utils/logo/Logo";
import useSidebarHandler from "../../../utils/customHooks/useSidebarHandler";
import Categories from "./Categories";

const SidebarMenu = ({ sideBar, setSideBar }) => {
  const sidebarRef = useRef(null);

  // Custom hooks for handling sidebar when mousedown inside of sidebar
  useSidebarHandler(sidebarRef, setSideBar);

  return (
    <>
      <Container sideBar={sideBar} ref={sidebarRef}>
        <MobileMenuTop>
          <Logo primaryColor="#000" secondaryColor="#fff" />
          <CloseButton onClick={() => setSideBar(false)}>
            <i className="bi bi-x"></i>
          </CloseButton>
        </MobileMenuTop>

        <Content>
          <TrendingDept>
            <h4>Browse All Categories</h4>
            <Categories setSidebar={setSideBar} />
          </TrendingDept>
        </Content>
      </Container>
    </>
  );
};

export default SidebarMenu;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 30rem;
  transition: all 0.3s ease-in-out;
  position: fixed;
  left: ${({ sideBar }) => (sideBar ? "0" : "-30rem")};
  z-index: 10000;
`;

const MobileMenuTop = styled.div`
  height: 5.5rem;
  background-color: tomato;
  padding-left: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.div`
  margin-right: 1rem;
  i {
    font-size: 3.5rem;
    color: #000;
    cursor: pointer;
    transition: all 250ms;
    &:hover {
      color: #fff;
    }
  }
`;

const Content = styled.div`
  background-color: aliceblue;
  padding: 2rem;
  height: calc(100vh - 5.5rem);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: tomato;
  }
`;
const TrendingDept = styled.div`
  h4 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`;
