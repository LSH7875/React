import React , {Component} from 'react'
import LoginBox from './components/LoginBox'
import UserContext from './store/User'


class App extends Component{


    state = {
        loginTxt : "login",
        user:{
            userid:'web7722',
            name:'ingoo',
            job:'developer'

        }
    }

    render(){
        return(
            <>
                <UserContext.Provider value = {this.state.user}>
                <LoginBox v= {this.state.loginTxt}/>
                </UserContext.Provider>
            </>
        )     
    }
}

export default App //import >>javascript 모듈임 babel때문에 가능함.
//module.exports = require >>Node.js