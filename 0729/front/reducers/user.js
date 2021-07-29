const initialState={
    IsLogin:false
}
const USER_LOGIN="USER_LOGIN"
const USER_LOGOUT="USER_LOGOUT"
export const UserLogoutAction=()=>{
    return {type:USER_LOGOUT}
}
export const UserLoginAction=()=>{
    return{
        type:USER_LOGIN
    }
}

const reducer =(state=initialState,action)=>{
    switch(action.type){
         case USER_LOGIN:
            console.log('로그인 신호 옴')
            return{
                ...state,
                    IsLogin:true
                }
            
        case USER_LOGOUT:
            console.log('로그아웃 들어옴')
            return{
                ...state,
                    IsLogin:false
                }
            
        default:
            return state
    }
}

export default reducer