import'../index.css'
import Head from 'next/head'

const App=({Component})=>{

    return (
        <>
        <Head>
<link/>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
<link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap" rel="stylesheet"/>
        </Head>
        <Component/>/{/*우리가 components에 만든게 여기 위치한다.  */}
        </>
    )
}
export default App