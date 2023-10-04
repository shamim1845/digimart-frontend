import React from "react";
import styled from "styled-components";
import AdminSearch from "../../admin-utils/AdminSearch";
import Modal from "../../../utils/modal/Modal";
import { useState } from "react";
import UsersContainer from "./OrderStatusContainer";
import CreateOrderStatus from "./CreateOrderStatus";
// import CreateBrand from "./CreateBrand";

const OrderStatus = () => {
  const [keyword, setKeyWord] = useState("");
  const [open, setOpen] = useState(false);

  const modalController = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Container>
      <AdminSearch
        setKeyWord={setKeyWord}
        modalController={modalController}
        label="Order Status"
      />

      <UsersContainer keyword={keyword} />

      <Modal open={open} onClose={modalController}>
        <CreateOrderStatus onClose={modalController} />
      </Modal>
    </Container>
  );
};

export default OrderStatus;

const Container = styled.div`
  width: 100%;
`;
