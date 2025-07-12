import { baseApi } from "./baseApi";

const visionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create vision
    createVision: build.mutation({
      query: (data) => ({
        url: `visions`,
        method: "POST",
        body: data,
      }),
    }),

    // get all visions
    getVisions: build.query({
      query: () => "visions",
      providesTags: ["Visions"],
    }),
  }),
});

export const { useCreateVisionMutation, useGetVisionsQuery } = visionApi;
