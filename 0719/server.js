const express=require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./models/');
const {Comment} = require('./models/index')

app.use(bodyParser.urlencoded(
    {extended:false,}
))

db.sequelize.sync()
.then(console.log('db접속성공'))
.catch(e=>{console.log(e)})



app.get('/',(req,res)=>{
    res.send('hello aws!!!!')
})


app.post('/',(req,res)=>{
    console.log('POSTMAN으로 실행함.')
    res.json(req.body)
})

app.post('/comment',async(req,res)=>{
    console.log('POSTMAN으로 실행함.')
    let {userid,username,userpw}=req.body
    console.log(req.body);
    await Comment.create({
        userid,username,userpw,
    })
    
})


//회원정보 수정 url
app.patch('/user',(req,res)=>{

})

//회원탈퇴 url
app.delete('/user',(req,res)=>{
    
})

app.listen(3003,()=>{
    console.log('server 3003 start')
})