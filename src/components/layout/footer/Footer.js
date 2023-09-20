import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Logo from "../../utils/logo/Logo";

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
            className="bi bi-arrow-bar-up"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        }
      />

      <FooterContainer>
        <Content>
          <div className="company_info">
            <Logo primaryColor="tomato" secondaryColor="#fff" />
            <p className="about_digimart">
              Digimart offers a wide range of digital products and services.
              With a sleek and modern interface, Digimart provides customers
              with a seamless shopping experience.
            </p>

            <div className="contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-headset"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
              </svg>
              <span> +0080 1234 56 789</span>
            </div>
          </div>
          <div className="quick_action">
            {navlinksConstant.map((navLink, i) => (
              <div key={i} className="main__content">
                <h3>{navLink?.title}</h3>
                <ul>
                  {navLink?.links?.map((link, i) => (
                    <li key={i}>
                      <Link to={link?.link}>{link?.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="main__content social_media">
              <h3>Follow Me</h3>
              <ul>
                <li>
                  <a
                    href={`https://www.facebook.com/shamim1845`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="facebook" />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://www.linkedin.com/in/shamim1845`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="linkedin" />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://shamim-me.netlify.app/`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      fill="currentColor"
                      className="bi bi-globe"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="main__content ">
              <h3>Payment Methods</h3>
              <ul>
                <li>
                  <img
                    src="https://res.cloudinary.com/dewq5eyuf/image/upload/f_auto,q_auto/v1/digimart/utils/ynpsi4a7uw05hc8fyvvo"
                    alt="stripe logo"
                    width={100}
                  />
                </li>
              </ul>
            </div>
          </div>
        </Content>
        <br />
        <Bottom>
          <span>
            © {new Date().getFullYear()} Digimart. All rights reserved.
          </span>
        </Bottom>
      </FooterContainer>
    </>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: #232f3e;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 3rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 5rem;
    padding: 5rem 2rem;
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
    color: #ddd;

    .about_digimart {
      line-height: 1.6;
      margin-top: 1rem;
    }

    .contact {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  }

  .quick_action {
    margin-top: 0.8rem;
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 5rem;

    .main__content {
      width: fit-content;

      h3 {
        color: #fff;
        font-size: 1.8rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }
      ul {
        padding-left: 0;

        li {
          line-height: 1.8;
          a {
            color: #ddd;
            transition: all 0.1s;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }

    .social_media {
      ul {
        display: flex;
        gap: 2rem;

        li {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          overflow: hidden;

          span {
            background-image: url("images/social.jpg");
            display: inline-block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
          svg {
            width: 100%;
            height: 100%;
            padding: 3px;
          }

          .facebook {
            zoom: 0.08;
            background-position: -285px -695px;
          }
          .linkedin {
            zoom: 0.08;
            background-position: -2525px -1351px;
          }
        }
      }
    }
  }
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #666;
  padding: 3rem 0 0;
  margin-top: 3rem;
  /* background-color: pink; */
`;
