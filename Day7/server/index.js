const express=require("express")
const cors=require("cors");
const { Connection } = require("./config/db");
const app=express()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("This ")
  })

app.listen(8400 ,async()=>{
try{
    await Connection
    console.log("Server Connected With DataBase")
    console.log("Server Started At http://localhost:8400")
}catch(err){
console.log("Somethning Wents Wrong",err)
}
})