import {   createApi, fetchBaseQuery  } from "@reduxjs/toolkit/query/react";

export const  userApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),

    endpoints: (builder) => ({
        users: builder.query({
            query : () => '/users',
        }),
    }),

});


export const { useUsersQuery } = userApi;