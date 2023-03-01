import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'http://127.0.0.1:8000';
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });

export const api = createApi({
  baseQuery: baseQueryWithRetry,
  reducerPath: 'Questions',
  endpoints: () => ({}),
});

export const questionWithTags = api.enhanceEndpoints({
  addTagTypes: ['Questions'],
});
