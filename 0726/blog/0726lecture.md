# Blog

1.back과 front 폴더를 생성한다.


2.front안에 npm init 으로 node.js환경으로 만들어줌.

3.npm i next react react-dom


>오늘의 목적: next 기본구조 배우기
라우터 기능 등등등

package.json의 script에 다음과 같은 내용을 넣어준다.

"dev":"next dev -p 3001 -H 0.0.0.0",
"build":"next build",
"start":"next start",
"lint":"next lint"

# pages 폴더 생성 in front
    url localhost:3001 일때 hello world찍고 싶으면pages폴더 안에 index.jsx파일 만들고
    거기 안에서 컴포넌트 만들어주면 됨.
    $ npm run dev

    노트북을 사요하는 사람들 wifi핸드폰이랑 같은 아이파이라면
    -cmd에 ipconfig
   

복습이었음 -------------------------
#폴더구조
pages
-index.jsx//메인
-join.jsx//회원가입
-login.jsx //로긴
-post.jsx//글쓰기페이지

localhost:3001/posts/post
localhost:3001/user/join 
이렇게 주소 만ㄷ르고 싶으면

pages
-index.jsx
-d user
--join.jsx
--login.jsx
-d posts
--post.jsx


# 동적 라우팅(10버전부터 나옴)
-파일명을 배열 형식으로 만든다. [post].jsx
-import {useRouter} from 'next/router'

# layout 구성하기

<header><내용물><footer>
front
-d components
--BlogLayout.jsx

# 링크 작성하기
import Link from 'next/link'
<Link href="/user/login"><a>로그인</a></Link>
c.f)리액트 문법은
<Link to ="/user.login">로그인</Link>


# next/head 
index.html이 없다. 그런데 우리는 meta태그나 title을 바꿔야 할 때가 많다.
그런데 index.html이 없어서 수정하기 힘들다. 
그래서 저걸 바꿀 쑤 있는 component를 제공해준다. 

# meta tag 
https://velog.io/@byeol4001/Meta-Tag-OG%EC%98%A4%ED%94%88%EA%B7%B8%EB%9E%98%ED%94%84-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

Next 모든 컴포넌트를 실행하기 전에 거쳐가는 컴포넌트가 있다.
app.jsx가 없기에 만들 수 있다.
HEAD를 모든 곳에 사용 가능하다. 공통적인 CSS가 있다면 여기다가 import 해야 편함.


#font가져올려면
 