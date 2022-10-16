import React, {useEffect, useState, useRef} from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Department from "./Department";

import { addKeyword } from "../../../features/products/productSlice";


const HeaderBottom = () => {
    let deptRef = useRef();
    const dispatch = useDispatch()
    const [activeDept, setActiveDept] = useState(false)
    const [keyword, setKeyword] = useState("")


    const navigate = useNavigate()

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
              if(!deptRef.current.contains(e.target)) {
                setActiveDept(false)
            }
         
        })
    })
       
    const DepartmentHandler = (e) => {
        setActiveDept(!activeDept);
                 
    }

    const searchHandler = (e) => {
   e.preventDefault();
   
   navigate("/products")
   dispatch(addKeyword(keyword));

 }

    return (
        <HeaderBottomContainer>
        <HeaderBottoms >
          <BottomLeftContainer ref={deptRef}>
          <BottomLeft onClick={DepartmentHandler}>
            <img src="/images/icons/menu-down.svg" alt="" />
            <h4>ALL CATEGORIES</h4>
          </BottomLeft>
          {activeDept ? 
            <Department  /> : null
            }
          </BottomLeftContainer>
          <BottomCenter>
            <form onSubmit={searchHandler}>
            <input type="text" placeholder="Search" onChange={(e) => setKeyword(e.target.value)} />
            </form>



            <CategoryContainer>
             
            <div className="search_button">
              <button onClick={searchHandler} type="submit">
                <img src="/images/icons/search.svg" alt="" />
              </button>
            </div>
             
            </CategoryContainer>
          </BottomCenter>
          <BottomRight>
            <Link to="/account">
            <div className="button">
              <button type="submit">
                <img src="/images/icons/person.svg" alt="" />
              </button>
            </div>
            </Link>
            <Link to="/favourite">
            <div className="button">
              <button type="submit">
                <img src="/images/icons/favourite.svg" alt="" />
              </button>
            </div>
            </Link>
            <Link to="/cart">
            <div className="button">
              <button type="submit">
                <img src="/images/icons/cart.svg" alt="" />
              </button>
            </div>
            </Link>
          </BottomRight>
        </HeaderBottoms>
      
      </HeaderBottomContainer>
    )
}

export default HeaderBottom;



const HeaderBottomContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: tomato;
  width: 100%;
  @media screen and (max-width: 768px) {
      display: none;
      }
`;

const HeaderBottoms = styled.div`
  width: 100%;
  height: 8rem;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  color: #666;
      @media screen and (max-width:1440px) {
        padding: 0 1rem;
      }
`;
const BottomLeftContainer = styled.div`
    position: relative;
`
const BottomLeft = styled.div`
    cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 2;
  background-color: #fff;
  height: 4.5rem;
  border-radius: 0.5rem;
  min-width: 18rem;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  h4 {
    color: tomato;
    margin-bottom: 0px;
  }
`;
const BottomCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 10;
  background-color: #fff;
  height: 4.5rem;
  margin: 0 2rem;
  border-radius: 0.5rem;

  form{
    width: 80%;

    & input {
      width: 100%;
      border: none;
      padding-left: 0.5rem;
      border-radius: 0.5rem;
      font-size: 1.4rem;
      &::placeholder{
        font-size: 1.4rem;
        /* padding-left: 0.5rem; */
      }
      
      &:focus{
          outline: none;
      }
  }

  }
 
  
`;

const CategoryContainer = styled.div`



  .search_button {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      background-color: tomato;
      border: none;
      padding: 1.1rem;
      margin-right: 0.4rem;
      border-radius: 0.3rem;
      transition: all .5s;
        &:hover{
          background-color: #ff6347c1;
          transform: scale(1.2);
        }
    }
  }
`
const BottomRight = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  .button {
    & button {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border: none;
      height: 4.5rem;
      width: 4.5rem;
      border-radius: 0.5rem;
      margin: 0 1rem;
      &:hover{
        box-shadow: rgba(255,155, 155, 0.3) 0px -50px 36px -28px inset;
      }
      & img{
        width: 2rem;
      }
    
    }
  }
  &:last-child .button button{
        margin-right: 0;
        backgorund: blue;
      }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

