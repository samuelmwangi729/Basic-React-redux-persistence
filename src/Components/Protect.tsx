import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../redux/hooks'
import { selectUser } from '../redux/userSlice'

const Protect: React.FC<{ children: ReactNode }> = ({ children }) => {
    const user = useAppSelector(selectUser)
    //you will be getting the values from the cookies, if not, persist to the store
    if (!user.loggedIn) {
        return <Navigate to="/" replace />
    }
    return children
}

export default Protect
