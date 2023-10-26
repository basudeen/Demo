const express= require('express');
const connection=require('./dp');
const cors=require("cors");
const app=express();
const port=8000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port} `);
});
app.use(cors());
app.use(express.json());
app.use(require('./router')); 