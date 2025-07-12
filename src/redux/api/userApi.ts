/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create user
    createUser: build.mutation({
      query: (data: any) => {
        return {
          url: `users`,
          method: "POST",
          body: data,
        };
      },
    }),

    // update user
    updateUser: build.mutation({
      query: (data: any) => {
        return {
          url: `users/update`,
          method: "PATCH",
          body: data,
        };
      },
    }),

    // update only profileImage
    updateProfileImage: build.mutation({
      query: (formData: FormData) => ({
        url: "users/profile-img-update",
        method: "PATCH",
        body: formData,
        headers: {
          // Don't set Content-Type, let the browser set it for FormData
        },
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useUpdateUserMutation,
  useUpdateProfileImageMutation,
} = userApi;
