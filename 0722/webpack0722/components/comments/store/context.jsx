import React,{createContext} from 'react'
const initalState = {
    input:'',
    list:[],
    visible:Infinity,
}
const Store = createContext(initalState)

export default Store