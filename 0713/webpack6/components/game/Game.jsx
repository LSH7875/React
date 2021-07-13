import React from 'react'
import Board from './Board'
import styled from 'styled-components'

const GameDiv=styled.div`
    display:flex;
    flex-wrap:wrap;
    align-item:center;
    justify-content:center;
    width:300px;`



const reducer = (state,action)=>{
    switch(action.type){
        case "NEXT" :
            const {squares} = {...state}
            squares[action.index]=state.xIsNext? 'O':'X' 
            console.log(state)
            return{
                ...state,
                squares,
                xIsNext:!state.xIsNext,
            }
        case "WIN":
            return {
                ...state,
                winner:action.winner
            }
    }
}

const defaultState={
    squares:Array(9).fill(null),
    xIsNext:false,
    winner:null
}

const WinnerFn = (squares)=>{
    let lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0; i<lines.length; i++){
        const [a,b,c] = lines[i]
        if(squares[a] && squares[a] == squares[b] && squares[a]==squares[c]){
            return squares[a]
        }
    }
    return null;
}


const Game =()=>{
    const [state, dispatch] = React.useReducer(reducer,defaultState)

    const handleClick =(n)=>{
        if(state.squares[n]) return;
        if(state.winner !== null) return
        dispatch({type:'NEXT', index:n})//n은 키값 boardcomponent에서 얻을 수 있음
    }

    React.useEffect(()=>{
        const win = WinnerFn(state.squares)
        if (win !== null){
            dispatch({type:'WIN',winner:win})
        }
    },[state.xIsNext])


    return(
        <>
            <GameDiv>
                <Board
                    squares ={state.squares}
                    onClick={handleClick}
                />
            </GameDiv>
            {state.winner? `${state.winner}님 승리!`:`Next Player: ${state.xIsNext ? 'O' :'X'}`}
        </>
        )
}

export default Game;