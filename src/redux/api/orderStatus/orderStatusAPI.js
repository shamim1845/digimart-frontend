import apiCreator from "../apiCreator";

const orderStatusAPI = apiCreator.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrderStatus: builder.query({
      query: () => ({
        url: `admin/order-status`,
      }),
      providesTags: ["getAllOrderStatus"],
    }),

    updateOrderStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `admin/order-status/${id}`,
        body: data,
        method: "PUT",
      }),
      invalidatesTags: ["getAllOrderStatus"],
    }),
    deleteOrderStatus: builder.mutation({
      query: (id) => ({
        url: `admin/order-status/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getAllOrderStatus"],
    }),
    createOrderStatus: builder.mutation({
      query: (orderStatus) => ({
        url: "admin/order-status/create",
        method: "POST",
        body: orderStatus,
      }),
      invalidatesTags: ["getAllOrderStatus"],
    }),
  }),
});

export const {
  useGetAllOrderStatusQuery,
  useDeleteOrderStatusMutation,
  useCreateOrderStatusMutation,
  useUpdateOrderStatusMutation,
} = orderStatusAPI;
