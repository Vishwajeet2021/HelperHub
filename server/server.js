import {app} from './app.js';
import { connectMongoDB } from './database/db.js';
connectMongoDB();
import { User } from './models/user.js';
const PORT=4000;
app.listen(PORT,()=>{
    console.log(`Server listening to port number- ${PORT}`);
})
