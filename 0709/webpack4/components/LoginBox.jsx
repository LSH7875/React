import React,{Component} from 'react'
import Login from './Login'

class LoginBox extends React.Component{
    render(){
        return(
            <>
                <Login onClick ={this.props.onClick} />
            </>
        )
    }
}


export default LoginBox