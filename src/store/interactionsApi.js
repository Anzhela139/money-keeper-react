import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const interactionsApi = createApi({
    reducerPath: "interactionsApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: "/",
    }),
    endpoints: (builder) => ({
        getInteractions: builder.query({
            query: () => "interactions",
        }),
        getInteractionById: builder.query({
            query: ({
                id
            }) => `interactions/${id}`,
        }),
    }),
});

export const { useGetInteractionsQuery, useGeInteractionByIdQuery } = interactionsApi;