import React from 'react'
import {postComment} from '../api/api'


//dispatch에서 바꿀 정보를 받아야 함=>action
//reducer는 결국 상태를 바꿔야하기 때문에 이전 상태값을 가져와야 함.
//결구구 얜 리턴을 해줘야함 >> 바뀐 state값
const reducer = (state,action) =>{
    switch(action.type){
        
        case "GET_COMMENT"://최초 실행하였을 때,
        case "POST_COMMENT":
        console.log('comment')
            return {
                ...state,
                loadding:true
            }
        case "POST_COMMENT_SUCCESS":
            return {
                ...state,
                loadding:false,
                commentItem:[...state.commentItem,action.payload]
            }
        case "GET_COMMENT_SUCCESS":
            console.log('코멘트성공')
            return {
                ...state,
                loadding:false,
                commentItem:action.payload
                }
        case "POST_COMMENT_FAILED":
        case "GET_COMMENT_FAILED":
            return {
                ...state,
                loadding:false,
                error:action.payload
            }
        case "CREATE":
            postComment(action.payload)
            return {...state,commentItem:[...state.commentItem,action.payload]}
        case "UPDATE":
            // console.log('update들어옴')
            // console.log(action)
            // // let index = action.payload.index;
            // // let content = action.payload.content;
            // // let {payload:{content,index}} = action;


            // let {content,index} = {...action.payload}
            // let {commentItem} = {...state}
            // commentItem[index].content = content
            // return {
            //     ...state,
            //     commentItem:[...commentItem]
            // }

            let content = action.payload.content;
            let index = action.payload.index;
            let commentItem = state.commentItem;
            console.log('state')
            console.log(state)
            console.log('commentItem');
            console.log(commentItem);
            console.log('commentItem[index]');
            console.log(commentItem[index]);
            console.log('commentItem[index].content')//원래 있던 값
            console.log(commentItem[index].content)
            console.log('content')//수정한값
            console.log(content)
            commentItem[index].content = content
            return {
                // ...state,
                // commentItem:[...commentItem]
                commentItem
            }




        case "DELETE":
            console.log('인덱스cone?',action.payload);
            console.log(state.commentItem)

            let newArr=[]
            for (let i = 0 ; i <state.commentItem.length;i++){
                if( i !==action.payload) newArr.push(state.commentItem[i])
            }


            console.log('newArr')
            console.log(newArr)
            console.log('state.commentItem')
            console.log(state.commentItem)
            //newArr=내가 원하는 값을 삭제하고 남은 배열값
            //state.commentItme=내가 기존에 가지고 있었던 배열값...


            return {
                // ...state,
                // commentItem:newArr
                //위와 같은 내용임
                commentItem:[...state.commentItem.filter((v,k)=>action.payload !==k)]
            }
            
            
        default:
            return state
    }
}


export default reducer//얘는 상태값 바꾸는게 목적임.