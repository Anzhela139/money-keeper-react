import { configureStore } from '@reduxjs/toolkit';
import interactionsSlice from './interactionsSlice';
import { interactionsApi } from "./interactionsApi";
import { setupListeners } from "@reduxjs/toolkit/query/react";

export const store = configureStore({
    reducer: {
        interactions: interactionsSlice,
        [interactionsApi.reducerPath]: interactionsApi.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([interactionsApi.middleware]),
});

setupListeners(store.dispatch);
