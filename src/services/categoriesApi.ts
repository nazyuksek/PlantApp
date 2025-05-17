import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from './constants';
import {CategoryResponse} from 'src/models/Category';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    getCategories: builder.query<CategoryResponse, void>({
      query: () => 'getCategories',
    }),
  }),
});

export const {useGetCategoriesQuery} = categoriesApi;
