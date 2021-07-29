import FormLayout from '../../components/FormLayout'
import Router from 'next/router' 

import useInput from '../../hooks/useInput'
//여러개의 인풋 처리하기 위해서 사용
import {useDispatch} from 'react-redux'
import { UserLoginAction } from '../../reducers/user'
const Login =()=>{

    const dispatch = useDispatch();

    const userid = useInput(''); //Object
    const userpw = useInput(''); //Object
    console.log('props')
    // console.log(props)
    // const dispatch=props.dispatch;


const handleSubmit =e=>{
    e.preventDefault();
    // console.log(userid.value,userpw.value)
    // dispatch(USER_LOGIN_ACTION)
    //좋은 점:오타가 안나게 함
    userid.value==="f" && userpw.value ==="f"
    ?
    (
        dispatch(UserLoginAction()),
        Router.push('/')//내가 원하는 경로로 이동
    )
    :alert('아이디와 패스워드가 다릅니다')
}

console.log('userid',{...userid})
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