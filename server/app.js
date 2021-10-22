const express  = require('express')
const mongoo = require('mongoose')
const dotenv = require('dotenv')


const app = express();

dotenv.config({path:'./config.env'})

const DB=process.env.DATABASE;

mongoo.connect(DB).then(()=>{
    console.log('successfull connected');
}).catch((err)=>console.log('not connected'))



const middleware=((req,res,next)=>{
    console.log("Hello this is middleware")
    next()
})

app.get('/',(req,res)=>{
 res.send("Hello world , I amit kumar");
}),
app.get('/about',middleware,(req,res)=>{
 res.send("this is about page");
}),
app.get('/contact',(req,res)=>{
 res.send("Hello world , I amit kumar");
}),

// where to listen why i am clicking it....
app.listen(3000,()=>{
    console.log("server is running at 3000");
})