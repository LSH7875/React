import wrapper from '../Providers/createCtx'
import {useSelector,useDispatch} from 'react-redux'
import {GET_POST} from '../reducers/post'
import {END} from 'redux-saga'//Hydrate랑 똑같은 내용
import {useEffect} from 'react'
import Link from 'next/link'

const posts =()=>{
    const dispatch = useDispatch();
    const posts = useSelector(state=>state.post.posts)
    const postLink = posts.map((v,k)=>{
        return (
            <li key={k}>
                    <h2><Link href={`posts/${v.id}`}><a>{v.title}</a></Link></h2>
                {/* <h2><Link href="/posts/[id]" as {`/posts/${v.id}`}><a>{v.title}</a></Link></h2> */}
                <span>{v.body}</span>
            </li>
        )
    })
    
    useEffect(()=>{
        function scrollFn(){
            console.log('window.scrollY',window.scrollY);//window.scrollY : 스크롤의 위치
            console.log('clientHeight',document.documentElement.clientHeight);//브라우저의 눈에 보이는 높이
            console.log('scrollHeight',document.documentElement.scrollHeight);//문서의 전체 Y의 높이
            //scrollY최대값+clientHeight=scrollHeight

            if((parseInt(window.scrollY+document.documentElement.clientHeight)) === document.documentElement.scrollHeight){
                dispatch(GET_POST())
            }
        }
        window.addEventListener('scroll',scrollFn)
        return ()=>{
            window.removeEventListener('scroll',scrollFn)
        }
    },[])
    return (
        <>
            <h1>Posts({posts.length})</h1>
            <ul>
                {postLink}
            </ul>
        </>
    )
}

export const getServerSideProps=wrapper.getServerSideProps((Store)=>async(req,res)=>{
//처음 인덱스에는 처음 상태를 갖고있는 변수명 그래서 보통 store나 context를 쓴다. 
//첫번째는 dispatch써서 API요청을 보내고 상태를 변경시키낟. 
    //1.dispatch는 어디에 있는가. 이미 Store에 context내용이 있다. 
    // console.log(Store) 
    Store.dispatch(GET_POST())
    Store.dispatch(END)//
    // console.log(Store)
    await Store.sagaTask.toPromise()
})
// export const getServerSideProps(){
//     //처음 인덱스에는 처음 상태를 갖고있는 변수명 그래서 보통 store나 context를 쓴다. 
//     //첫번째는 dispatch써서 API요청을 보내고 상태를 변경시키낟. 
//         //1.dispatch는 어디에 있는가. 이미 Store에 context내용이 있다. 
//         console.log(Store) 
//         Store.dispatch(GET_POST())//
//     }
export default posts