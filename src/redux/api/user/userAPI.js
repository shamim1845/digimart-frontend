import apiCreator from "../apiCreator";

const userAPI = apiCreator.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: `admin/users`,
      }),
      providesTags: ["getAllUsers"],
    }),
    getSingleUser: builder.query({
      query: (id) => ({
        url: `admin/user/${id}`,
      }),
    }),
    updateUserRole: builder.mutation({
      query: ({ id, data }) => ({
        url: `admin/user/role/${id}`,
        body: data,
        method: "PUT",
      }),
      invalidatesTags: ["getAllUsers"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `admin/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getAllUsers"],
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: "admin/createUser",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["getAllUsers"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useUpdateUserRoleMutation,
  useDeleteUserMutation,
  useCreateUserMutation,
} = userAPI;
