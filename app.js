const mongoose = require('mongoose')
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const userRouter = require('./routes/userRoute')

// create the server app
const app = express()


// DATABASE CONNECTION
mongoose.connect(process.env.DATABASE, ()=>{
    console.log('*** DB Connection established ***');
});

// Middlewares
app.use(express.urlencoded({ extended:true}))
app.use(express.json())


// Routes
app.use('/user', userRouter);


// app.use("/logout", (req, res) => {
//    console.log("user is logged out");
//    res.send('User is logged out')
// });


const port = process.env.PORT || 5000;

// listen to port and connect the server
app.listen(port, () => {
    console.log('server is up and running on port:', port);
})


// mongodb+srv://<username>:<password>@cluster0.peewu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority