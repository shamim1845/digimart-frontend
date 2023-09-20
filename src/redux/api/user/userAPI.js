import apiCreator from "../apiCreator";

const userAPI = apiCreator.injectEndpoints({
  endpoints: (builder) => ({
    getUserLoggedIn: builder.query({
      query: () => ({
        url: `loggedin`,
      }),
    }),
  }),
});

export const { useGetUserLoggedInQuery } = userAPI;
