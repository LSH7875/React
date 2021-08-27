import {useRouter} from 'next/router'
// import { getServerSideProps } from '../posts';
import wrapper from '../../Providers/createCtx'
import {GET_POST_DETAIL} from '../../reducers/post'
import {END} from 'redux-saga'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Posts= ()=>{
    // const router = useRouter()
    // const {id} = router.query;
    const post = useSelector(state=>state.post.postDetail)
    console.log('//////////post',post)
    return(
        <>
            hello
            <h3>{post.title}</h3>
            <dl>
                <dt>{post.userId}</dt>
                <dd>{post.body}</dd>
            </dl> 
            <Link href="/posts/"><a>목록가기</a></Link> 
        </>
    )

}


//동적라우팅은 서버사이드렌더링을 먼저 이용해야함. 
export const getServerSideProps=wrapper.getServerSideProps((Store)=>async(req,res)=>{
    const {id}=req.params;
    // console.log(id);
    Store.dispatch(GET_POST_DETAIL(id))
    Store.dispatch(END)
    await Store.sagaTask.toPromise()
    
})

export default Posts