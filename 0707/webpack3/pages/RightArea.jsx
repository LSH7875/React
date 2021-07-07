import React, {Component} from 'react'
import SubTopMenu from './SubTopmenu'
import PrivacyInfo from './PrivacyInfo'
import Consulting from './consulting'

class RightArea extends Component{

    onSubmit=(e)=>{
        e.preventDefualt();

    }
    render(){
        return(
            <> 
            <SubTopMenu/>
            <form onSubmit={this.onSubmit}>
            <PrivacyInfo/>
            <Consulting/>
            </form>
            </>
        )
    }
}

export default RightArea