import apiCreator from "../apiCreator";

const categoryAPI = apiCreator.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: () => ({
        url: `categories`,
      }),
      providesTags: ["Categories"],
    }),
    getAdminCategory: builder.query({
      query: () => ({
        url: `admin/categories`,
      }),
      providesTags: ["AdminCategories"],
    }),
    createCategory: builder.mutation({
      query: (category) => ({
        url: "admin/categories",
        method: "POST",
        body: category,
      }),
      invalidatesTags: ["Categories", "AdminCategories"],
    }),
    updateCategory: builder.mutation({
      query: ({ id, category }) => ({
        url: `admin/categories/${id}`,
        method: "PUT",
        body: category,
      }),
      invalidatesTags: ["Categories", "AdminCategories"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `admin/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories", "AdminCategories"],
    }),
  }),
});

export const {
  useGetAllCategoryQuery,
  useGetAdminCategoryQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryAPI;
