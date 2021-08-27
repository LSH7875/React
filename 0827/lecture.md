# next사용하기
```
$ npm init
$ npm i react react-dom next


```
```

    "dev": "next dev",
    "build": "next build",
    "start": "next start"
````

next 사용하려면 그냥 세팅해놓고 github에 올려놓고,
나중에 쓰는게 좋다!


pageProps는 서버사이드렌더링때문에 쓰는 거임


```app.jsx

const MyApp = ({Component,pageProps})=>{
    return (
        <Component {...pageProps}/>
    )
}

export default MyAp
```


__documet.jsx
styled채ㅡㅔㅐ둗ㅅgkf Eo 서버사이드렌더링이 안되서 css를 서버렌더링 처리하려고 코드 복붙함 

# redux setting
```
npm in redux
npm i react-redux
npm i next-redux-wrapper
npm i redux-saga
npm i redux-devtools-extension
npm i axios
```

# Redux 세팅할 때 제일 먼저 할 것
store만들기
>providers ->createCtx.js


>_app.jsx
wrapper.withRedux 감싸지ㅜ기

>saga디렉토리에서 index.js파일 생성하고 sagaEffect사용했다. 
//index.js는 다른 미들웨어를 묶어주는 역할이다.

