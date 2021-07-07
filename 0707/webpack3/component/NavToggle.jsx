import React, {Component} from 'react'
import '../css/NavToggle.css'

class NavToggle extends Component{
    render(){
        return(//label for=> label htmlfor로 쓰면 babel이 알아서 for로 작업함.
            //arrow 함수 쓰는 이유: 멈춰야하기때문에 애로우함수는 막는 역할함. 함수 안에 함수를 감싼다. 그래서 온전히 온클릭이 실행되었을 때
            // this.props.toggle  == ()=>{this.props.toggle()}
            // 온클릭이 발생시킬 때 실행해야하기 땜누에 ()쓰면 안됨. onClick = {this.props.toggle}하면 온클릭했을 때만 실행시킨다. 여기에 this.props.toggle()하면 저절로 실행이 된다. 
            // 막고 실행반드시 실행시키는거여서 ()=>this.props.gottle()
            
            <>
                <input type ="checkbox" id ="nav-toggle" className = "nav-toggle" onClick = {()=>this.props.toggle()}/>
                <label htmlFor ="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </>
        )
    }
}

export default NavToggle