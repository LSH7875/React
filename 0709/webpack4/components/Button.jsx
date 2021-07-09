import React, {Component} from 'react'
import UserContext from '../store/User'
class Button extends React.Component{
    name = "ㅎㅇ"
    static contextType = UserContext //외워라!!! UserContext를 별로 안쓴다. 현제 class에서 context를 표현하면 된다. 
    //8줄처럼.... //this.context.userid
    render(){
        console.log(this.context)
        return (
            <>
            <button onClick = { ()=>this.props.onClick(this.name)}>로그인</button>  
            <button onClick = { ()=>alert(this.context.userid)}> 로그인2</button>
            </>
        )
    }
    }

export default Button