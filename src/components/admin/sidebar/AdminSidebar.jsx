import styled from "styled-components";
import Menu from "./Menu";

// Parent icon
import Dashboard from "@mui/icons-material/Dashboard";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RateReviewIcon from "@mui/icons-material/RateReview";

// Child icon
import AddIcon from "@mui/icons-material/Add";
import PostAddIcon from "@mui/icons-material/PostAdd";

const AdminSidebar = ({ setSidebar, sidebar, sidebarRef }) => {
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
        link: "/admin/products/all",
        icon: <ProductionQuantityLimitsIcon />,
      },
      child: [
        {
          name: "all",
          link: "/admin/products/all",
          icon: <PostAddIcon />,
        },
        {
          name: "create",
          link: "/admin/products/create",
          icon: <AddIcon />,
        },
      ],
    },
  ];
  return (
    <AccountSidebarContainer
      ref={sidebarRef}
      style={{ left: sidebar ? "0rem" : "-105%" }}
    >
      <AccUserName>
        <p>Hello, Md Shamim Hossain</p>
        <i onClick={() => setSidebar(false)} className="bi bi-x"></i>
      </AccUserName>

      <AccSidebaContent>
        <h4>Manage My Inventory</h4>
        {sidebarMenu.map((menu) => (
          <Menu key={menu.id} menu={menu} />
        ))}
        {/* <div className="links_box">
          <div className="parent_links">
            <ProductionQuantityLimitsIcon />
            <NavLink to={"/admin/products"}>Products</NavLink>
          </div>
          <ul className="sub_menu">
            <li>all</li>
            <li>create</li>
          </ul>
        </div>
        <div className="links_box">
          <ListAltIcon />
          <NavLink to={"/admin/orders"}>Orders</NavLink>
        </div>
        <div className="links_box">
          <PeopleAltIcon />
          <NavLink to={"/admin/users"}>Users</NavLink>
        </div>
        <div className="links_box">
          <RateReviewIcon />
          <NavLink to={"/admin/reviews"}>Reviews</NavLink>
        </div> */}
      </AccSidebaContent>
    </AccountSidebarContainer>
  );
};

export default AdminSidebar;

const AccountSidebarContainer = styled.div`
  min-width: 20rem;

  h4 {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    width: 50%;
    height: 100%;
    transition: all 0.5s ease-in-out;
    background: #fff;
    padding: 0 2rem;
  }
`;

const AccUserName = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
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

const AccSidebaContent = styled.div``;
