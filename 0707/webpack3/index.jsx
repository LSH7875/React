import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './css/index.css'
//최상위 노드에 라우트 작업 해야함. 맨 처음 식작되는 컴포턴트


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
