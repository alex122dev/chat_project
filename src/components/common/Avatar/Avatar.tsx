import styles from './Avatar.module.scss'
import photoPlaceholder from '../../../assets/img/photoPlaceholder.png'
import onlinePng from '../../../assets/icons/success.svg'

type TAvatar = {
    photo?: string
    isOnline?: boolean
    isNewMessages?: boolean
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Avatar: React.FC<TAvatar> = ({ photo, className, isOnline, isNewMessages }) => {

    return (
        <div className={[styles.avatar, className].join(' ')}>
            <img className={styles.photo} src={photo ? photo : photoPlaceholder} alt="avatar" />
            {isOnline &&
                <img className={styles.online} src={onlinePng} alt="online" />}
            {isNewMessages && <span className={styles.newMessages} />}
        </div>
    )
}