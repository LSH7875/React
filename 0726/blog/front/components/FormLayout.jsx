import Router from 'next/router'
import Head from 'next/head'
import styled from './FormLayout.module.css'//안의 모든 css를 객체로 변환시켜준다.

const FormLayout =({children})=>{
    return(
        <><Head>
        <title>YuYu's Blog</title>
    </Head>
            {/* <button onClick={()=>Router.back()}>뒤로가기</button> */}
            <button onClick={Router.back}>뒤로가기</button>
            <div className ="contain">
        {children}
        </div>
        <div className = {styled.footer}>  
            카피라이트 어쩌구 저쩌구...</div>
        </>
    )
}

export default FormLayout