# Redux 

npm i next-redux-wrapper
npm i redux
npm i react-redux
npm i redux-devtools-extension


# next-recux-wrppaer
context 개념
SSR렌더링 처리해주는 패키지
redux안에 있는 store를 next에 맞게 설정해준다. 

# redux
store middleware



combine<-reducer을 합쳐주는 아이


# react-redux
redux랑 react랑 같이 쓸 수 있도록 함.
redux는 컴포넌트에서 저장소에 있는 내용을 가져올 때


# redux-devtools-extension
react와 다르게 devtools 설치를 해야지만 가능함.


>>수정사항이 많아질 것

## 1.store/configureStore.js   <-react, next랑 구분 짓기위해서 js로 한다. 기능상엔 문제가 없다.

>context.jsx 같은 의미임

```
[store/configureStore.js]
import {createWrapper} from 'next-redux-wrapper'
import {createStroe} from 'redux
import reducer from './reducers' //redux는 reducer을 모아놓는다. 
const 


const Store = createStore()
//createWrapper의 첫번째값에 넣기 위해서선언하는 것
//reducer가 store의 초기값 가지고 있음.
//그래서 reducer도 만들어줘야함

const wrapper = createWrapper()
//두가지 인잣값 받음 . 첫번째는 redux의 Store   
//우리가 흔히 쓴 Context개념이라고 생각하면 편함.
//Store =>const Store = creataeContext(initialState)
//메소드 자체를 넣어주어야 함
//


export default wrapper
```


## 2.recuers/index.js
reducer를 선언해준다. 
이유:const Store = createStore()에 첫번째 인잣값으로 reducer가 필요하기 때문에
```
//여기서 초기값을 선정해준다. 

const initialState={
    
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
    case "":
    default:
        return state
    }
}
export default reducer
```


### 얕은 복사 깊은 복사 다시

![](https://images.velog.io/images/nara7875/post/de2444a9-c2ee-42c2-8c81-2ddac85c97dc/image.png)
큰 틀은 메모리를 참조하고, 값은 다른 값이다. 


3.### 다시 configure

```
[store/configureStore.js]
import {createWrapper} from 'next-redux-wrapper'
import {createStroe} from 'redux
import reducer from './reducers' 


const Store = createStore(reducer)


const wrapper = createWrapper(Store)
/*wrapper을 쓰는 이유:
<Store.Provider>안쓰고 좀 더 쉽게 하기 위해서
최상위 컴포넌트로 간다.

*/
export default wrapper
```

### 4. pages/_app.jsx

react-redux 안에 설정값이 있기 대문에 
useReducer은 react-redux안에 있다. 


```
import wrapper from '../store/configureStore'
...
export default wrapper.withRedux(App)
```
### 5.login.jsx
```
import {useDispatch} from 'react-redux'
const login=()=>{
const dispatch = useDispatch();
....
const handleSubmit=e=>{
    ...
    dispatch({type:"USER_LOGIN"})
...
}
```