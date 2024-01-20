import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articleApi = createApi({
  reducerPath: "articleApi",
  endpoints(build) {
    getSummary: build.query({
      query(arg) {
        return;
        ("test");
      },
    });
  },
});
