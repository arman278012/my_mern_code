const express=require("express");
const app=express();
const port=5000;
const cors=require("cors")

const userRouter=require("./routers/userRouter");
const productRouter=require("./routers/productRouter");
const utilRouter=require("./routers/utils"); 

const {createServer}=require("http")
const {Server}=require("socket.io");
const { log } = require("console");

const httpServer=createServer(app)
const io=new Server(httpServer,{
    cors:{origin:['http://localhost:3000']}

})
io.on("connection",(Socket)=>{
    console.log("client connected")

    Socket.on("sendmsg",(data)=>{
        console.log(data)
        data.sent=false;
        Socket.broadcast.emit("recmsg",data)
        
    })
})

app.use(express.static('./uploads'))

app.use(cors({
    origin:['http://localhost:3000']
}))

app.use(express.json())
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/util", utilRouter)



// app.listen(port,()=>{
//     console.log("server started")  
// })


httpServer.listen(port,()=>{
    console.log("server started")  
})
