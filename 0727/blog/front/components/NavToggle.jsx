import Styled from 'styled-components'
import {useState} from 'react'


const Toggle =Styled.div`
    background:transparent;
    border-color:transparent;
    & > .nav-toggle{
        display:none;
    }
    & >.nav-toggle +label{
        display: block;
        width:2.5rem;
        height:2rem;
        position:relative;
        cursor:pointer;
    }

    & > .nav-toggle +label >span{
        display:block;
        position:absolute;
        width:100%;
        height:5px;
        border-radius:30px;
        background:#000;
        transition:all .35s;
    }

    & > .nav-toggle +label >span:nth-child(1){top:0}
    & > .nav-toggle +label >span:nth-child(2){
        top:50%;
        transform:translateY(-50%)
    }
    & > .nav-toggle +label >span:nth-child(3){bottom:0}
    
    & > .nav-toggle:checked +label >span:nth-child(1){
            top:50%;
            transform:translateY(-50%)rotate(45deg);
        }
    & > .nav-toggle:checked +label >span:nth-child(2){
        opacity:0;
    }
    & > .nav-toggle:checked +label >span:nth-child(3){
        bottom:50%;
        transform:translateY(50%) rotate(-45deg);
    }

`
const Accordion = Styled.div`
    position:absolute;
    width:100%;
    left:0px;
    top:10vh;
    z-index:5;
    background:#fff;
    padding:7vh 0;


    display:${props=>(props.flag ? 'block' : 'none')};

    & >ul {
        margin-top:5vh;
        display:flex;
        flex-direction:column;
    }

    & >ul >li{
        margin-top:20px;
        text-align:center;
    }

    

`

//& : 자기자신
//단점: 자동완성이 안됨+색상이 안보여서 오타 찾기 힘듦 및 
const NavToggle =()=>{
    const [visible,setVisible]=useState(false)//디폴트가 거짓

    const handleToggle = ()=>{
        setVisible(!visible)
    }
    return(
        <Toggle>
            <input 
                type = "checkbox"
                id ="nav-toggle"
                className = "nav-toggle"
                onClick={handleToggle}
            />
            <label htmlFor ="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
            </label>
            {/* {메뉴생성} */}
            <div>
                <Accordion flag ={visible}>
                    <ul>
                    <li>대분류메뉴1</li>
                    <li>대분류메뉴2</li>
                    <li>대분류메뉴3</li>
                    <li>대분류메뉴4</li>
                    <li>대분류메뉴5</li>
                    </ul>
                </Accordion>
            </div>
        </Toggle>
    )
}
export default NavToggle