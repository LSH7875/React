import React ,{useContext,useState} from 'react'
import Store from './store/context'
const Comment_Item = ({userid,content,date,index}) =>{

    const {state,dispatch} = useContext(Store)
    const [input,setInput] = useState('')

    const handleDelete =()=>{
        dispatch({type:'DELETE',payload:index})
        setInput('')
    }

    const handleClick = ()=>{
        setInput(content)
    }

    const handleChange = e=>{
        const {value}= {...e.target}
        setInput(value)
    }

    const handleKeyDown = e => {
        console.log(e.key)//Enter
        if(e.key==='Enter'){
            dispatch({
                type:"UPDATE",
                payload:{index,content:input}
            })
            setInput('')
        }
    }

    return(
        <>
            <ul className = "comment-row">
                <li className = "comment-row">{userid}</li>
                <li className = "comment-content">
                    <span onClick={handleClick}>
                        {/* {content} */}
                        {input 
                        ? 
                            <input 
                                type = "text" 
                                value ={input} 
                                onKeyDown = {handleKeyDown}
                                onChange = {handleChange} 
                                className = "comment-update-input"
                            />
                        : content}
                    </span>
                    <span   className = "commnet-delete-btn"
                            onClick={handleDelete}
                    >
                        X
                    </span>
                </li>
                <li classname = "comment-date"> {date}</li>
            </ul>
        </>
    )
}
//삼항연산자 써서 빈 값일때는 기본값 쓰는거 한번 해보기
export default Comment_Item