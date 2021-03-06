import React from 'react'
import Styled from 'styled-components'

const Button = Styled.button`
    width:33%;
    height:70px;
    border:1px solid #000;
    background:#fff;
    cursor:pointer;
    font-size:22px;
`


const Square = ({value,onClick}) =>{
    return (
        <>
            <Button onClick={()=>onClick()}>
                {value}
            </Button>
        {/* <Button>{value}</Button>    위에 props대신 {value}적으면 됨*/}
        </>
    )
}

export default Square