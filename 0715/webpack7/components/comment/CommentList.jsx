import React,{useContext} from 'react'
import Comment_Item from './Comment_Item'
import Store from './store/context'

const CommentList = () =>{
    // const list = [
    // {userid:"web7722",content:"안녕하세요1", date : "2021-07-14"},
    // {userid:"web7722",content:"안녕하세요1", date : "2021-07-14"},
    // {userid:"web7722",content:"안녕하세요1", date : "2021-07-14"},
    // {userid:"web7722",content:"안녕하세요1", date : "2021-07-14"},
    // {userid:"web7722",content:"안녕하세요1", date : "2021-07-14"},
    // {userid:"web7722",content:"안녕하세요1", date : "2021-07-14"},
    // ]


    ////const [state,dispatch] = useReducer(reducer, commentItem:[{userid :'web7722',content:'안녕하세요',date: '2021-07-01'}])
    const {state} = useContext(Store)
    const list = state.commentItem
    const {loadding,commentItem,error} = state
    console.log('여기됨')
    if(loadding) return <li>나 로딩중...</li>;
    if(error) return <li>에러남</li>;
    const Item = list.map ( (v,k)=>{
        //key값은 안보내진다. props값이 아니어서
        return (
            <Comment_Item 
                    key ={k} 
                    userid = {v.userid}
                    content = {v.content}
                    date = {v.date}
                    index ={k}
                    />
        )
    })
    
    return(
        <>
            <li>
                {Item}
            </li>
        </>
    )
}

export default CommentList