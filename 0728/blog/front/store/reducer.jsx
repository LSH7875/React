export const reducer =(state,action)=>{
    switch(action.type){
        case "LOGIN":
            return {...state,
                IsLogin:true}
        case "LOGOUT":
            return {
                        ...state,
                        IsLogin:false
                    }
        case "":
            return state
        default:
            return state;
    }
}