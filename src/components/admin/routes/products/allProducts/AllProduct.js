import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../../../../redux/api/products/productsAPI";
import Loading from "../../../../utils/fetchUtils/Loading";
import Error from "../../../../utils/fetchUtils/Error";
import styled from "styled-components";
import AdminProductSearch from "./AdminProductSearch";
import generateQuery from "../../../../utils/helperFunction/generateQuery";
import { toast } from "react-toastify";

import EditProduct from "./EditProduct";
import Modal from "../../../../utils/modal/Modal";
import NotFound from "../../../../utils/fetchUtils/NotFound";
import DeleteMedia from "../../../../utils/helperFunction/DeleteMedia";

const columns = [
  { id: 1, label: "Image", minWidth: 120 },
  { id: 2, label: "Name", minWidth: 250 },
  {
    id: 3,
    label: "Category",
    minWidth: 100,
  },
  {
    id: 4,
    label: "Price",
    minWidth: 100,
  },
  {
    id: 5,
    label: "Quantity",
    minWidth: 100,
  },
  {
    id: 6,
    label: "Actions",
    minWidth: 150,
    align: "right",
  },
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [limit, setLimit] = React.useState(20);
  const [keyword, setKeyWord] = React.useState("");
  const [edit, setEdit] = React.useState(false);
  const [ProductForEdit, setProductForEdit] = React.useState(null);

  // If searching set page to 0
  React.useEffect(() => {
    if (keyword) {
      setPage(0);
    }
  }, [keyword]);

  // Generate queryString for searching and filtering
  const queryString = generateQuery({
    keyword: keyword,
    page: page + 1,
    limit: limit,
  });

  // fetch products
  const { data, isSuccess, isLoading, isError, error, refetch } =
    useGetProductsQuery(queryString, {
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
    });

  // Delete product mutation
  const [
    deleteProduct,
    {
      isLoading: isDeleteLoading,
      isSuccess: isDeleteSuccess,
      isError: isDeleteError,
    },
  ] = useDeleteProductMutation();

  // => Effect for product delete mutation
  React.useEffect(() => {
    if (isDeleteSuccess) {
      toast.success("Product successfully deleted.");
      refetch();
    }
    if (isDeleteError) {
      toast.error("Product not deleted. Something went wrong!");
    }
  }, [isDeleteSuccess, isDeleteError, refetch]);

  // => Handle delete function
  const handleDelete = (product) => {
    if (isDeleteLoading) return;
    deleteProduct(product?._id);

    // delete media
    let public_ids = product?.images.map((img) => img?.public_id);
    if (public_ids?.length) {
      DeleteMedia(public_ids)
        .then((res) => {
          toast.success("Media deleted successfully.");
        })
        .catch((err) => {
          console.error(err);
          toast.success("Media not deleted.");
        });
    }
  };

  // handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // handle rows per page
  const handleChangeRowsPerPage = (event) => {
    setLimit(+event.target.value);
    setPage(0);
  };

  return (
    <Container>
      <AdminProductSearch setKeyWord={setKeyWord} />

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
                {data?.products?.map((product) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={product?._id}
                    >
                      <TableCell>
                        <img
                          src={product?.images[0].url}
                          alt={product?.name}
                          width={80}
                        />
                      </TableCell>
                      <TableCell style={{ fontSize: "1.3rem" }}>
                        {product?.name}
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: "1.3rem",
                        }}
                      >
                        {product?.categories.map((category) => (
                          <span
                            key={category?._id}
                            style={{ marginRight: "1rem" }}
                          >
                            {category?.category_slug}
                          </span>
                        ))}
                      </TableCell>
                      <TableCell style={{ fontSize: "1.3rem" }}>
                        {product?.price}
                      </TableCell>
                      <TableCell style={{ fontSize: "1.3rem" }}>
                        {product?.stock}
                      </TableCell>
                      <TableCell style={{ textAlign: "right" }}>
                        <svg
                          onClick={() => handleDelete(product)}
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
                            setProductForEdit(product);
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
          <TablePagination
            rowsPerPageOptions={[20, 50, 100]}
            component="div"
            count={data?.productCount}
            rowsPerPage={limit}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
      {/* Modal for product edit */}
      <Modal open={edit} onClose={() => setEdit(false)}>
        <EditProduct
          product={ProductForEdit}
          onClose={() => setEdit(false)}
          refetch={refetch}
        />
      </Modal>
    </Container>
  );
}

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
