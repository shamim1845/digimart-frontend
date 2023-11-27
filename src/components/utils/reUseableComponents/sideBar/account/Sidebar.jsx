import styled from "styled-components";
import Menu from "./Menu";
import { useSelector } from "react-redux";
import Title from "../../Title";

const Sidebar = ({ setShowSidebar, sidebarMenu }) => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <Container>
      <SidebarTop>
        <p>Hello, {userInfo?.name}</p>
        <i
          onClick={() => setShowSidebar(false)}
          className="bi bi-arrow-left-square"
        ></i>
      </SidebarTop>

      {sidebarMenu?.map((parentNode) => (
        <AccSidebaContent key={parentNode?.id}>
          <Title
            variant="h3"
            text={parentNode?.title}
            style={{ fontWeight: "600" }}
          />
          {parentNode?.links?.map((link) => (
            <div className="admin_menus" key={link?.id}>
              <Menu menu={link} />
            </div>
          ))}
        </AccSidebaContent>
      ))}
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-right: 2rem;
`;

const SidebarTop = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  p {
    margin: 4rem 0 2rem;
  }

  i {
    font-size: 2.5rem;
    position: absolute;
    right: -1rem;
    top: 1rem;
    cursor: pointer;
    display: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: tomato !important;
    }
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;

const AccSidebaContent = styled.div`
  margin-bottom: 2rem;
  .admin_menus {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
