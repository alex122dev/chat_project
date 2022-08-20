import { Navigate } from 'react-router-dom'
import { MyButton } from '../../components/common/MyButton/MyButton'
import { Preloader } from '../../components/common/Preloader/Preloader'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { loginUser } from '../../redux/slice/ActionCreators'
import styles from './LoginPage.module.scss'

export const LoginPage = () => {
    const dispatch = useAppDispatch()
    const isFetching = useAppSelector(state => state.appRD.isFetching)
    const isAuthorization = useAppSelector(state => state.appRD.isAuthorization)


    const login = () => {
        dispatch(loginUser())
    }

    if (isAuthorization) {
        return <Navigate to='/home' />
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Please log in to use the app</h3>
            <MyButton disabled={isFetching} className={styles.btn} onClick={login}>Log-in with Google</MyButton>
            {isFetching && <Preloader />}
        </div>
    )
}
