const mongoose=require("mongoose");
const api_config=require("./config");


const url=api_config.db_url;
mongoose
.connect(url)
.then(()=> {
    console.log("connection succesfull")  
})
.catch((err) => {
    console.error(err)
})

module.exports=mongoose;