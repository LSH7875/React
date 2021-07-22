import React,{useReducer} from 'react'

const CommentForm =(props)=>{
    const reducer = props.reducer;
    console.log('reducer')
    const dispatch = props.dispatch
    const state = props.state
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