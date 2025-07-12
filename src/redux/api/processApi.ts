import { baseApi } from "./baseApi";

const processApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create process
    createProcess: build.mutation({
      query: (data) => ({
        url: `our-process`,
        method: "POST",
        body: data,
      }),
    }),

    // get all processes
    getProcesses: build.query({
      query: () => "our-process",
      providesTags: ["Processes"],
    }),
  }),
});

export const { useCreateProcessMutation, useGetProcessesQuery } = processApi;
