import styled from "styled-components";
import Menu from "./Menu";

// Parent icon
import Dashboard from "@mui/icons-material/Dashboard";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import Category from "@mui/icons-material/Category";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RateReviewIcon from "@mui/icons-material/RateReview";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";

// Child icon
import AddIcon from "@mui/icons-material/Add";
import PostAddIcon from "@mui/icons-material/PostAdd";

// =>
import { useSelector } from "react-redux";
import Title from "../../utils/reUseableComponents/Title";

const AdminSidebar = ({ setShowSidebar, showSidebar, sidebarRef }) => {
  const sidebarMenu = [
    {
      id: 1,
      parent: {
        name: "Dashboard",
        link: "/admin/dashboard",
        icon: <Dashboard />,
      },
    },
    {
      id: 2,
      parent: {
        name: "Products",
        icon: <ProductionQuantityLimitsIcon />,
      },
      child: [
        {
          name: "All",
          link: "/admin/products",
          icon: <PostAddIcon />,
        },
        {
          name: "Create",
          link: "/admin/products/create",
          icon: <AddIcon />,
        },
      ],
    },
    {
      id: 3,
      parent: {
        name: "Categories",
        link: "/admin/categories",
        icon: <Category />,
      },
    },
    {
      id: 4,
      parent: {
        name: "Brands",
        link: "/admin/brands",
        icon: <BrandingWatermarkIcon />,
      },
    },
  ];

  const { userInfo } = useSelector((state) => state.user);
  return (
    <AdminSidebarContainer
      ref={sidebarRef}
      style={{ left: showSidebar ? "0rem" : "-105%" }}
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
  background-color: #fff;
  padding: 0 2rem;
  z-index: 100;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
    position: fixed;
    height: 100vh !important;
    top: 0rem;
    transition: all 0.5s ease-in-out;
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
