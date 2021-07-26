import BlogLayout from '../../components/BlogLayout'
import {useRouter} from 'next/router'

const Post =()=>{
    const router= useRouter()
    const {post} = router.query
    return (
        <BlogLayout>
        {post} Post.jsx
        </BlogLayout>
    )
}
export default Post