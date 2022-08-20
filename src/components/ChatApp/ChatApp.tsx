import { useCallback, useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { HomePage } from "../../pages/HomePage/HomePage"
import { LoginPage } from "../../pages/LoginPage/LoginPage"
import { initChats, initActiveChat } from "../../redux/slice/chatsSlice"

export const ChatApp = () => {

    const dispatch = useAppDispatch()
    const activeChat = useAppSelector(state => state.chatsRD.activeChat)
    const chats = useAppSelector(state => state.chatsRD.chats)

    const saveToLocal = useCallback(() => {
        localStorage.setItem('chats', JSON.stringify(chats))
        localStorage.setItem('activeChat', activeChat.toString())
    }, [chats, activeChat])

    useEffect(() => {
        window.addEventListener('beforeunload', saveToLocal)
        return () => {
            window.removeEventListener('beforeunload', saveToLocal)
        }
    }, [saveToLocal])

    useEffect(() => {
        const userChats = localStorage.getItem('chats')
        if (userChats) {
            dispatch(initChats(JSON.parse(userChats)))
        }

        const userChat = localStorage.getItem('activeChat')
        if (userChat) {
            dispatch(initActiveChat(Number(userChat)))
        }
    }, [])

    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path='/*' element={<Navigate to={'/home'} />} />
        </Routes>
    )
}