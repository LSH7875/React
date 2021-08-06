import FormLayout from '../../components/FormLayout'
import Router from 'next/router' 

import useInput from '../../hooks/useInput'
//여러개의 인풋 처리하기 위해서 사용
import {useDispatch,useSelector} from 'react-redux'
import { UserLogin_REQUEST } from '../../reducers/user'
import {useEffect} from 'react'
const Login =()=>{

    const dispatch = useDispatch();
    const {loadding,IsLogin} = useSelector((state)=>state.user)
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
        const data={
            userid:userid.value,
            userpw:userpw.value
        }
        dispatch(UserLogin_REQUEST(data))
        /*
        {type:'UserLogin_REQUEST',
            data:{
                userid:userid.value,
                userpw:userpw.value
            }
        } 
        */
    }
    
    useEffect(()=>{
        
    IsLogin === true && Router.push('/')
    },[loadding])
    
    
    return (
        <FormLayout>
        <h2>로그인</h2>
        <form onSubmit={handleSubmit}>
            <input type ="text" {...userid} placeholder = "아이디를 입력해주세요"/>
            <input type ="password" {...userpw} placeholder = "패스워드를 입력해주세요"/>
            {loadding ? '나 로딩중':<button type ="submit">로그인</button>}
        </form>
        </FormLayout>
    )
    //로딩중이면 '나 로딩중'이 뜨고, 그렇지 않으면 로그인 버튼이 보이는 것임
}
export default Login