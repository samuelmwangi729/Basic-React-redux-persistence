import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { login, logout, selectUser } from '../redux/userSlice'

const Body: React.FC = () => {
    const { loggedIn } = useAppSelector(selectUser)
    const dispatch = useAppDispatch()
    const handleClick = () => {
        //dispatch the login if the variable is true
        if (loggedIn) {
            //if logged in, dispatch logout
            dispatch(logout())
        } else {
            let data = {
                "user": "samuel",
                "token": "sample-token",
                "email": "sample@email.com"
            }
            dispatch(login(data))
        }
    }
    return (
        <div>
            <button className='login-button' onClick={handleClick}>
                {loggedIn ? "Logout" : "login"}
            </button>
            This is the body content
        </div>
    )
}

export default Body
