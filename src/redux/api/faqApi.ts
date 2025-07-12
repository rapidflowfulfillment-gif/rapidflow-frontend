// import { FaqData } from "@/components/faq-manager";
import { baseApi } from "./baseApi";

// baseFaqApi.ts or faqApi.ts
const faqApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all faqs
    getFaqs: build.query({
      query: () => "faqs",
      providesTags: ["Faqs"],
    }),

    // create faq
    createFaq: build.mutation({
      query: (data) => ({
        url: `faqs`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Faqs"],
    }),

    // update faq
    updateFaq: build.mutation({
      query: (data) => ({
        url: `faqs/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Faqs"],
    }),

    // delete faq
    deleteFaq: build.mutation({
      query: (id) => ({
        url: `faqs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Faqs"],
    }),
  }),
});

export const {
  useGetFaqsQuery,
  useCreateFaqMutation,
  useUpdateFaqMutation,
  useDeleteFaqMutation,
} = faqApi;
