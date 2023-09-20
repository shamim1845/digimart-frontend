import apiCreator from "../apiCreator";

const brandAPI = apiCreator.injectEndpoints({
  endpoints: (builder) => ({
    getAllBrand: builder.query({
      query: () => ({
        url: `brands`,
      }),
      providesTags: ["Brands"],
    }),
    createBrand: builder.mutation({
      query: (brand) => ({
        url: "admin/brand",
        method: "POST",
        body: brand,
      }),
      invalidatesTags: ["Brands"],
    }),
    updateBrand: builder.mutation({
      query: ({ id, brand }) => ({
        url: `admin/brand/${id}`,
        method: "PUT",
        body: brand,
      }),
      invalidatesTags: ["Brands"],
    }),
    deleteBrand: builder.mutation({
      query: (id) => ({
        url: `admin/brand/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Brands"],
    }),
  }),
});

export const {
  useGetAllBrandQuery,
  useCreateBrandMutation,
  useUpdateBrandMutation,
  useDeleteBrandMutation,
} = brandAPI;
