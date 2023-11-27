import styled from "styled-components";
import Loading from "../../utils/fetchUtils/Loading";
import Title from "../../utils/reUseableComponents/Title";
import { useGetMyAllOrdersQuery } from "../../../redux/api/order/orderAPI";
import EmptyItems from "../../utils/EmptyItems";
import Error from "../../utils/fetchUtils/Error";
import OrderCard from "./OrderCard";

const MyOrder = () => {
  const { isLoading, isSuccess, data, isError, error } =
    useGetMyAllOrdersQuery();

  return (
    <MyOrdersContainer>
      <>
        {isLoading && <Loading />}

        {isError && (
          <>
            {error.status === 404 ? (
              <EmptyItems
                text={error.data?.message || "No order found!"}
                link={"/products"}
                btnText={"Buy products"}
              />
            ) : (
              <Error
                text={error.data?.message}
                style={{
                  padding: "10rem 0",
                  width: "100%",
                  background: "pink",
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            )}
          </>
        )}

        {isSuccess && (
          <>
            {data?.orders?.length ? (
              <Content>
                <Title
                  variant="h1"
                  text="My Orders"
                  style={{ textAlign: "center" }}
                />

                {data?.orders?.map((order) => (
                  <OrderCard key={order?._id} order={order} />
                ))}
              </Content>
            ) : (
              <EmptyItems
                text={"No order found!"}
                link={"/products"}
                btnText={"Buy products"}
              />
            )}
          </>
        )}
      </>
    </MyOrdersContainer>
  );
};

export default MyOrder;

const MyOrdersContainer = styled.div`
  width: 100%;
  padding: 2rem 0.5rem 2rem 2rem;
  margin-bottom: 3rem;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
