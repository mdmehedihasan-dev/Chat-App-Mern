// all packages import 
import  path  from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// all routes import 
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import usersRoutes from './routes/user.routes.js'

// database import 
import connectToMongoDb from './db/connectToMongoDB.js';
import { app, server } from './socket/socket.js';


const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)
app.use('/api/users',usersRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist")));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})

// app.get('/',(req,res)=>{
//     res.send("Hello Backend World!")
// })

server.listen(PORT,()=>{
    connectToMongoDb()
    console.log(`Server is runnig at ${PORT}`)
})