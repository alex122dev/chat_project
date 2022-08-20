import cn from "classnames"
import styles from './MyButton.module.scss'

type PropsType = {

} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const MyButton: React.FC<PropsType> = ({ children, className, ...props }) => {
    return (
        <button {...props}
            className={cn(styles.btn, {
                [className as string]: className,
            })}>
            {children}
        </button>
    )
}