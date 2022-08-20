import { ChangeEvent, useState } from 'react'
import searchImg from '../../../assets/icons/search.svg'
import styles from './Search.module.scss'

type PropsType = {
    listener?: (value: string) => void
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Search: React.FC<PropsType> = ({ className, listener }) => {
    const [search, setSearch] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
        if (listener) {
            listener(e.currentTarget.value)
        }
    }

    return (
        <div className={[styles.search, className].join(' ')}>
            <input className={styles.input} type="text"
                placeholder='Search or start new chat'
                value={search}
                onChange={onChangeHandler} />
            <button
                onClick={() => console.log(search)}
                className={styles.btn}>
                <img src={searchImg} alt="search" />
            </button>
        </div >
    )
}