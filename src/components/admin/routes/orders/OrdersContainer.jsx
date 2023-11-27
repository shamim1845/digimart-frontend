import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import Modal from "../../../utils/modal/Modal";
import { useState } from "react";
import Error from "../../../utils/fetchUtils/Error";
import styled from "styled-components";
import { toast } from "react-toastify";
import Loading from "../../../utils/fetchUtils/Loading";
import NotFound from "../../../utils/fetchUtils/NotFound";
import {
  useDeleteOrderMutation,
  useGetAllOrdersQuery,
} from "../../../../redux/api/order/orderAPI";
import TimeAgo from "react-timeago";
import EditOrder from "./EditOrder";

// Table head constant
const columns = [
  { id: 1, label: "ID", minWidth: 250 },
  { id: 2, label: "Payment Status", minWidth: 150 },
  {
    id: 3,
    label: "Order Status",
    minWidth: 150,
  },
  {
    id: 4,
    label: "CreatedAt",
    minWidth: 150,
  },

  {
    id: 9,
    label: "Actions",
    minWidth: 150,
    align: "right",
  },
];

const OrdersContainer = ({ keyword }) => {
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 10,
  });

  const [orders, setorders] = useState([]);
  const [edit, setEdit] = useState(false);
  const [orderForEdit, setOrderForEdit] = useState(null);

  // Fetch Brands
  const { isSuccess, data, isLoading, isError, error } = useGetAllOrdersQuery();

  // handle client side brand filtering
  useEffect(() => {
    if (keyword) {
      setPagination({
        page: 0,
        limit: 10,
      });
    }

    if (data) {
      setorders(data?.orders);
    }
  }, [keyword, data]);

  // Delete User mutation
  const [
    deleteOrder,
    {
      isLoading: isDeleteLoading,
      isError: isDeleteError,
      error: orderError,
      isSuccess: isDeleteSuccess,
      data: orderData,
    },
  ] = useDeleteOrderMutation();

  // handle brand successfully deleted or occure an error
  useEffect(() => {
    if (isDeleteError) {
      toast.error(orderError?.message || orderError?.data?.message);
    }
    if (isDeleteSuccess) {
      toast.success(orderData?.message);
    }
  }, [
    orderData?.message,
    orderError?.message,
    isDeleteError,
    isDeleteSuccess,
    orderError?.data?.message,
  ]);

  // => Handle delete function
  const handleDelete = (id) => {
    if (isDeleteLoading) return;
    deleteOrder(id);
  };

  return (
    <Container>
      {isLoading && <Loading />}

      {isError && (
        <>
          {error.status === 404 ? (
            <NotFound
              style={{ justifyContent: "center", marginTop: "10rem" }}
              text={error.data?.message}
            />
          ) : (
            <Error
              style={{ justifyContent: "center", marginTop: "10rem" }}
              text={error?.message}
            />
          )}
        </>
      )}

      {!isError && isSuccess && (
        <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
            margin: "1rem 0",
          }}
        >
          <TableContainer sx={{}}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        fontSize: "1.3rem",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {orders
                  ?.slice(
                    pagination.page * pagination.limit,
                    pagination.page * pagination.limit + pagination.limit
                  )
                  .map((order) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={order?._id}
                      >
                        <TableCell style={{ fontSize: "1.3rem" }}>
                          {order?._id}
                        </TableCell>
                        <TableCell style={{ fontSize: "1.3rem" }}>
                          {order?.paymentInfo?.status}
                        </TableCell>
                        <TableCell style={{ fontSize: "1.3rem" }}>
                          {order?.orderStatus}
                        </TableCell>
                        <TableCell style={{ fontSize: "1.3rem" }}>
                          <TimeAgo date={order?.createdAt} />
                        </TableCell>

                        <TableCell style={{ textAlign: "right" }}>
                          <svg
                            onClick={() => handleDelete(order?._id)}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash delete"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                          </svg>

                          <svg
                            onClick={() => {
                              setEdit(true);
                              setOrderForEdit(order);
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pencil-square edit"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fillRule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>

          {orders.length && (
            <TablePagination
              rowsPerPageOptions={[10, 20, 50]}
              component="div"
              count={Number(orders?.length)}
              rowsPerPage={pagination.limit}
              page={pagination.page}
              onPageChange={(event, newPage) =>
                setPagination((prev) => ({ ...prev, page: newPage }))
              }
              onRowsPerPageChange={(event) => {
                setPagination(() => ({
                  page: 0,
                  limit: +event.target.value,
                }));
              }}
            />
          )}
        </Paper>
      )}

      {/* Modal for product edit */}
      <Modal open={edit} onClose={() => setEdit(false)}>
        <EditOrder order={orderForEdit} onClose={() => setEdit(false)} />
      </Modal>
    </Container>
  );
};

export default OrdersContainer;

const Container = styled.div``;
