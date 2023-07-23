const express=require('express')
const {PORT} = require('./config/serverConfig')

const startAndSetupServer= async()=> {
    const app=express();
    
    app.listen(PORT,()=>{
        console.log(`sever started ${PORT}`)
    });
}
startAndSetupServer();