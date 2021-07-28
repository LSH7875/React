import Link from 'next/link'
import Head from 'next/head'
import NavToggle from './NavToggle'
import Header from './layout/Header'


const BlogLayout=({children})=>{


    return(
        <>
            <Head>
                <title>YuYu's Blog</title>
            </Head>
            <Header/>
            <div className ="contain">
                {children}
            </div>
            <div className = "footer">  
                카피라이트 어쩌구 저쩌구...
            </div>
        </>
    )


}
export default BlogLayout