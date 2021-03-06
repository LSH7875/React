const initialState={
    user:{
        isLogin:false
    },
    post:{
        
    },
    comment:{

    },
    category:{

    }
}
const USER_LOGIN="USER_LOGIN";
export const USER_LOGIN_ACTION = data=>{
    return {
        type:USER_LOGIN,
        data,
    }
}

//그러면 코드에서 dispatch(USER_LOGIN_ACTION())

//dispatch


export const USER_LOGOUT_ACTION=()=>{
    return {
        type:USER_LOGOUT
    }
}



const reducer = (state = initialState,action)=>{
    switch(action.type){
        case USER_LOGIN:
            return {
                ...state,
                user:{...state.user,isLogin:true}
            }
        case "USER_LOGOUT":
            return{
                ...state,
                user:{...state.user,isLogin:false}
            }
        default:
            return state
    }
}

export default reducer