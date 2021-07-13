import React from 'react'
import styled from 'styled-components'

const ButtonStyle={
    "background":"black",
    "border":"none",
    "color":"#fff",
    "padding":"7px 14px"
}
//button이라는 component를 
/*이렇게하면 컴포넌트별로 css를 주는것이기 때문에 겹치는 일이 없다. */
const Button = styled.button`
    background:#000;
    border:none;
    color:#fff;
    padding:7px 14px;
`

const ButtonHoever = styled(Button)`
    background:#007bff;
    :hover{
        background:#0069d9;
    }`


const Index = ()=>{
    const inputRef = React.useRef()
    const handleClick=()=>{
        inputRef.current.focus()
        // inputRef.current.style.height="100px"//inputRef.current:엘리먼트
        if(inputRef.current.style.height==="100px"){
            inputRef.current.style.height="16px";
            inputRef.current.value="";
        }else{
            inputRef.current.style.height="100px"
        }
    }
    return (
        <>
            <div>
                <input type = "text" ref={inputRef}/>
                <button 
                    style ={ButtonStyle}
                    onClick={handleClick}> hello?</button>
                <Button onClick={()=>{handleClick()}}>dffdfdf</Button>
                <ButtonHoever>호버버튼임</ButtonHoever>
            </div>
        </>
    )
}

export default Index