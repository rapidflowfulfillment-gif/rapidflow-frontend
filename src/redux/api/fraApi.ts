import { baseApi } from "./baseApi";

const fraApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create fra
    createFra: build.mutation({
      query: (data) => ({
        url: `fras`,
        method: "POST",
        body: data,
      }),
    }),

    // get all fras
    getFras: build.query({
      query: () => "fras",
      providesTags: ["Fras"],
    }),
  }),
});

export const { useCreateFraMutation, useGetFrasQuery } = fraApi;
