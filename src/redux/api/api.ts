import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://givers-heaven-server.vercel.app/api/v1",
  }),
  endpoints: (builder) => ({
    getDonations: builder.query({
      query: () => ({
        url: "/donations",
        method: "GET",
      }),
    }),
    getDonationTransactionByYear: builder.mutation({
      query: (year) => ({
        url: "/donations/yearly-total",
        method: "POST",
        body: { year: year },
      }),
    }),
  }),
});

export const { useGetDonationsQuery, useGetDonationTransactionByYearMutation } =
  baseApi;
