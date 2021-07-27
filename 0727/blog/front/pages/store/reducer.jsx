export const reducer =(state,action)=>{
    switch(action.type){
        case "LoGIN":
            return state;
        case "LOGOUT":
            return {
                        ...state,
                        IsLogin:flase
                    }
        case "":
            return state
        default:
            return state;
    }
}