
import {useEffect } from 'react'
import Router from 'next/router'
import {useDispatch}from 'react-redux'
import {UserLogoutAction} from '../../reducers/user.js'

const logout = ()=>{
    console.log('logout')
    const dispatch =useDispatch()
    useEffect(()=>{
        dispatch(UserLogoutAction())
        setTimeout(()=>{
            Router.push('/')
        },1000)
    },[])

    return(
        <>
        logout...
        </>
    )
}

export default logout