import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
  "x-rapidapi-host": "crypto-news-live.p.rapidapi.com",
  "x-rapidapi-key": "65e03e9425msh1f55818f1b6304dp197306jsn28c4e0b5b099",
};
const baseUrl = "https://crypto-news-live.p.rapidapi.com/news";

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders });
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: (count) => createRequest(`/news?limit=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
