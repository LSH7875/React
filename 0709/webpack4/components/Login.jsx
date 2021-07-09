import React,{Component} from 'react'
import Button from './Button'


class Login extends React.Component{

    onClickHandle=(data)=>{
        console.log(this.props.onClick,data)
    }
    //여기는 순수 자바스크립트 영역임 그래서 {}안쓰는 것임.
    arrowFunction(i){
        console.log(i)
    }


    render(){
        return(
            <>
                <Button onClick = {(i)=>this.arrowFunction(i)} />
            </>
        )
    }
}

export default Login