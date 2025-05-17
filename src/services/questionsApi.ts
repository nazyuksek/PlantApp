import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Question} from 'src/models/Question';
import {BASE_URL} from './constants';

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    getQuestions: builder.query<Question[], void>({
      query: () => 'getQuestions',
    }),
  }),
});

export const {useGetQuestionsQuery} = questionsApi;
