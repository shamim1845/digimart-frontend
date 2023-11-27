import { useParams } from "react-router-dom";
import styled from "styled-components";
import OrderedPaymentInfo from "./OrderedPaymentInfo";
import OrderedShippingInfo from "./OrderedShippingInfo";
import OrderCard from "./OrderCard";
import { useGetMySingleOrderQuery } from "../../../redux/api/order/orderAPI";
import Loading from "../../utils/fetchUtils/Loading";
import EmptyItems from "../../utils/EmptyItems";
import Error from "../../utils/fetchUtils/Error";

const OrderDetails = () => {
  const { orderid } = useParams();

  const { isLoading, isSuccess, data, isError, error } =
    useGetMySingleOrderQuery(orderid);

  return (
    <Container>
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
          <Content>
            <OrderCard
              key={data?.order?._id}
              order={data?.order}
              showDetailsButton={false}
            />
            <OrderedPaymentInfo paymentInfo={data?.order?.paymentInfo} />
            <OrderedShippingInfo shippingInfo={data?.order?.shippingInfo} />
          </Content>
        )}
      </>
    </Container>
  );
};

export default OrderDetails;

const Container = styled.div`
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
