import React from 'react'


const initialState = {
    commentItem:[{userid :'web7722',content:'안녕하세요',date: '2021-07-01'}]
}
const Store = React.createContext(initialState)//이게 있어야지 context가 실행됨
//default값 입력 가능함.

export default Store