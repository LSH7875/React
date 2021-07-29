import {createWrapper} from 'next-redux-wrapper'
import {compose, createStore , applyMiddleware} from 'redux'
import reducer from '../reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
// const configureStore=()=>{
// //redux는 초기값은 rducer에 있음.

//     const store = createStore(reducer)
// }

const configureStore = ()=>{
    const middlewares=[]
//개발모드와 배포모드를 다르게 하겠다는 것
    const enhancer = process.env.NODE_ENV==='production'
    ?compose(applyMiddleware(...middlewares))
    :composeWithDevTools(applyMiddleware(...middlewares))
    const Store=createStore(reducer,enhancer)
    //===createContext(reducer) 
    //-===createContext(상태초기값)
    //reducer 안에 초기값을 가지고 있음
    return Store
}
//wrapper의 두번째 인잣값은 옵션값임
const wrapper = createWrapper(configureStore,{
    debug:process.env.NODE_ENV==='development'
})
//configureStore
export default wrapper

//wrapper:provider 생략할 수 있게 해주는 역할을 한다.