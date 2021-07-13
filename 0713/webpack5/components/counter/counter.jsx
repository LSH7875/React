import React from 'react'
import {reducer} from './reducer'

// const Counter =()=>{

//     const [number,setNumber] = React.useState(0)

//     const onUp = ()=>{
//         setNumber(number+1)
//     }

//     const onDown =() =>{
//         setNumber(s=>s-1)
//     }

//     return (
//     <>
//         <div>
//             <h1>useState알아보기</h1>
//             <h2>{number}</h2>
//             <button onClick={onUp}>+1</button>
//             <button onClick = {onDown}>-1</button>
//         </div>
//     </>
//     )
// }

// export const reducer = (number,action)=>{
//     //dispatch에서 보낸 값을 받는다. 
//     //이걸 하는 이유는 상태값을 변경하는 로직을 따로 빼서 정리하기 위해서 사용하는 것.

//     //첫째는 상태값 두번째는 dispatch에서 사용한 객체의 값
//     switch(action.type){
//         case "Up":
//             return number+1
//         case "Down":
//             return number-1
//         default:
//             return number
//     }
// }

const Counter =()=>{

    const [number,dispatch] = React.useReducer(reducer,0)
    // const [number,setNumber] = React.useState(0)
    //reducer:내가 원하는 함수명 적어줘도 상관 없음.!!!//component 밖에 적어주는 것이 핵심이다. 

    const onUp = () =>{
        dispatch({type : 'Up'})
    }

    const onDown = ()=>{
        dispatch({type: 'Down'})
    }

    return (
        <div>
            <h2>{number}</h2>
            <button onClick = {onUp}>+1</button>
            <button onClick = {onDown}>-1</button>
        </div>
    )
}
export default Counter //하나의 함수만 보낼 수 있음.