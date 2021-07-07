import React, {Component} from 'react'
import Submenu from './Submenu'
import RightArea from './RightArea'
import Subtop from './Subtop'

class Projects extends Component{
    render(){
        return( 
            <>
            <Subtop/>
            <Submenu/>
            <RightArea/>
            </>
        )
    }
}

export default Projects