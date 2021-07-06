import React , {Component} from 'react'
import FuncComp from './component/FuncComp'
import ClassComp from './component/ClassComp' 



class App extends Component{
    render(){
        return(
            <>
            <h1>Hello world!webpack3</h1>
            <ul className = "Comp">
                <FuncComp/>
                <ClassComp/>
                <FuncComp/>
                <ClassComp/>

            </ul>
            </>
        )     
    }
}

export default App //import >>javascript 모듈임 babel때문에 가능함.
//module.exports = require >>Node.js