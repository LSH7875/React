const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

app.post('/api/login',(req,res)=>{
    let result={};
    console.log(req.body.userid);
    console.log(req.body.userpw)
    const {userid,userpw}=req.body
    if(userid == 'web7722' && userpw == '1234'){
        result={
            result:'ok',
            msg:'로그인에 성공했습니다.'
        }
    } else {
        result={
            result:'FAIL',
            msg:'아이디와 패스워드가 다릅니다..'
        }
    }
    res.json({
        result
    })
})


app.get('/',(req,res)=>{
    res.send('hello world!')
})



app.listen(3000,()=>{
    console.log('server start 3000')
})