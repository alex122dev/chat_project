import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { InfoMessage } from '../common/InfoMessage/InfoMessage'
import { Messagesblock } from './Messagesblock/Messagesblock'
import arrowBack from '../../assets/icons/arrow-back.svg'
import styles from './MessagesContainer.module.scss'
import { Avatar } from '../common/Avatar/Avatar'
import cn from 'classnames'
import { setActiveChat } from '../../redux/slice/chatsSlice'


export const MessagesContainer = () => {
    const activeChat = useAppSelector(state => state.chatsRD.activeChat)
    const chats = useAppSelector(state => state.chatsRD.chats)
    const chat = chats.find(el => el.id === activeChat)
    const dipsatch = useAppDispatch()

    const isNewMessage = chats.some(chat => chat.isNewMessages === true)

    const backHandler = () => {
        dipsatch(setActiveChat(0))
    }

    return (
        <div className={cn(styles.container, { [styles.active]: activeChat !== 0 })}>
            <div className={styles.topBlock}>
                <Avatar isOnline={chat?.isOnline} photo={chat?.avatar} />
                <p className={styles.name}>{chat?.name}</p>
                <button className={styles.arrowBack}
                    onClick={backHandler}>
                    <img src={arrowBack} alt="arrow-back" />
                    {isNewMessage && <span className={styles.newMessages} />}
                </button>
            </div>
            {chat
                ? <Messagesblock chat={chat} />
                : <div className={styles.info}>
                    <InfoMessage>Сhoose a chat for communication</InfoMessage>
                </div>}
        </div>
    )
}