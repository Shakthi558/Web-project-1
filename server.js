const express=require('express')
const app=express()
const https=require('https')

const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({"extended":true}))
app.get("/",function(req,res){
    res.sendFile(__dirname+"/home.html")

})
app.listen(3000,function(){
    console.log("Server is running and up.")
})
