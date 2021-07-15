import React,{useContext,useReducer} from 'react'

import Store from './store/context'
import reducer from './store/reducer'

const CommentLayout = ({children}) =>{

    const globalStore = useContext(Store)//initialstate에 있는 상태값이 여기에 넣어진다. 
    console.log('constext vlaue:',globalStore)

    

    const [state,dispatch] = useReducer(reducer,globalStore)//globalStore은 여기서 reducer의 default값임. 
    console.log('state value :',state)
    return(//안의 {}는 객체를 보낼꺼다, 
        <Store.Provider value = {{state,dispatch}}>
            <ul className = "comment">
                {children}
            </ul>
        </Store.Provider>
    )
}

export default CommentLayout