import React from 'react'

const Comment_Item = ({userid,content,date}) =>{
    return(
        <>
            <ul className = "comment-row">
                <li className = "comment-row">{userid}</li>
                <li className = "comment-content">{content}</li>
                <li classname = "comment-date"> {date}</li>
            </ul>
        </>
    )
}
//삼항연산자 써서 빈 값일때는 기본값 쓰는거 한번 해보기
export default Comment_Item