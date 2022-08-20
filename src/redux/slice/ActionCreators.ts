import { messageAPI } from "../../api/api";
import { TMessage } from "../../types/types";
import { timeout } from "../../utils/Timeout";
import { AppDispatch } from "../store";
import { setIsAuthorization, setIsFetching, setIsInit, setUserImage, setUserName } from "./appSlice";
import { setIsNewMessages, setNewMessage } from "./chatsSlice";


export const getRandomMessage = (id: number) => async (dispatch: AppDispatch) => {
    try {
        await timeout(15000 * Math.random())

        const data = await messageAPI.getRandomMessage()

        const messageObj: TMessage = {
            date: new Date().toISOString(),
            isOwner: false,
            text: data.value
        }

        dispatch(setNewMessage({ id, messageObj }))
        dispatch(setIsNewMessages({ chatId: id, IsNewMessages: true }))
    } catch (error) {

    }
}

export const initUser = () => (dispatch: AppDispatch) => {
    window.gapi.load('auth2', function () {
        window.gapi.auth2.init({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            //@ts-ignore
            plugin_name: 'chat'
        }).then(() => {
            dispatch(setIsInit(true))
            dispatch(setIsFetching(true))
            const GoogleAuth = window.gapi.auth2.getAuthInstance()
            const isSignedIn = GoogleAuth.isSignedIn.get()
            dispatch(setIsAuthorization(isSignedIn))

            if (isSignedIn) {
                const GoogleUser = GoogleAuth.currentUser.get()
                const userName = GoogleUser.getBasicProfile().getName()
                const avatar = GoogleUser.getBasicProfile().getImageUrl()
                dispatch(setUserName(userName))
                dispatch(setUserImage(avatar))
            }
            dispatch(setIsFetching(false))
        })
    })
}

export const loginUser = () => (dispatch: AppDispatch) => {
    dispatch(setIsFetching(true))
    const GoogleAuth = window.gapi.auth2.getAuthInstance()

    GoogleAuth.signIn({
        scope: 'profile email'
    }).then((GoogleUser) => {
        dispatch(setIsAuthorization(true))
        const userName = GoogleUser.getBasicProfile().getName()
        const avatar = GoogleUser.getBasicProfile().getImageUrl()
        dispatch(setUserName(userName))
        dispatch(setUserImage(avatar))
        dispatch(setIsFetching(false))
    }, (e) => console.log('some error occured', e))
}

export const logoutUser = () => (dispatch: AppDispatch) => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance()
    dispatch(setIsFetching(true))
    GoogleAuth.signOut().then(() => {
        dispatch(setIsAuthorization(false))
        dispatch(setUserName(''))
        dispatch(setUserImage(''))
        dispatch(setIsFetching(false))
    }, () => console.log('some error occured'))
}