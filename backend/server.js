// all packages import 
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// all routes import 
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import usersRoutes from './routes/user.routes.js'

// database import 
import connectToMongoDb from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)
app.use('/api/users',usersRoutes)

// app.get('/',(req,res)=>{
//     res.send("Hello Backend World!")
// })

app.listen(PORT,()=>{
    connectToMongoDb()
    console.log(`Server is runnig at ${PORT}`)
})