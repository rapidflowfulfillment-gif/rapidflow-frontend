import { baseApi } from "./baseApi";

const homeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create home info
    createHome: build.mutation({
      query: (data) => ({
        url: `homes`,
        method: "POST",
        body: data,
      }),
    }),

    // get all home infos
    getHomes: build.query({
      query: () => "homes",
    //   transformResponse: (response: { data: HomeData[] }) => response.data,
      providesTags: ["Homes"],
    }),
  }),
});

export const { useCreateHomeMutation } = homeApi;
