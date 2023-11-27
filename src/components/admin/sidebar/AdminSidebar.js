import styled from "styled-components";
import AccountSidebar from "../../utils/reUseableComponents/sideBar/account/Sidebar";

const AdminSidebar = ({ setShowSidebar, showSidebar, sidebarRef }) => {
  const sidebarMenu = [
    {
      id: 100,
      title: "Manage Inventory",
      links: [
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
      ],
    },
  ];

  return (
    <AdminSidebarContainer ref={sidebarRef} sideBar={showSidebar}>
      <AccountSidebar
        sidebarMenu={sidebarMenu}
        setShowSidebar={setShowSidebar}
      />
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
  z-index: 100;
  padding-left: 2rem;

  @media screen and (max-width: 768px) {
    min-width: 30rem;
    background: aliceblue;
    position: fixed;
    left: ${({ sideBar }) => (sideBar ? "0" : "-30rem")};
    height: 100vh !important;
    top: 0rem;
    transition: all 0.3s ease-in;
    padding-left: 2rem;
  }
`;
