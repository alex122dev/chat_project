import { Navigate } from "react-router-dom"
import { MessagesContainer } from "../../components/MessagesContainer/MessagesContainer"
import { Navblock } from "../../components/Navblock/Navblock"
import { useAppSelector } from "../../hooks/redux"


export const HomePage = () => {
    const isAuthorization = useAppSelector(state => state.appRD.isAuthorization)

    if (!isAuthorization) {
        return <Navigate to={'/login'} />
    }

    return (
        <>
            <Navblock />
            <MessagesContainer />
        </>
    )
}