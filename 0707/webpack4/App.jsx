import React , {Component} from 'react'
import Navbar from './component/Navbar'



class App extends Component{
    render(){
        return(
            <>
                <Navbar />
            </>
        )     
    }
}

export default App //import >>javascript 모듈임 babel때문에 가능함.
//module.exports = require >>Node.js