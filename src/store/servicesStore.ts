import {configureStore} from '@reduxjs/toolkit';
import {categoriesApi} from 'src/services/categoriesApi';
import {questionsApi} from 'src/services/questionsApi';

export const servicesStore = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [questionsApi.reducerPath]: questionsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(categoriesApi.middleware)
      .concat(questionsApi.middleware),
});

export type RootState = ReturnType<typeof servicesStore.getState>;
export type AppDispatch = typeof servicesStore.dispatch;
