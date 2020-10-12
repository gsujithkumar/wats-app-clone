import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'
import { actionTypes } from './Reducer'
import { useStateValue } from './StateProvider'

function Login() {
    const [{}, dispatch] = useStateValue();
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result)=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        })
        .catch((error)=>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn4.iconfinder.com/data/icons/miu-square-flat-social/60/whatsapp-square-social-media-512.png" alt=""/>
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button  onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login
