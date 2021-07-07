import React, {Component} from 'react'
import '../css/Consulting.css'

class Consulting extends Component{
    render(){
        return(
            <>
                <h3>상담정보</h3>
                <div className ="line"></div>
                <table id ="ConsultingTable">
                    <tr>
                        <td>이름*</td>
                        <td><input id = "name " type = "text"/></td>
                    </tr>
                    <tr>
                        <td>성별*</td>
                        <td><input name = "gender" value="1" type = "radio"/>남 <input name = "gender" value="2" type = "radio"/>여 </td>
                    </tr>
                    <tr>
                        <td>나이*</td>
                        <td><input name = "order" type = "text"/></td>
                    </tr>
                    <tr>
                        <td>이메일*</td>
                        <td><input name = "email" type = "email" /></td>
                    </tr>
                    <tr>
                        <td>전화번호*</td>
                        <td><input name = "email" type = "email" /></td>
                    </tr>
                    <tr>
                        <td>상담내용</td>
                        <td><textarea name = "content"></textarea></td>
                    </tr>
                </table>
                <input type = "submit" id = "submit" value = "상담신청하기"/>
                <input type = "button" id = "cancel" value = "취소하기"/>
            </>
        )
    }
}

export default Consulting