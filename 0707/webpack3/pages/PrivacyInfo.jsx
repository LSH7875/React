import React, {Component} from 'react'
import'../css/PrivacyInfo.css'

class PrivacyInfo extends Component{
    render(){
        return(
            <>
            <div id="name">
                <h3>개인정보취급방침</h3>
                <div className = "blueLine"></div>
                <div className = "Scroll_box">
                    <p>수집한다구</p>
                    <p>수집수집</p>
                    <p>수집한다구</p>
                    <p>수집수집</p>
                    <p>수집한다구</p>
                    <p>수집수집</p>
                    <p>수집한다구</p>
                    <p>수집수집</p>
                </div>
                <input name = "agree" type = "radio"/>동의하지 않습니다. <input name = "agree" type = "radio"/> 동의합니다. 
            </div>
            </>
        )
    }
}

export default PrivacyInfo