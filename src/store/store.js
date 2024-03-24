import { configureStore } from '@reduxjs/toolkit';
import interactionsSlice from './interactionsSlice';
import usersSlice from './usersSlice';
import { interactionsApi } from "./interactionsApi";
import { usersApi } from "./usersApi";
import { setupListeners } from "@reduxjs/toolkit/query/react";

export const store = configureStore({
    reducer: {
        interactions: interactionsSlice,
        [interactionsApi.reducerPath]: interactionsApi.reducer,
        users: usersSlice,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([interactionsApi.middleware]).concat([usersApi.middleware]),
});

setupListeners(store.dispatch);
