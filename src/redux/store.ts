import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./slice/appSlice";
import { chatsReducer } from "./slice/chatsSlice";


export const store = configureStore({
    reducer: {
        chatsRD: chatsReducer,
        appRD: appReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch