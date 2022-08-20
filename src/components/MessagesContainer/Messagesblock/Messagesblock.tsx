import { UIEvent, useEffect, useRef, useState } from 'react'
import { useAppDispatch } from '../../../hooks/redux'
import { getRandomMessage } from '../../../redux/slice/ActionCreators'
import { setIsNewMessages, setNewMessage } from '../../../redux/slice/chatsSlice'
import { TChatItem, TMessage } from '../../../types/types'
import { InfoMessage } from '../../common/InfoMessage/InfoMessage'
import { Message } from '../Message/Message'
import { NewMessage } from '../NewMessage/NewMessage'
import styles from './Messagesblock.module.scss'


type PropsType = {
    chat: TChatItem
}

export const Messagesblock: React.FC<PropsType> = ({ chat }) => {
    const dispatch = useAppDispatch()

    const anchorElementRef = useRef<HTMLDivElement>(null)
    const [isAutoScroll, setIsAutoscroll] = useState(true)

    const scrollHandler = (e: UIEvent<HTMLDivElement>) => {
        const el = e.currentTarget
        if (el.scrollHeight - el.scrollTop === el.clientHeight) {
            !isAutoScroll && setIsAutoscroll(true)
        } else {
            isAutoScroll && setIsAutoscroll(false)
        }
    }

    useEffect(() => {
        if (isAutoScroll) {
            anchorElementRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }, [chat.messages, chat])

    useEffect(() => {
        if (chat.isNewMessages) {
            dispatch(setIsNewMessages({ chatId: chat.id, IsNewMessages: false }))
        }
    }, [chat])

    const submitHandler = (message: string) => {
        const messageObj: TMessage = {
            date: new Date().toISOString(),
            isOwner: true,
            text: message
        }
        dispatch(setNewMessage({
            id: chat.id,
            messageObj,
        }))

        dispatch(getRandomMessage(chat.id))
    }

    return (
        <div className={styles.container}>
            <div className={styles.messages}
                onScroll={scrollHandler}>
                {chat.messages.length > 0
                    ? chat.messages.map(message => <Message key={message.date.toString()} message={message} avatar={chat.avatar} />)
                    : <InfoMessage>You have no messages with this user. Send your first message!</InfoMessage>}
                <div ref={anchorElementRef} />
            </div>
            <div className={styles.sendBlock}>
                <NewMessage submit={submitHandler} />
            </div>
        </div>
    )
}