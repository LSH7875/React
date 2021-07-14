import React from 'react'
import Comment_Item from '../Comment_Item'

//dispatch에서 바꿀 정보를 받아야 함=>action
//reducer는 결국 상태를 바꿔야하기 때문에 이전 상태값을 가져와야 함.
//결구구 얜 리턴을 해줘야함 >> 바뀐 state값
const reducer = (state,action) =>{
    switch(action.type){
        case "CREATE":
            return {...state,commentItem:[...state.commentItem,action.payload]}
        case "UPDATE":
            return state

        case "DELETE":
            return state
            
        default:
            return state
    }
}


export default reducer//얘는 상태값 바꾸는게 목적임.