
import {combineReducers} from "redux"
import user from './user'
import category from './category'
import { HYDRATE } from "next-redux-wrapper"
//여기서 초기값을 선정해준다. 
//여기서 모든 값을 다 관리하는 것
//왠만하면 컴포넌트는 화면에 그리는 것에 집중하고
//값을 정리하는 것은 여기에

//string의 단점: 오타를 내도 틀린줄 모름...
//그래서 변수로 만들어서 실행한다. 그게 관리하는게 쉬울거임
//오타로 인한 오류 찾기도 쉽다. 


console.log('인덱스 리듀서')
const reducer = combineReducers({
    
    index:(state={},action)=>{
        switch(action.type){
            case HYDRATE:
                return{
                    ...state,
                    ...action.payload
                }
            default:
                return state
        }
    },
    user,
//     user(state={IsLogin:false},action)=>{
    //     switch(action.type){
    //         case USER_LOGIN:
    //            console.log('로그인 신호 옴')
    //            return{
    //                ...state,
    //                IsLogin:true
    //                }
            
    //        case USER_LOGOUT:
    //            return{
    //                ...state,
    //                    IsLogin:false
    //                }
            
    //        default:
    //            return state
    //    }
// }

    category,
    
    }
)
export default reducer