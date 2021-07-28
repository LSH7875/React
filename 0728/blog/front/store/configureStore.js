import {createWrapper} from 'next-redux-wrapper'
import {createStore} from 'redux'


const configureStore=()=>{
//redux는 초기값은 rducer에 있음.

    const store = createStore(reducer)
}

const wrapper = createWrapper(configureStore,{})
export default wrapper