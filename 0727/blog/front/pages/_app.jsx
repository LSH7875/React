import'../index.css'
import Head from 'next/head'
import Store ,{initialState} from './store/context'
import {useReducer,useContext} from 'react'
import reducer from '../pages/store/reducer'
const App=({Component})=>{
    const globalContext=useContext(Store)
    const [state,dispatch] = useReducer(reducer,globalContext)
    return (
        <>
        <Head>
            <link/>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap" rel="stylesheet"/>
        </Head>
        <Store.Provider value ={state,dispatch}/>
            <Component/>/{/*우리가 만든 모든 것이 components에 위치한다.  */}
        <Store.Provider/>
        </>
    )
}
export default App