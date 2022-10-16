import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";


const Footer = () => {
  return (
    <>
    <ScrollToTop smooth top="1000" color="tomato" style={{right: "1rem" ,paddingTop: "5px", marginBottom: "1rem" }} width="40" height="20"/>
      <FooterContainer>
           <FooterContent>
          <Content>
            <div className="main__content">
              <h2>Customer Care</h2>
              <ul>
                <li>
                  <Link to={"/"}>Help Center</Link>
                </li>
                <li>
                  <Link to={"/"}>Help Center</Link>
                </li>
                <li>
                  <Link to={"/"}>Help Center</Link>
                </li>
                <li>
                  <Link to={"/"}>Help Center</Link>
                </li>
                <li>
                  <Link to={"/"}>Help Center</Link>
                </li>
              </ul>
            </div>

            <div className="main__content">
              <h2>Customer Care</h2>
              <ul>
                <li>
                  <Link to={"/"}>Help Center</Link>
                </li>
                <li>
                  <Link to={"/"}>Help Center</Link>
                </li>
                <li>
                  <Link to={"/"}>Help Center</Link>
                </li>
                <li>
                  <Link to={"/"}>Help Center</Link>
                </li>
                <li>
                  <Link to={"/"}>Help Center</Link>
                </li>
              </ul>
            </div>
            <div className="main__content">
              <h2>Customer Care</h2>
              <ul>
                <li>
                  <Link to={"/"}>Help Center</Link>
                </li>
                <li>
                  <Link to={"/"}>Help Center</Link>
                </li>
                <li>
                  <Link to={"/"}>Help Center</Link>
                </li>
                <li>
                  <Link to={"/"}>Help Center</Link>
                </li>
                <li>
                  <Link to={"/"}>Help Center</Link>
                </li>
              </ul>
            </div>
            <div className="main__content">
              <h2>Customer Care</h2>
              <ul>
                <li>
                  <Link to={"/"}>Help Center</Link>
                </li>
                <li>
                  <Link to={"/"}>Help Center</Link>
                </li>
                <li>
                  <Link to={"/"}>Help Center</Link>
                </li>
                <li>
                  <Link to={"/"}>Help Center</Link>
                </li>
                <li>
                  <Link to={"/"}>Help Center</Link>
                </li>
              </ul>
            </div>
          </Content>
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
  background-color: #232f3e;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    /* margin-bottom: 5rem; */
  }
`;
const Content = styled.div`
width: 100%;
max-width: 1440px;
padding: 3rem 0;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
    .main__content{
        margin-bottom: 2rem;
        width: fit-content;
        h2{
        color: #fff;
        font-size: 1.6rem;
        }
        ul{
          padding-left: 0;
    
            li{
                line-height: 2.5rem;
                  a{
                    color: #fff;
                    font-size: 1.2rem;
                    transition: all .1s;
                    &:hover{
                        color: tomato;
                        text-decoration: underline;
                    }
                }
            }
        }
     
    }
 
    @media screen and (max-width: 576px) {
       
        .main__content{
         text-align: center;
            flex: 50%;
            ul{
              li{
                text-align: center;
              }
            }
        
        }
    }
`
