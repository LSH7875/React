import React , {Component,useState,useCallback} from 'react'


const Memo = ()=>{
    let [value,setValue]=useState('');
    let [list,setList]=useState([]);
    const  onsubmit = (e) =>{
        e.preventDefault();
        let newList = [...list]
        newList.push(value)
        setList(newList)
        setValue('');
    }


    const onchange=(e)=>{
        let {value} = {...e.target};
        setValue(value)
    }


    
    // const renderList = ()=>{
    //     let result = list.map((v,k)=>{
    //         return <li key ={k}>{v}</li>
    //     }
    //     )

    //     return result;
    // }

    const renderList = useCallback(()=>{
        let result=list.map((v,k)=>{
            return <li key = {k}>{v}</li>
        }) 
        return result;   
    },[list])




    return(
        <>
        <form onSubmit ={onsubmit}>
        <input type ="text" name ="id" value ={value} onChange={onchange}/>
        <button type = "submit" value = "제출"></button>

        </form>
        <ol>
            {renderList()}
        </ol>
        
        </>
    )
}







const App=()=>{
    return(
        <><Memo/>
        </>
    )
}

export default App 