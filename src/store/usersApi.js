import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath: "usersApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: "/",
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "users",
        }),
        getUserById: builder.query({
            query: ({
                id
            }) => `users/${id}`,
        }),
    }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi;