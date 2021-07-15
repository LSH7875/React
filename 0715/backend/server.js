const express=require('express');
const cors =require('cors');
const app = express()


app.use(cors())
app.get('/api',(req,res)=>{
    res.json([{
        userid:'web7722',
        content:'안녕하세요',
        date:'2021-07-15'
    },{
        userid:'web7722',
        content:'안녕하세요',
        date:'2021-07-15'
    },{
        userid:'web7722',
        content:'안녕하세요',
        date:'2021-07-15'
    }]    )
})

app.listen(3000,()=>{
    console.log('server start 3000' )
})