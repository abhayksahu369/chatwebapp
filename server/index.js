const app=require("express")()
const http=require("http")
const server=http.createServer(app)
const io=require("socket.io")(server);



server.listen(5000,()=>{
    console.log("server started at port 5000")
})