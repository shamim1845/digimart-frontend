import React, {useEffect, useState,} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, getAllProducts } from '../../../features/products/productSlice';
import { useNavigate } from 'react-router-dom';

const Department = () => {
    const [category, setCategory] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const { fetchProduct } = useSelector(getAllProducts);
    // console.log(fetchProduct);

    useEffect(() => {
        const CatHandler = () => {
      
            dispatch(addCategory(category));
            }
        CatHandler();

    }, [category, dispatch])


    return (
        <DepartmentContainer >
            <DepartMent>

                <ul>
                    {
                        fetchProduct.allCategories && fetchProduct.allCategories.map((cat, index) => {
                            return (
                                <li key={index} onClick={() => {      navigate("/products"); setCategory(cat); }}>
                                    {/* <i className="bi bi-headset"></i> */}
                                    {cat}
                                </li>

                            )
                        })
                    }
                </ul>

            </DepartMent>
        </DepartmentContainer>
    )
}

export default Department;


const DepartmentContainer = styled.div`
    position: absolute;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width:20rem;
    left: 0;
    top: 6.2rem;
    padding: 0 1rem;
    z-index: 100; 
    `
const DepartMent = styled.div`
    ul {
         & li{
            padding: 1rem;
            border-bottom: 2px solid #e4e9eb;
            display: flex;
            align-items: center;
            position: relative;
            color: #666;
            font-size: 1.3rem;
            font-weight: 600;
            transition: all 10ms;
            cursor: pointer;
            &:hover{
              /* border: none; */
              color: tomato;
            }
            /* &:hover::after{
                    content: "";
                    position: absolute;
                    left: 0.2rem;
                    width: calc(100% + 0.2rem);
                    height: 100%;
                    border-bottom: 2px solid tomato;
                    border-top: 2px solid tomato;
                  
            }
            &:hover::before{
                    content: "";
                    position: absolute;
                    right: -1rem;
                    background: tomato;
                    width: 1rem;
                    height: 100%;
                    border-top-right-radius: 50%;
                    border-bottom-right-radius: 50%;
                    border-bottom: 2px solid tomato;
                    z-index: 10000;
            } */
        
                i{
                   font-size: 2rem;
                    margin-right: 1rem;
                    color: #a8a5a5;
                }
         
            &:last-child{
                border-bottom: none;
            }
        }
     
    }
`