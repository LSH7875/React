export const reducer = (number,action)=>{
    //dispatch에서 보낸 값을 받는다. 
    //이걸 하는 이유는 상태값을 변경하는 로직을 따로 빼서 정리하기 위해서 사용하는 것.

    //첫째는 상태값 두번째는 dispatch에서 사용한 객체의 값
    switch(action.type){
        case "Up":
            return number+1
        case "Down":
            return number-1
        default:
            return number
    }
}