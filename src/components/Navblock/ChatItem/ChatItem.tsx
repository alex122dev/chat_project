import cn from 'classnames'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { setActiveChat } from '../../../redux/slice/chatsSlice'
import { TChatItem } from '../../../types/types'
import { DateFormatShort } from '../../../utils/DateFormat'
import { Avatar } from '../../common/Avatar/Avatar'
import styles from './ChatItem.module.scss'

type PropsType = {
    item: TChatItem
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const ChatItem: React.FC<PropsType> = ({ item }) => {
    const lastMessage = item.messages.slice(-1)[0];

    const dispatch = useAppDispatch()
    const activeChat = useAppSelector(state => state.chatsRD.activeChat)

    const clickHandler = () => {
        dispatch(setActiveChat(item.id))
    }

    const date = lastMessage ? DateFormatShort(new Date(lastMessage.date)) : ''

    return (
        <div onClick={clickHandler}
            className={cn(styles.container, { [styles.active]: item.id === activeChat })}>
            <Avatar isNewMessages={item.isNewMessages} isOnline={item.isOnline} className={styles.avatar} photo={item.avatar} />
            <div className={styles.content}>
                <div className={styles.topBlock}>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.date}>{date}</p>
                </div>
                <p className={styles.text}>{lastMessage ? lastMessage.text : ''}</p>
            </div>
        </div>
    )
}