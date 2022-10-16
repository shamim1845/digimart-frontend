import React, {useEffect, useState, useRef} from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import { useDispatch, useSelector } from "react-redux";
import { addKeyword } from "../../../../features/products/productSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addAuth } from "../../../../features/auth/authSlice";
import axios from "axios";




const MobHeaderTop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const sidebarRef = useRef()
    const [sideBar, setSideBar] = useState(false);
    const [keyword, setKeyword] = useState("")

    useEffect(() => {
        window.addEventListener("mousedown", (e) => {
            if(sidebarRef.current!==e.target) {
                setSideBar(false)
            }
        })
     
    }, [])

    const {authenticated} = useSelector(( state ) => state.auth);

    const digimartToken = localStorage.getItem("digimartToken");
    // console.log(digimartToken);
    if(digimartToken) {
      dispatch(addAuth(true))
    }
  
    const LogOutHandler = async(e) => {
      e.preventDefault();
      const res = await axios.get("/api/v1/logout");
      console.log(res);
  if(res.status === 200) {
    toast(res.data.message);
     dispatch(addAuth(false));
     localStorage.removeItem("digimartToken")
  
     setTimeout(() => {
       navigate("/")
       window.location.reload();
     }, 3000);
    }
    }

    const searchHandler = (e) => {
      e.preventDefault();
      navigate("/products")
      dispatch(addKeyword(keyword));
       }

const SidebarHandler = () => {
    setSideBar(!sideBar)
}
    return (
        <>
        <ToastContainer />
       {sideBar ? <SidebarMenu Ref={sidebarRef}  setSideBar={setSideBar} /> : null}

        <MobHeaderContainer>
           <MobLogoTop>
         <SidebarIcon>
                <img onClick={SidebarHandler} src="/images/icons/hamberger.svg" alt="" />
                <Logo>
            <h2>
              DIGI<span>MART</span>
            </h2>
          </Logo>
            </SidebarIcon>
            
          <SignIn>
         
                  {
                  authenticated ?<div className="log_out">

              <p style={{cursor: "pointer"}} onClick={LogOutHandler}>Log Out </p>      </div> : <div>
                    <NavLink to={"/register"}>Register</NavLink> or
                    <NavLink to={"/login"}> Login </NavLink>

                  </div>
             
            }
          
            
           
        <img src="/images/icons/person-fill.svg" alt="" />
          </SignIn>
          
        </MobLogoTop>
      
           
          <SearchBar onSubmit={searchHandler}>
            <input type="text" placeholder="Search" onChange={(e) => setKeyword(e.target.value)}/>
    
            <div className="search_button">
              <button type="submit" onClick={searchHandler}>
                <img src="/images/icons/search.svg" alt="" />
              </button>
            </div>
          </SearchBar>
               
      </MobHeaderContainer>
     
      </>
    )
}

export default MobHeaderTop;



const MobHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: tomato;
  width: 100%;
  position: sticky;
  padding: 0 1rem 1rem 1rem;
  @media screen and (min-width:769px) {
      display: none;
    } 
`;

const MobLogoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .5rem;
 
`;
const Logo = styled.div`
    h2 {
      letter-spacing: 0.3rem;
      font-size: 2.2rem;
      

      span {
        color: #fff;
      }
    }
`

const SidebarIcon = styled.div`
display: flex;
    img{
        width: 2.5rem;
        margin-right: 1rem;
        cursor: pointer;
    }
`
const SignIn = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #666;
font-size: 1.2rem;
.log_out{
  margin-right: 1rem;
  p{
    margin-bottom: 0;
    color: #fff;
    transition: all .5s;
    &:hover{
      color: #666;
    }
  }
}
div{
  display: flex;
  justify-content: center;
  align-items: center;
 
    a{
        color: #fff;
        margin: 0 .5rem;
    }
}
img{
        width: 2rem;
         }
    
`

const SearchBar = styled.form`
  display: flex;
  justify-content: center;
    background-color: #fff;
   border-radius: 0.5rem;

  & input {
    width: 100%;
    border: none;
    padding-left: 0.5rem;
    border-radius: 0.5rem;

    &::placeholder{
      /* padding-left: 0.5rem; */
    }
    &:focus{
        outline: none;
    }
  }

  .search_button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: .3rem;

    button {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: tomato;
      border: none;
      padding: 1rem;
      border-radius: 0.3rem;
      transition: all .5s;
        &:hover{
          background-color: #ff6347c1;
          transform: scale(1.2);
        }
    }
  }
`;

