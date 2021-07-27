import FormLayout from '../../components/FormLayout'
import {useState} from 'react'
import Router from 'next/router' 

//여러개의 인풋 처리하기 위해서 사용
const useInput=(defaultValue)=>{
    const [value,setValue]=useState(defaultValue)
    const onChange=e=>{
        const {value}={...e.target}
        setValue(value)
    }
    return{value,onChange}
}

const Login =()=>{
    const userid = useInput(''); //Object
    const userpw = useInput(''); //Object



const handleSubmit =e=>{
    e.preventDefault();
    // console.log(userid.value,userpw.value)


    userid.value==="web7722" && userpw.value ==="1234"
    ?Router.push('/')//내가 원하는 경로로 이동
    :alert('아이디와 패스워드가 다릅니다')
}


    return (
        <FormLayout>
        <h2>로그인</h2>
        <form onSubmit={handleSubmit}>
            <input type ="text" {...userid} placeholder = "아이디를 입력해주세요"/>
            <input type ="password" {...userpw} placeholder = "패스워드를 입력해주세요"/>
            <button type ="submit">로그인</button>
        </form>
        </FormLayout>
    )
}
export default Login