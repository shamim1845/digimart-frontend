import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  fetchAsyncMyAllOrders,
  getUserOrderItems,
} from "../../../redux/order/orderSlice";
import Loading from "../../utils/fetchUtils/Loading";
import Order from "./Order";
import Title from "../../utils/reUseableComponents/Title";
import Button from "../../utils/reUseableComponents/Buttons";
import NotFound from "../../utils/fetchUtils/NotFound";

const MyOrder = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMyAllOrders());
  }, [dispatch]);

  const { loading, allOrders } = useSelector(getUserOrderItems);
  console.log(allOrders);

  return (
    <MyOrdersContainer>
      <Title
        variant="h1"
        text="My Orders"
        style={{ textAlign: "center", marginTop: "2rem" }}
      />
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
            <NotFound text="No order Found." style={{ height: "auto" }} />
            <br />
            <Link to={"/products"}>
              <Button text="Buy products" />
            </Link>
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

const NoOrders = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  p {
    font-size: 1.6rem;
  }
`;
