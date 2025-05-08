import apiCreator from "../apiCreator";

const analyticsAPI = apiCreator.injectEndpoints({
    endpoints: (builder) => ({
        getAnalytics: builder.query({
            query: (query) => ({
                url: `admin/analytics?${query}`,
            }),
            providesTags: ["getAnalytics"]
        }),
    }),
});

export const {
    useGetAnalyticsQuery,
} = analyticsAPI;
