import React, { useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import * as yup from "yup";
import Title from "../../../utils/reUseableComponents/Title";
import SelectBox from "../../../utils/formik/SelectBox";

import { useGetAllOrderStatusQuery } from "../../../../redux/api/orderStatus/orderStatusAPI";
import { useUpdateOrderedOrderStatusMutation } from "../../../../redux/api/order/orderAPI";
import Button from "../../../utils/reUseableComponents/Buttons";

const EditOrder = ({ onClose, order }) => {
  // Fetch OrderStatus
  const { data: orderStatuses } = useGetAllOrderStatusQuery();
  console.log(orderStatuses);

  //   =>Create category mutation
  const [
    updateOrderedOrderStatus,
    { data, isError, error, isLoading, isSuccess },
  ] = useUpdateOrderedOrderStatusMutation();

  console.log({ data, error });

  // => Effect for show Error and Success message
  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
      onClose();
    } else if (isSuccess) {
      onClose();
      toast.success(data?.message);
    }
  }, [isError, isSuccess, data?.message, onClose, error?.data?.message]);

  return (
    <Container>
      <Content>
        <Title variant="h2" text="Update Order Status" />
        <Formik
          initialValues={{
            status: order?.orderStatus,
          }}
          validationSchema={yup.object({
            status: yup.string().required("Order status is required."),
          })}
          onSubmit={(values, { setSubmitting }) => {
            updateOrderedOrderStatus({ id: order?._id, data: values });
          }}
        >
          <Form>
            <SelectBox label="Order Status" name="status">
              <option value="">Select Order Status</option>

              {orderStatuses &&
                orderStatuses?.orderStatuses?.map((orderStatus) => (
                  <option key={orderStatus?._id} value={orderStatus?.status}>
                    {orderStatus?.name}
                  </option>
                ))}
            </SelectBox>

            <br />
            <Button type="submit" text={"Update"} disabled={isLoading} />
          </Form>
        </Formik>
      </Content>
    </Container>
  );
};

export default EditOrder;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  form {
    width: 100%;
    min-width: 30rem;
  }
`;
