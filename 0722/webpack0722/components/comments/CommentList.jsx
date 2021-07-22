import React,{useContext} from 'react'
import Store from './store/context'
const CommentList =()=>{
    const {state,dispatch} = useContext(Store)
    const [content,setContent] = React.useState('')


    

    const handleClick = (index) => {
        dispatch({type:'DELETE',payload:index})
    }

    const visibleContent = (index) => {
        dispatch({type:'VISIBLE',payload:index})
        setContent(state.list[index])
    }

    const visibleChange = e => {
        console.log(e.target.value)
        const {value} = {...e.target}
        setContent(value)
    }

    const visibleEnter = e => {
        const {key} = {...e.target.dataset}
        if(e.key === 'Enter'){
            dispatch({
                type:'VISIBLEENTER',payload: {
                    key:key,
                    content:content
                }
            })
        }
    }


    return(
        <ul>
            {
            state.list.map((v,k)=>{
                return (
                    <li key={k}>
                        <span onClick={()=>visibleContent(k)}>
                            {
                                state.visible === k
                                ? <input 
                                    type="text"
                                    value={content} 
                                    onKeyDown={visibleEnter} 
                                    onChange={visibleChange}
                                    data-key={k}
                                    />
                                : v
                            }
                        </span>
                        <button onClick={()=>handleClick(k)}>X</button>
                    </li>
                    )
                })
            }
        </ul>
    )
}

export default CommentList


