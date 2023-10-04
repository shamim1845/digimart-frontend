import styled from "styled-components";
import Menu from "./Menu";
import { useSelector } from "react-redux";
import Title from "../../utils/reUseableComponents/Title";

const AdminSidebar = ({ setShowSidebar, showSidebar, sidebarRef }) => {
  const sidebarMenu = [
    {
      id: 1,
      parent: {
        name: "Dashboard",
        link: "/admin/dashboard",
        icon: <i className="bi bi-columns-gap"></i>,
      },
    },
    {
      id: 2,
      parent: {
        name: "Products",
        icon: <i className="bi bi-cart4"></i>,
      },
      child: [
        {
          name: "All",
          link: "/admin/products",
          icon: <i className="bi bi-box"></i>,
        },
        {
          name: "Create",
          link: "/admin/products/create",
          icon: <i className="bi bi-plus-lg"></i>,
        },
      ],
    },
    {
      id: 3,
      parent: {
        name: "Categories",
        link: "/admin/categories",
        icon: <i className="bi bi-collection"></i>,
      },
    },
    {
      id: 4,
      parent: {
        name: "Brands",
        link: "/admin/brands",
        icon: <i className="bi bi-shop-window"></i>,
      },
    },
    {
      id: 5,
      parent: {
        name: "Orders",
        link: "/admin/orders",
        icon: <i className="bi bi-bag-check"></i>,
      },
    },
    {
      id: 6,
      parent: {
        name: "Order Status",
        link: "/admin/order-status",
        icon: <i className="bi bi-diagram-3"></i>,
      },
    },
    {
      id: 7,
      parent: {
        name: "Users",
        link: "/admin/users",
        icon: <i className="bi bi-people"></i>,
      },
    },
  ];

  const { userInfo } = useSelector((state) => state.user);
  return (
    <AdminSidebarContainer
      ref={sidebarRef}
      style={{ left: showSidebar ? "0rem" : "-100%" }}
    >
      <SidebarTop>
        <p>Hello, {userInfo?.name}</p>
        <i onClick={() => setShowSidebar(false)} className="bi bi-x"></i>
      </SidebarTop>

      <AccSidebaContent>
        <Title variant="h3" text="Manage Inventory" />
        <div className="admin_menus">
          {sidebarMenu.map((menu) => (
            <Menu key={menu.id} menu={menu} />
          ))}
        </div>
      </AccSidebaContent>
    </AdminSidebarContainer>
  );
};

export default AdminSidebar;

const AdminSidebarContainer = styled.div`
  min-width: 25rem;
  height: calc(100vh - 5rem);
  position: sticky;
  top: 5rem;
  border-right: 1px solid rgba(0, 0, 0, 0.1) !important;

  padding: 0 2rem;
  z-index: 100;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
    position: fixed;
    height: 100vh !important;
    top: 0rem;
    transition: all 0.3s ease-in-out;
    padding: 0 2rem;
  }
`;

const SidebarTop = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  p {
    margin: 4rem 0 2rem;
  }

  i {
    font-size: 3rem;
    position: absolute;
    right: -1rem;
    top: 0.5rem;
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
  .admin_menus {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
