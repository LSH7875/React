import { all, takeLatest,fork,call,put} from "redux-saga/effects";
import axios from 'axios';

function* login(action){
    console.log(action)
    // call()
    // axios.post('http://localhost:3000/api/login',action.data)
    const result = yield call(axios.post,'http://localhost:3000/api/login',action.data)
    //call (함수,url,data)
    console.log(result)

    //성공적이라고 생각하고 작성하기
    const data = result.data;
    if(data.result =="OK"){
        yield put({type:'USER_LOGIN_SUCCESS'})
    } else{
        yield put({type:'USER_LOGIN_FAIL'})
    }
    console.log('훔쳐오기!')
    //saga에서는 async await 안쓰고 쓸 수 있음

}

function* watchLogin(){
    console.log('와치사가')
    yield takeLatest("USER_LOGIN_REQUEST",login)
}
export default function* userSaga(){
    console.log('유저사가')
    yield all([
        fork(watchLogin)
    ])
}