import React,{useContext} from 'react'
import Store from './store/context'

const CommentForm =()=>{
    const {state,dispatch} = useContext(Store)
    const handleSubmit = e => { // dispatch
        e.preventDefault()
        dispatch({type:'SUBMIT'})
    }
    const handleChange = e => { // evnet dispatch 
        const {value} = {...e.target}
        dispatch({type:'CHANGE',payload:value})
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={state.input} />
            <button type="submit">등록</button>
        </form>
    )
}

export default CommentForm