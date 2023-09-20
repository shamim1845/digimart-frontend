import apiCreator from "../apiCreator";

const productsAPI = apiCreator.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (query) => ({
        url: `products?${query}`,
      }),
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `product/${id}`,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `admin/product/${id}`,
        method: "DELETE",
      }),
    }),
    getNewArivalsCategories: builder.query({
      query: () => ({
        url: `products/new-arrivals-categories`,
      }),
    }),
    getNewArivals: builder.query({
      query: ({ category, currentPage }) => ({
        url: `products/new-arrivals?category=${category}&page=${currentPage}`,
      }),
    }),
    createProduct: builder.mutation({
      query: (product) => ({
        url: "admin/product/new",
        method: "POST",
        body: product,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, product }) => ({
        url: `admin/product/${id}`,
        method: "PUT",
        body: product,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useDeleteProductMutation,
  useGetNewArivalsCategoriesQuery,
  useGetNewArivalsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
} = productsAPI;
