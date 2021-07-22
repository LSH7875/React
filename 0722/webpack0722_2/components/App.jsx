import React,{useContext,createContext,useReducer} from 'react'
import reducer from '../components/comments/store/reducer'
import CommentForm from './comments/CommentForm'
import CommentList from './comments/CommentList'


const App = () => {
    const globalStore = {
        input:'',
        list:[],
        visible:Infinity,
    }
    const [state,dispatch] = useReducer(reducer,globalStore)
 

    return (
        <>
            <CommentForm dispatch={dispatch} state={state}/>
            <CommentList dispatch={dispatch} state={state}/>
        </>
    )
}


export default App