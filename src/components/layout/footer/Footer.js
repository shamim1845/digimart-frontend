import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Logo from "../../logo/Logo";

const navlinksConstant = [
  {
    title: "Privacy Policy",
    links: [
      {
        name: "Returns & Exchanges",
        link: "/",
      },
      {
        name: "Payment Terms",
        link: "/",
      },
      {
        name: "Terms Of Use",
        link: "/",
      },
      {
        name: "Privacy Policy",
        link: "/",
      },
    ],
  },
  {
    title: "Quick Links",
    links: [
      {
        name: "Smartphones",
        link: "/",
      },
      {
        name: "Returns & Exchanges",
        link: "/",
      },
      {
        name: "Headphones",
        link: "/",
      },
      {
        name: "Monitors",
        link: "/",
      },
    ],
  },
  {
    title: "Customer Care",
    links: [
      {
        name: "My Account",
        link: "/",
      },
      {
        name: "Track your Order",
        link: "/",
      },
      {
        name: "Returns/Exchange",
        link: "/",
      },
      {
        name: "Product Support",
        link: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <ScrollToTop
        smooth
        top="1000"
        color="tomato"
        width="40"
        height="40"
        component={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="tomato"
            class="bi bi-arrow-bar-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        }
      />

      <FooterContainer>
        <FooterContent>
          <Content>
            <div className="company_info">
              <Logo variant={"dark"} />
              <div>
                <p>
                  Digimart offers a wide range of digital products and services.
                  With a sleek and modern interface, Digimart provides customers
                  with a seamless shopping experience.
                </p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-headset"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                  </svg>
                  <span> +0080 1234 56 789</span>
                </div>
              </div>
            </div>
            <div className="quick_action">
              {navlinksConstant.map((navLink) => (
                <div className="main__content">
                  <h3>{navLink?.title}</h3>
                  <ul>
                    {navLink?.links?.map((link) => (
                      <li>
                        <Link to={link?.link}>{link?.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Content>
          <br />
          <Bottom>
            <div>
              <div className="left">
                <span>
                  © {new Date().getFullYear()} Digimart. All rights reserved.
                </span>
              </div>
              <div className="right">
                <img
                  src="https://res.cloudinary.com/dewq5eyuf/image/upload/f_auto,q_auto/v1/digimart/utils/ynpsi4a7uw05hc8fyvvo"
                  alt="stripe logo"
                />
              </div>
            </div>
          </Bottom>
        </FooterContent>
      </FooterContainer>
    </>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterContent = styled.div`
  background-color: #161921;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 5rem;
    padding: 3rem 2rem;
  }
  @media screen and (max-width: 576px) {
  }
`;
const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3rem;

  .company_info {
    width: 100%;
    max-width: 30rem;
    color: #acacac;

    @media screen and (max-width: 768px) {
      max-width: 100%;
    }

    .logo {
      h2 {
        letter-spacing: 0.2rem;
        font-size: 3rem;
        margin: 0;
        color: #fff;
        @media screen and (max-width: 768px) {
          font-size: 2.5rem;
        }
        a {
          color: #fff;
        }
        span {
          color: tomato;
        }
      }
    }
  }

  .quick_action {
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 3rem;

    .main__content {
      margin-bottom: 2rem;
      width: fit-content;
      h3 {
        color: #fff;
        font-size: 1.8rem;
      }
      ul {
        padding-left: 0;

        li {
          line-height: 2.5rem;
          a {
            font-size: 1.4rem;
            color: #acacac;
            transition: all 0.1s;
            &:hover {
              color: #fff;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;

const Bottom = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #666;

  div {
    width: 100%;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      color: #acacac;
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 10rem;
      }
    }
  }
`;
