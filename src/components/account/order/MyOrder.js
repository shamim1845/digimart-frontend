import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  fetchAsyncMyAllOrders,
  getUserOrderItems,
} from "../../../features/order/orderSlice";
import Loading from "../../utils/Loading";
import Order from "./Order";

const MyOrder = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMyAllOrders());
  }, [dispatch]);

  const { loading, allOrders } = useSelector(getUserOrderItems);
  console.log(allOrders);

  return (
    <MyOrdersContainer>
      <Title>
        <h2>My Orders</h2>
      </Title>
      <>
        {loading && <Loading />}

        {!loading &&
          allOrders?.success &&
          allOrders?.orders?.map((order) => {
            return (
              <Content key={order._id}>
                <Order order={order} />
              </Content>
            );
          })}
        {allOrders?.orders?.length < 1 && (
          <NoOrders>
            <p>No orders Found.</p>
            <Link to={"/products"}>Buy products</Link>
          </NoOrders>
        )}
      </>
    </MyOrdersContainer>
  );
};

export default MyOrder;

const MyOrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  /* max-width: 800px; */
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
  }
`;

const Content = styled.div`
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 3rem;
  margin: 1rem;
  width: 95%;
  @media screen and (max-width: 768px) {
    margin: 0 5rem;
  }
  @media screen and (max-width: 450px) {
    padding: 2rem;
  }
`;

const Title = styled.div`
  margin-top: 2rem;
  width: 90%;

  h2 {
    text-align: left;
  }
  @media screen and (max-width: 768px) {
    h2 {
      text-align: center;
    }
  }
`;

const NoOrders = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1.6rem;
  }
  a {
    font-size: 1.4rem;
    background-color: #fff;
    color: tomato;
    border: 1px solid tomato;
    border-radius: 2rem;
    padding: 0.5rem 1rem;
    transition: all 0.5s;

    &:hover {
      color: #000;
    }
  }
`;
