import React ,{useContext,useState} from 'react'
import Store from './store/context'

const CommentForm = () =>{
    console.log('useContext in CommentForm')
    ////const [state,dispatch] = useReducer(reducer, commentItem:[{userid :'web7722',content:'안녕하세요',date: '2021-07-01'}])
    const {state,dispatch} = useContext(Store)//다른 곳에 있는 함수를 사용하고, 찍어보겠다는 내용임.....
    //layout 에서 바로 form 으로 값을 전달한 것. 한 단계 item이 가능하다(?)
    //input 박스 안에 있는 내용을 갖고 와야함. 

    
    const [input,setInput] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('이거 찍힌다냥')
        dispatch({type:'CREATE',payload:{userid:'web7722',content:input,date:'2021-07-14'}})
        setInput('')
    }

    const handleChange = (e) =>{
        const {value} = {...e.target}
        setInput(value)
    }
    
    return(
        <>
            <li className ="comment-form">
                <form onSubmit = {handleSubmit}>
                    <span className = "px_box">
                        <input 
                            type = "text"
                            className = "int"
                            placeholder = "댓글을 입력해주세요"
                            onChange={handleChange}
                            value = {input}
                        />
                    </span>
                    <button 
                        type = "submit" 
                        className = "btn"
                    >
                        등록
                    </button>
                </form>
            </li>
        </>
    )
}

export default CommentForm