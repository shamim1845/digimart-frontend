import React from 'react';
import styled from 'styled-components';


const Categories = ({ categories }) => {
    console.log(categories);

    return (
        <DepartmentContainer>
            <DepartMent>
                <div className="departmentItems hide">
                    <ul>
                        {categories && categories.map((cat, ind) => {
                            return (

                                <li key={ind}>
                                    <p >{cat}</p>
                                </li>
                            )

                        })}

                    </ul>
                </div>

            </DepartMent>
        </DepartmentContainer>
    )
}

export default Categories;


const DepartmentContainer = styled.div`
   position: absolute;
    background-color: #c52929;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: calc(100% + 10rem);
    left: 0;
    top: 6.2rem;
    padding: 0 1rem;
        z-index: 100;
    `
const DepartMent = styled.div`
    .departmentItems{
        

      
        & li{
            padding: 1rem;
            border-bottom: 2px solid #e4e9eb;
            display: flex;
            align-items: center;
            position: relative;
            &:hover{
              border: none;
            }
            &:hover::after{
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
            }
            &:hover a{
                color: tomato;
            }
           

                i{
                   font-size: 2rem;
                    margin-right: 1rem;
                    color: #a8a5a5;
                }
              a {
                  color: #666;
                  font-size: 1.3rem;
                  font-weight: 600;
                  transition: all 10ms;
           
              }

            &:last-child{
                border-bottom: none;
            }
        }
     
    }
`