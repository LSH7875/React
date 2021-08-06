import {all,  fork} from 'redux-saga/effects'
import userSaga from './user'

export default function* rootSaga(){
    console.log('root사가')
    yield all([
        fork(userSaga),
        //fork(postSaga)
    ])
}
