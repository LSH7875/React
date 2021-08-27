import React, { useEffect } from 'react'
import RootProvider from '../Providers/rootProvider'


const index = () => {

    useEffect(()=>{
        console.log('이거 되었는가요')
        
    },[])
    return (
        <RootProvider>
            Hello Next !ffff
        </RootProvider>
    )
}

export default index