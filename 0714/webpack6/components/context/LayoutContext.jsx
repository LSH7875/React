import React from 'react' 
 
export const LayoutContext = React.createContext() //Component

export const LayoutStore = (props) =>{


    const user = {
        userid:'web7722',
        username:'ingoo',
        job:'developer'
    }
    

    //보낼 때 값이 많으니까 보통 객체를 쓴다. 
    return(
        <LayoutContext.Provider value = {user}>
        {/* // <LayoutContext.Provider value = "web7722"> */}
            {props.children}
        </LayoutContext.Provider>
    )
}

// export default LayoutStore


//children을 배웠으니 사용하자.