import {app} from './app.js';
import { connectMongoDB } from './database/db.js';
connectMongoDB();
import { User } from './models/user.js';
app.listen(process.env.PORT||4001,()=>{
    console.log(`Server listening to port number- ${process.env.PORT}`);
})
