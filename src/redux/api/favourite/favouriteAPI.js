import apiCreator from "../apiCreator";

const favouriteAPI = apiCreator.injectEndpoints({
  endpoints: (builder) => ({
    getMyFavouriteList: builder.query({
      query: () => ({
        url: `favourite`,
      }),
      providesTags: ["getMyFavouriteList"],
    }),

    addToFavouriteList: builder.mutation({
      query: (data) => ({
        url: `favourite/add`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getMyFavouriteList"],
    }),

    removeToFavouriteList: builder.mutation({
      query: (data) => ({
        url: `favourite/remove`,
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["getMyFavouriteList"],
    }),
  }),
});

export const {
  useGetMyFavouriteListQuery,
  useAddToFavouriteListMutation,
  useRemoveToFavouriteListMutation,
} = favouriteAPI;
