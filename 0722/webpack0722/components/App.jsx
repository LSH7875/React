import React,{useContext,createContext,useReducer} from 'react'
import reducer from './comments/store/reducer'
import CommentForm from './comments/CommentForm'
import CommentList from './comments/CommentList'
import Store from './comments/store/context'


const App = () => {
    
    const globalStore = useContext(Store)
    const [state,dispatch] = useReducer(reducer,globalStore)

    return (
        <Store.Provider value ={{state,dispatch}}>
            <CommentForm/>
            <CommentList/>
        </Store.Provider>
    )
}


export default App