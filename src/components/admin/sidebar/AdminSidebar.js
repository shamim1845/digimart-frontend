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
        // link: "/admin/products/all",
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
        name: "Brand",
        link: "/admin/brand",
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
      <AccUserName>
        <p>Hello, {userInfo?.name}</p>
        <i onClick={() => setShowSidebar(false)} className="bi bi-x"></i>
      </AccUserName>

      <AccSidebaContent>
        <h4>Manage My Inventory</h4>
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
  max-height: calc(100vh - 5rem);
  position: sticky;
  top: 5rem;
  background-color: #fff;
  padding: 0 2rem;
  z-index: 100;
  overflow-y: auto;

  h4 {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    height: 100%;
    top: 5rem;
    transition: all 0.5s ease-in-out;
    background: #fff;
    padding: 0 2rem;
  }
`;

const AccUserName = styled.div`
  margin: 2rem 0;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: 450px) {
    p {
      margin-top: 1rem;
    }
  }
  i {
    font-size: 2.5rem;
    position: absolute;
    right: -1rem;
    top: -2rem;
    cursor: pointer;
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;

const AccSidebaContent = styled.div`
  .admin_menus {
    margin-top: 1rem;
  }
`;
