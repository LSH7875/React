import React from 'react'

const UserContext = React.createContext('web7722')//없을 때는 이 값을 사용하겠다는 의미임

//'web7722 자리에는 객체도 들어갈 수 있다.  


const User = {
    userid : 'web7722',
    name : 'ingoo'
}

export default UserContext