import { TestimonialData } from "@/components/testimonial-manager";
import { baseApi } from "./baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create testimonial
    createTestimonial: build.mutation<TestimonialData, FormData>({
      query: (FormData) => ({
        url: `testimonials`,
        method: "POST",
        body: FormData,
      }),
    }),

    // get all testimonials
    getTestimonials: build.query({
      query: () => "testimonials",
      providesTags: ["Testimonials"],
    }),
  }),
});

export const { useCreateTestimonialMutation, useGetTestimonialsQuery } =
  testimonialApi;
