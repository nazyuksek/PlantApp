import {categoriesApi} from 'src/services/categoriesApi';
import {questionsApi} from 'src/services/questionsApi';

export const apiReducers = {
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [questionsApi.reducerPath]: questionsApi.reducer,
};

export const apiMiddleware = [
  categoriesApi.middleware,
  questionsApi.middleware,
];
