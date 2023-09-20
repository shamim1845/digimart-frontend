import React from "react";
import styled from "styled-components";
import AdminSearch from "../../admin-utils/AdminSearch";
import Modal from "../../../utils/modal/Modal";
import { useState } from "react";
import CategoriesContainer from "./CategoriesContainer";
import CreateCategory from "./CreateCategory";

const Categories = () => {
  const [keyword, setKeyWord] = useState("");
  const [open, setOpen] = useState(false);

  const modalController = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Container>
      <AdminSearch setKeyWord={setKeyWord} modalController={modalController} />

      <CategoriesContainer keyword={keyword} />

      <Modal open={open} onClose={modalController}>
        <CreateCategory onClose={modalController} />
      </Modal>
    </Container>
  );
};

export default Categories;
const Container = styled.div`
  width: 100%;

  .delete {
    margin-right: 1.5rem;
    cursor: pointer;
    &:hover {
      fill: red;
    }
  }

  .edit {
    cursor: pointer;
    &:hover {
      fill: teal;
    }
  }
`;
