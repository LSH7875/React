import React,{useState,useMemo,useCallback} from 'react'



/*useCallback과 useMemo는 비슷함. 
변수형태는 useMemo
함수형태는 useCallback임
함수형 컴포넌트는 실행될 때마다 없어졌다 생겼다를 반복하는 것임.
최초에 생성해놓고 그걸 갖다 쓰는 형식을 쓰기 위해서 useCallback쓴다.*/



const Memo=()=>{
    //상태값 하나는 input 또 다른 하나는 내용 저장을 위한 것

    const [username,setUsername] = useState('')
    const [list, setList] = useState([])
    
    // const change = e=>{
    //     let {value}= {...e.target}
    //     setUsername(value)
    // }


    const change = useCallback (e=>{
        let {value} = {...e.target}
        setUsername(value)
    },[])//얘는 콘솔로그 찍을 수 있는 방법이 없긴 하다. 
    //스타일 컴포넌트를 만들때 상요하는 게 좋음.
    // 빈배열:최초에 실행할 때만 실행하겠다!!!!
    
    // const submit = e =>{
    //     e.preventDefault();
    //     console.log('submit')

    //     //list를 가져오는데 그건 불변성때문임
    //     const newList = [...list]
    //     console.log(newList);
    //     // const newList = list.slice(); <<tictactoe게임
    //     newList.push(username)
    //     setList(newList)
    //     setUsername('')
    // }


    const submit = useCallback((e)=>{//e적어도 되고 안적어도 된다.
        e.preventDefault();
        const newList = [...list];
        console.log(newList);
        newList.push(username)
        setList(newList)
        setUsername('')
    },[list,username])//list와 username 상태가 바뀔때만 함수를 재생성한다.
    

    const renderlist = ()=>{
        // let newArr = []
    //     for(let i = 0; i < list.length; i++){
    //         newArr.push(<li key={i}>list[i]</li>)}
    //         return newArr
    // }

    // let newArr = list.map((v,k)=>{
    //     return <li key={k}>{v}</li>
    // })

    return (
        list.map((v,k)=>{
            return <li key={k}>{v}</li>
        }
    ))
    }


    /*const renderlist = useCallback(()=>{
        let newArr = list.map((v,k)=>{
            return (
                <li key = {k}>{v}</li>
            )
        })
        return newArr
    },[list]) 
    */

    const count = (arr)=>{
        return list.length
    }

    const userCount = useMemo(()=>{//얘는 함수가 아니라 요소임 변할 때만 실행됨. 두개의 인잣값 받음. 
        // 첫번째는함수값 거기에 대한 리턴값을 받는다.  
        // 두번째는 배열/ 거기의 상태값을 받는다.


        /*
        처음의 함수값의 리턴을 userCount에 저장시킨다. 
        
        
        내가 먼저 구했었던 값이 있으면 실행시키지 않는다. 
        한번 구했던 값은 변수값에 담아놓아서... 

        그래서 여기서는 하나에 담아놓는다. 
        이걸 난사하게 되면 메모리에 저장하는 거여서 오버플로가 일어난다. 
        */
        console.log('count')
        return list.length
    },[list.length])

    return(
        <>
            {console.log('render')}
            <h2>회원리스트({userCount})</h2>
            <form onSubmit = {submit}>
                <input 
                    onChange={change} 
                    type="text" 
                    name = "username"
                    value = {username}
                />
                <button type = "submit">추가</button>
            </form>

            <ol>
                
                {
                  renderlist()/* {
                    [
                        <li key="0">web7722</li>,
                        <li key="1">web7711_1</li>,
                        <li key="2">web7777</li>,
                        <li key="3">web7788</li>
                    ] */}
                
            </ol>

        </>

        //배열을 그냥 담고만 있으면 이걸 return 에 넣으면 반복문처럼 리턴해준다. 각각의 li에 키값을 넣어줘야한다. 
    )


}




export default Memo