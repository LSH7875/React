export const initalState = {
    posts:[],
    postDetaill:null,
    loadding:false,
}

/* REDUX ACTIONS */
export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST"
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"
export const GET_POSTS_FAIL = "GET_POSTS_FAIL"

export const GET_POSTS_REQUEST_DATAIL = "GET_POSTS_REQUEST_DATAIL"
export const GET_POSTS_SUCCESS_DATAIL = "GET_POSTS_SUCCESS_DATAIL"
export const GET_POSTS_FAIL_DATAIL = "GET_POSTS_FAIL_DATAIL"



export const GET_POST = () => {
    console.log('getpost들어옴')
    return {
        type:GET_POSTS_REQUEST
    }
}

export const GET_POST_DETAIL=(data)=>{
    return{
        type:GET_POSTS_REQUEST_DATAIL,
        data
    } 
}

const reducer = (state = initalState,action) => {
    switch(action.type){
        case GET_POSTS_REQUEST:
            console.log('getpsostrequrest들오옴')
            return {
                ...state,
                loadding:true
            }
        case GET_POSTS_SUCCESS:
            // console.log('도착했다',action.data)
            return {
                ...state,
                posts:[...state.posts,...action.data],
                loadding:false,
            }
        case GET_POSTS_FAIL:
            return {
                ...state,
                loadding:false,
            }
            case GET_POSTS_REQUEST_DATAIL:
                return {
                    ...state,
                    loadding:true
                }
            case GET_POSTS_SUCCESS_DATAIL:
                // console.log('도착했다',action.data)
                return {
                    ...state,
                    postDetail:action.data,
                    loadding:false,
                }
            case GET_POSTS_FAIL_DATAIL:
                return {
                    ...state,
                    loadding:false,
                }
        default:
            return state
    }
}

export default reducer