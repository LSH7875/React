import {all, take, fork,takeLatest,call, put} from 'redux-saga/effects'
import axios from 'axios'



//사이드 이펙트
//all call fork take takeEvery takeLatest put throttle


//testAction역할: 현재 상태를 체크하거나 요청을 보내거나 중간에서 할 수 있는 것들
//비동기로 data를 주고 받거나 하는 것임.
//로그인 성공과 실패를 미들웨어가 체크를 해주는 것임


/**fetch나 axtios로 요청을 날리고,
 * backend server는 결과값을 받은 다음, 결과값에 따른 action값을 내보낸다.
 * 
 * 
 */

function* testAction(action){
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



function* test(){
    console.log('테스트')
    yield takeLatest('USER_LOGIN_REQUEST',testAction)
    //USER_LOGIN_REQUEST가 action값으로 오면 testAction을 실행시킨다는 것임
}




export default function* rootSaga(){
    console.log('루트사가')
    yield all([
        fork(test)
    ])//redux saga에 있음
}

//rootsaga는 dispatch가 reducer로 가기 전에 실행되는 것임.