import { useRef, useState } from 'react'
import styles from './NewMessage.module.scss'
import sendImg from '../../../assets/icons/send.svg'

type PropsType = {
    submit: (m: string) => void
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const NewMessage: React.FC<PropsType> = ({ className, submit }) => {
    const [message, setMessage] = useState<string | null>('')
    const textAreaRef = useRef<HTMLDivElement>(null)

    const submitHandler = () => {
        if (textAreaRef.current && textAreaRef.current.textContent && message) {
            submit(message)
            setMessage('')
            textAreaRef.current.innerText = ''
        }
    }
    return (
        <div className={[styles.container, className].join(' ')}>
            <div contentEditable
                ref={textAreaRef}
                onInput={(e) => setMessage(e.currentTarget.textContent)}
                className={styles.textarea}
                placeholder='Type your message'
                onKeyDown={(e) => {
                    if (e.keyCode === 13 && e.shiftKey === false) {
                        e.stopPropagation();
                        e.preventDefault();

                        submitHandler()
                    }
                }}
            />
            <button
                onClick={submitHandler}
                className={styles.btn}>
                <img src={sendImg} alt="search" />
            </button>
        </div>
    )
}