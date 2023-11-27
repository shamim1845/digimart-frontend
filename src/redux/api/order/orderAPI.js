import apiCreator from "../apiCreator";

const orderAPI = apiCreator.injectEndpoints({
  endpoints: (builder) => ({
    getMyAllOrders: builder.query({
      query: () => ({
        url: `orders/me`,
      }),
      providesTags: ["getMyAllOrders"],
    }),
    getMySingleOrder: builder.query({
      query: (orderid) => ({
        url: `order/${orderid}`,
      }),
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: `admin/orders`,
      }),
      providesTags: ["getAllOrders"],
    }),

    updateOrderedOrderStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `admin/order/${id}`,
        body: data,
        method: "PUT",
      }),
      invalidatesTags: ["getAllOrders"],
    }),

    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `admin/order/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getAllOrders"],
    }),
  }),
});

export const {
  useGetMyAllOrdersQuery,
  useGetMySingleOrderQuery,
  useGetAllOrdersQuery,
  useUpdateOrderedOrderStatusMutation,
  useDeleteOrderMutation,
} = orderAPI;
