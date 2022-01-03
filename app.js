// const http = require ('http');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const userRouter = require('./routes/userRoute')

// create the server app
const app = express()

//create the server
// const server = http.createServer((req,res)=> {
//     console.log('request was received');
//     res.write('<h1>Welcome Natalia</h1>')
//     res.end()
// })

app.use('/user', userRouter)

// app.use("/logout", (req, res) => {
//    console.log("user is logged out");
//    res.send('User is logged out')
// });


const port = process.env.PORT || 5000;

// listen to port and connect the server
app.listen(port, () => {
    console.log('server is up and running on port:', port);
})