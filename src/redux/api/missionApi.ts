import { baseApi } from "./baseApi";

const missionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create mission
    createMission: build.mutation({
      query: (data) => ({
        url: `missions`,
        method: "POST",
        body: data,
      }),
    }),

    // get all missions
    getMissions: build.query({
      query: () => "missions",
      providesTags: ["Missions"],
    }),
  }),
});

export const { useCreateMissionMutation, useGetMissionsQuery } = missionApi;
