import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type TAppState = {
    isAuthorization: boolean
    userName: string
    userImage: string
    isFetching: boolean
    isInit: boolean
}

const initialState: TAppState = {
    isAuthorization: false,
    userName: '',
    userImage: '',
    isFetching: true,
    isInit: false
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsAuthorization: (state, action: PayloadAction<boolean>) => {
            state.isAuthorization = action.payload
        },
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload
        },
        setUserImage: (state, action: PayloadAction<string>) => {
            state.userImage = action.payload
        },
        setIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        setIsInit: (state, action: PayloadAction<boolean>) => {
            state.isInit = action.payload
        },
    }
})

export const { setIsAuthorization, setUserName, setUserImage, setIsFetching, setIsInit } = appSlice.actions

export const appReducer = appSlice.reducer
