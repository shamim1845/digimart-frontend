import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CardContainer, Title, CategoriesLink } from '../card/CardContainer'
import { CardItem, CardItemsContainer, CardItemsWrapper } from '../card/CardItem';
// import {useSelector} from "react-redux";
// import { getAllProducts } from '../../features/products/productSlice';

const CategoriesDisplay = () => {
    // const products = useSelector(getAllProducts);
    // console.log(products);
    return (
        <>
            <CategoriesContainer>

                <CardContainer>
                    <Title>
                        Shop by Category
                    </Title>

                    <CardItemsContainer>
                        <CardItemsWrapper>
                            <CardItem>
                                <Link to={"/"}>
                                    <img src="https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <p>Headsets</p>
                                </Link>
                            </CardItem>
                        </CardItemsWrapper>
                        <CardItemsWrapper>
                            <CardItem>
                                <Link to={"/"}>
                                    <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <p>Headsets</p>
                                </Link>
                            </CardItem>
                        </CardItemsWrapper>
                        <CardItemsWrapper>
                            <CardItem>
                                <Link to={"/"}>
                                    <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <p>Headsets</p>
                                </Link>
                            </CardItem>
                        </CardItemsWrapper>
                        <CardItemsWrapper>
                            <CardItem>
                                <Link to={"/"}>
                                    <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <p>Headsets</p>
                                </Link>
                            </CardItem>
                        </CardItemsWrapper>
                    </CardItemsContainer>

                    <CategoriesLink>
                        <Link to={"/"}>Shop now</Link>
                    </CategoriesLink>
                </CardContainer>
                <CardContainer>
                    <Title>
                      Gaming accessories
                    </Title>

                    <CardItemsContainer>
                        <CardItemsWrapper>
                            <CardItem>
                                <Link to={"/"}>
                                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMHNsaWRlciUyMGltZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <p>Headsets</p>
                                </Link>
                            </CardItem>
                        </CardItemsWrapper>
                        <CardItemsWrapper>
                            <CardItem>
                                <Link to={"/"}>
                                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMHNsaWRlciUyMGltZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <p>Headsets</p>
                                </Link>
                            </CardItem>
                        </CardItemsWrapper>
                        <CardItemsWrapper>
                            <CardItem>
                                <Link to={"/"}>
                                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMHNsaWRlciUyMGltZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <p>Headsets</p>
                                </Link>
                            </CardItem>
                        </CardItemsWrapper>
                        <CardItemsWrapper>
                            <CardItem>
                                <Link to={"/"}>
                                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMHNsaWRlciUyMGltZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <p>Headsets</p>
                                </Link>
                            </CardItem>
                        </CardItemsWrapper>
                    </CardItemsContainer>

                    <CategoriesLink>
                        <Link to={"/"}>Shop now</Link>
                    </CategoriesLink>
                </CardContainer>
                <CardContainer>
                    <Title>
                        Holiday Gifts
                    </Title>

                    <CardItemsContainer>
                        <CardItemsWrapper>
                            <CardItem>
                                <Link to={"/"}>
                                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMHNsaWRlciUyMGltZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <p>Headsets</p>
                                </Link>
                            </CardItem>
                        </CardItemsWrapper>
                        <CardItemsWrapper>
                            <CardItem>
                                <Link to={"/"}>
                                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMHNsaWRlciUyMGltZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <p>Headsets</p>
                                </Link>
                            </CardItem>
                        </CardItemsWrapper>
                        <CardItemsWrapper>
                            <CardItem>
                                <Link to={"/"}>
                                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMHNsaWRlciUyMGltZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <p>Headsets</p>
                                </Link>
                            </CardItem>
                        </CardItemsWrapper>
                        <CardItemsWrapper>
                            <CardItem>
                                <Link to={"/"}>
                                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMHNsaWRlciUyMGltZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <p>Headsets</p>
                                </Link>
                            </CardItem>
                        </CardItemsWrapper>
                    </CardItemsContainer>

                    <CategoriesLink>
                        <Link to={"/"}>Shop now</Link>
                    </CategoriesLink>
                </CardContainer>
                <CardContainer>
                    <Title>
                        Holiday Gifts
                    </Title>

                    <CardItemsContainer>
                        <CardItemsWrapper>
                            <CardItem>
                                <Link to={"/"}>
                                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMHNsaWRlciUyMGltZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <p>Headsets</p>
                                </Link>
                            </CardItem>
                        </CardItemsWrapper>
                        <CardItemsWrapper>
                            <CardItem>
                                <Link to={"/"}>
                                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMHNsaWRlciUyMGltZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <p>Headsets</p>
                                </Link>
                            </CardItem>
                        </CardItemsWrapper>
                        <CardItemsWrapper>
                            <CardItem>
                                <Link to={"/"}>
                                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMHNsaWRlciUyMGltZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <p>Headsets</p>
                                </Link>
                            </CardItem>
                        </CardItemsWrapper>
                        <CardItemsWrapper>
                            <CardItem>
                                <Link to={"/"}>
                                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMHNsaWRlciUyMGltZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <p>Headsets</p>
                                </Link>
                            </CardItem>
                        </CardItemsWrapper>
                    </CardItemsContainer>

                    <CategoriesLink>
                        <Link to={"/"}>Shop now</Link>
                    </CategoriesLink>
                </CardContainer>



            </CategoriesContainer>


       
        </>
    )
}

export default CategoriesDisplay;

const CategoriesContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1440px;

    flex-wrap: nowrap;
      overflow-x: auto;
      white-space: nowrap;

@media screen and (max-width: 1200px) {
    justify-content: flex-start;
}
`
