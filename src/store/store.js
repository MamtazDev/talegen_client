import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/userapi";
import counterReducer from "../store/redux/countslice"


export const store = configureStore({
    reducer: {
            [userApi.reducerPath] : userApi.reducer,
            counter: counterReducer,

    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(userApi.middleware)
    }
})