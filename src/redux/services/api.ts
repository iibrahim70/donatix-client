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

    getTopDonors: builder.query({
      query: () => ({
        url: "/donation-transactions/leaderboard",
        method: "GET",
      }),
    }),

    addTestimonial: builder.mutation({
      query: (data) => ({
        url: "/testimonials/create-testimonial",
        method: "POST",
        body: data,
      }),
    }),

    addDonation: builder.mutation({
      query: (data) => ({
        url: "/donations/create-donation",
        method: "POST",
        body: data,
      }),
    }),

    addDonationTransaction: builder.mutation({
      query: (data) => ({
        url: "/donation-transactions/donate",
        method: "POST",
        body: data,
      }),
    }),

    getMonthlyTotalDonationsForYear: builder.mutation({
      query: (year) => ({
        url: "/donation-transactions/monthly-total-donations-for-year",
        method: "POST",
        body: { year: year },
      }),
    }),
  }),
});

export const {
  useGetDonationsQuery,
  useGetTopDonorsQuery,
  useAddTestimonialMutation,
  useAddDonationMutation,
  useAddDonationTransactionMutation,
  useGetMonthlyTotalDonationsForYearMutation,
} = baseApi;
