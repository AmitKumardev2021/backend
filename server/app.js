const express  = require('express')

const app = express();

app.get('/',(req,res)=>{
 res.send("Hello world , I amit kumar");
})

// where to listen why i am clicking it....
app.listen(3000,()=>{
    console.log("server is running at 3000");
})