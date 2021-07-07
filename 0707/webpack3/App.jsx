import React , {Component} from 'react'
import Navbar from './component/Navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'



class App extends Component{
    render(){
        return(
            <>
                <BrowserRouter>
                    <Navbar />
                    {/* 여기서부터는 내용 영역 */}
                    <Switch>
                        <Route exact path = "/" component={Home}/>
                        <Route path = "/about" component={About}/>
                        <Route path = "/projects" component={Projects}/>
                    </Switch>
                </BrowserRouter>
            </>
        )     
    }
}

export default App //import >>javascript 모듈임 babel때문에 가능함.
//module.exports = require >>Node.js