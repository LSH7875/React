import BlogLayout from '../../components/BlogLayout'
import {useRouter} from 'next/router'
const data = [
    { id:"1",subject:"SH blog", content:"HTML은 어쩌구 저쩌구", date:"2021-07-28",hit:"0"},
    { id:"2",subject:"SH blog", content:"모른다", date:"2021-07-28",hit:"0"},
]
const Post =()=>{
    const router= useRouter()
    const {post} = router.query//카테고리 이름

    /*게시번호/제목/날짜/조회수/*/
    

    const list = data.map(v=>{
        return (
            <div key={v.id}>
                <ul>
                    <li>{v.subject}</li>
                    <li>{v.content}</li>
                    <li>{v.date}</li>
                </ul>
            </div>
        )
    })
    return (
        <BlogLayout>
        {post} 게시글 리스트 페이지
        {list}
        </BlogLayout>
    )
}
export default Post