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
    
    const {state} = useContext(Store)// {state,dispatch}
    const list = state.commentItem

    //javascript로 element를 조작하는 행위 >>DOM
    const Item = list.map ( (v,k)=>{
        return (
            <Comment_Item key ={k} 
                    userid = {v.userid}
                    content = {v.content}
                    date = {v.date}
                    />
        )
    })
    
    
    return(
        <>
            <li>
                {/* {item} */}
                {/* <Comment_Item
                    userid = "web7722"
                    content="뭐햐냐"
                    date = "2021-07-14"
                    /> */}
                {Item}
            
            </li>
        </>
    )
}

export default CommentList