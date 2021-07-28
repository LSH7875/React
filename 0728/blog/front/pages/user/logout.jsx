import Store from '../../store/context'
import { useContext,useEffect } from 'react'
import Router from 'next/router'


export const logout = ()=>{

    const {dispatch}=usecontext(Store)
    useEffect(()=>{
        dispatch({type:'LOGOUT'})
        setTimeout(()=>{
            Router.back()
        },1000)
    },[])

    return(
        <>
        logout...
        </>
    )
}