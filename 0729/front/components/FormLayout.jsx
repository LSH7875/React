import Router from 'next/router'
import Head from 'next/head'
//import styled from './FormLayout.module.css'//안의 모든 css를 객체로 변환시켜준다.
import Styled from 'styled-components'
const Background = Styled.div`
    width:100vw;
    height:100vh;
    background:#eee;
    display:flex;
    align-items:center;
    justify-content:center;

    & > div {
        width:300px;
        height:200px;
        background:#fff;
        padding:20px;
    }
`

const FormLayout =({children})=>{

    return(
        <>
            <Background>
                <Head>
                    <title>YuYu's Blog</title>
                </Head>
                {/* <button onClick={()=>Router.back()}>뒤로가기</button> */}
                <p onClick={Router.back}>뒤로가기</p>
                <div className ="contain">
                    {children}
                </div>
                <div className="footer">  
                    카피라이트 어쩌구 저쩌구...
                </div>
            </Background>
        </>
    )
}

export default FormLayout