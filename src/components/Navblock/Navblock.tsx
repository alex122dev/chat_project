import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { sortLastMessageDate } from "../../utils/SortFunc"
import { ChatItem } from "./ChatItem/ChatItem"
import { Avatar } from "../common/Avatar/Avatar"
import { InfoMessage } from "../common/InfoMessage/InfoMessage"
import { Search } from "../common/Search/Search"
import exitImg from '../../assets/icons/exit.svg'
import styles from './Navblock.module.scss'
import { logoutUser } from "../../redux/slice/ActionCreators"

export const Navblock = () => {
    const chats = useAppSelector(state => state.chatsRD.chats)
    const dispatch = useAppDispatch()
    const userName = useAppSelector(state => state.appRD.userName)
    const userImage = useAppSelector(state => state.appRD.userImage)
    const sortList = [...chats].sort(sortLastMessageDate)
    const [chatsList, setChatsList] = useState(sortList)

    useEffect(() => {
        setChatsList(sortList)
    }, [chats])

    const logout = () => {
        dispatch(logoutUser())
    }

    const searchHandler = (str: string) => {
        if (!str) {
            setChatsList(sortList)
        } else {
            const sortChats = chats.filter(el => el.name.toLowerCase().match(str.toLowerCase()))
            setChatsList(sortChats)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.topBlock}>
                <div className={styles.userBlock}>
                    <Avatar isOnline={true} photo={userImage} className={styles.avatar} />
                    <p className={styles.userName}>{userName}</p>
                    <button onClick={logout} className={styles.exitBtn}>
                        <img src={exitImg} alt="exit" />
                    </button>
                </div>
                <Search listener={searchHandler} />
            </div>
            <div className={styles.chatsBlock}>
                <h3 className={styles.chatTitle}>Chats</h3>
                <div className={styles.chatList}>
                    {chatsList.map(chat => <ChatItem key={chat.id} item={chat} />)}
                    {chatsList.length === 0 && <InfoMessage>No matches found</InfoMessage>}
                </div>
            </div>
        </div>
    )
}