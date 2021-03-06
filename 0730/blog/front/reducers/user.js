const initialState={
    loadding:false,
    IsLogin:false
}



const USER_LOGIN_REQUEST="USER_LOGIN_REQUEST"
const USER_LOGIN_SUCCESS="USER_LOGIN_SUCCESS"
const USER_LOGIN_ERROR="USER_LOGIN_ERROR"
const USER_LOGOUT="USER_LOGOUT"

export const UserLogoutAction=()=>{
    return async (dispatch)=>{
        dispatch(UserLogin_REQUEST())
        try{
            //fetch 성공적인 부분
            const response = await fetch ("http://localhost:3000/api/login",{
                method:'POST',
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({...data})
            })
            const result = await response.json()
            result.result === 'OK'
            ? dispatch(UserLogin_SUCCESS(result))
            : dispatch(UserLogin_ERROR())
        } catch(e){
            dispatch(UserLogin_ERROR())
        }
    }
}

export const UserLogin_REQUEST=data=>{
    return{
        type:USER_LOGIN_REQUEST
    }
}

export const UserLogin_SUCCESS =()=>{
    return{
        type:USER_LOGIN_SUCCESS
    }
}

export const UserLogin_ERROR=()=>{
    return {
        type:USER_LOGIN_ERROR
    }
}
const reducer =(state=initialState,action)=>{
    switch(action.type){
         case USER_LOGIN_REQUEST:
            return{
                ...state,
                    loadding:true,
                }
            
        case USER_LOGIN_SUCCESS:
            return{
                ...state,
                    IsLogin:true,
                    loadding:false
                }
        case USER_LOGIN_ERROR:
            return{
                ...state,
                    IsLogin:true,
                    loadding:false
                }
        case USER_LOGOUT:
            return{
                ...state,
                    IsLogin:false
                }
        default:
            return state
    }
}

export default reducer