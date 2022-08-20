import cn from 'classnames'
import { TAvatar, TMessage } from '../../../types/types'
import { DateFormatWithTime } from '../../../utils/DateFormat'
import { Avatar } from '../../common/Avatar/Avatar'
import styles from './Message.module.scss'

type PropsType = {
    message: TMessage
    avatar: TAvatar
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Message: React.FC<PropsType> = ({ message, avatar }) => {
    const date = DateFormatWithTime(new Date(message.date))

    return (
        <div className={cn(styles.container, { [styles.owner]: message.isOwner })}>
            {!message.isOwner && <Avatar photo={avatar} />}
            <div className={styles.content}>
                <p className={styles.text}>
                    {message.text}
                </p>
                <p className={styles.date}>
                    {date}
                </p>
            </div>
        </div>
    )
}