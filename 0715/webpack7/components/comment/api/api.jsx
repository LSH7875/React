/*비동기 통신하는 것들 다 여기다가 넣을거임 
코드리뷰나 코드 읽을 때 곤란한 감이 있어서,
저기에는 화면구성하는 것만 넣고, 여기는 

//////일반적인 함수////////
만 넣을 것이다.*/


const getComment = async(dispatch)=>{
    dispatch({type:'GET_COMMENT'})
    try{
        const aaa= await fetch('http://localhost:3000/api')
        const bbb = await aaa.json()

        dispatch({type:'GET_COMMENT_SUCCESS',payload:bbb})
        
    }catch(e){
        dispatch({type:"GET_COMMENT_FAILED",payload:e})
    }
}
export default getComment