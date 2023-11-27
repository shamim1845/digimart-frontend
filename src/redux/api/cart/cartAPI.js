import apiCreator from "../apiCreator";

const cartAPI = apiCreator.injectEndpoints({
  endpoints: (builder) => ({
    getMyCartList: builder.query({
      query: () => ({
        url: `cart`,
      }),
      providesTags: ["getMyCartList"],
    }),

    addToCart: builder.mutation({
      query: (data) => ({
        url: `cart/add`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getMyCartList"],
    }),

    removeFromCart: builder.mutation({
      query: (data) => ({
        url: `cart/remove`,
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["getMyCartList"],
    }),
    removeAllFromCart: builder.mutation({
      query: () => ({
        url: `cart/remove/all`,
        method: "DELETE",
      }),
      invalidatesTags: ["getMyCartList"],
    }),
  }),
});

export const {
  useGetMyCartListQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useRemoveAllFromCartMutation,
} = cartAPI;
