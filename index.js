const express=require('express');
require('./dbConnection');
const user=require('./user_data');
const cors = require('cors');
const app=express();
app.use(cors());
app.use(express.json());
app.get("/", async (req,res)=>{
    let data=await user.find();
    res.send(data);
    console.log(data);

});

app.post('/', async (req,res)=>{
    let data=new user(req.body);
    let result=await data.save();
    res.send(result);
    console.log(result);
})
app.put("/:_id",async (req,res)=>{
    let data=await user.updateOne(req.params,{$set:req.body})
    res.send(data);
    console.log(data);
})
app.delete("/:_id", async (req,res)=>{
    let data=await user.deleteOne(req.params);
    res.send(data);

});
//const PORT=process.env.PORT || 4000;

//app.listen(PORT,console.log(`server started on port ${PORT}`));
app.listen(4000);