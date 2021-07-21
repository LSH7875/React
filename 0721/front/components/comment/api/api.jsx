/*비동기 통신하는 것들 다 여기다가 넣을거임 
코드리뷰나 코드 읽을 때 곤란한 감이 있어서,
저기에는 화면구성하는 것만 넣고, 여기는 

//////일반적인 함수////////
만 넣을 것이다.*/


const getComment = async(dispatch)=>{
    dispatch({type:'GET_COMMENT'})
    try{
        const aaa= await fetch('http://52.15.207.221/api/comment')
        const bbb = await aaa.json()

        const result = bbb.map(obj=>{
            return {...obj, date: obj.updatedAt.substr(0,10)}
            
        })
        dispatch({type:'GET_COMMENT_SUCCESS',payload:result})
        
    }catch(e){
        dispatch({type:"GET_COMMENT_FAILED",payload:e})
    }
}

const postComment =async(data)=>{
    try{
        today = new Date()
        const options = {
            method:"post",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"userid":"web7722", "content":data})
        }

        const aa =await fetch('http://52.15.207.221/api/comment',options);

    }catch(e){
        console.log(e)
    }

}
module.exports= {getComment,postComment}