import Link from 'next/link'
import Head from 'next/head'
import NavToggle from './NavToggle'


const BlogLayout=({children})=>{
    return(
        <><Head>
        <title>YuYu's Blog</title>
    </Head>
            <div className="header">
                <h1>로고</h1>
                <ul>
                    <li>
                        {/* <Link to ="">HOME</Link> <--리액트에서 썻던거*/}
                        <Link href ="/" ><a>HOME</a></Link></li>
                    <li><Link href ="/posts/" ><a>글쓰기</a></Link></li>
                    <li><Link href ="/user/login" ><a>로그인</a></Link></li>
                    <li><Link href ="/user/join" ><a>회원가입</a></Link></li>
                </ul>
                <NavToggle/>
            </div>
            <div className ="contain">
            {children}
            </div>
            <div className = "footer">  
                카피라이트 어쩌구 저쩌구...</div>
        </>
    )


}
export default BlogLayout