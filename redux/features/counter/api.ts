import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const counterApi = createApi({
  reducerPath: "counterApi  ",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getCounter: builder.query({ query: () => "/counter" }),
  }),
});

export const { useGetCounterQuery } = counterApi;
